'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Auto-resize Lenis when DOM height updates
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 2. Custom Cursor & Magnetic Target Movement
    const cursorDot = cursorDotRef.current;
    const cursorFollower = cursorFollowerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let activeMagnetic: HTMLElement | null = null;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }

      // Magnetic logic
      const target = e.target as HTMLElement;
      const magneticTarget = target.closest('.magnetic-target') as HTMLElement | null;

      if (magneticTarget) {
        if (activeMagnetic && activeMagnetic !== magneticTarget) {
          activeMagnetic.style.transform = '';
        }
        activeMagnetic = magneticTarget;
        const rect = magneticTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        magneticTarget.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
        magneticTarget.style.transition = 'transform 0.1s ease-out';

        if (cursorFollower) {
          cursorFollower.style.width = '72px';
          cursorFollower.style.height = '72px';
          cursorFollower.style.borderColor = 'rgba(0, 216, 255, 0.7)';
          cursorFollower.style.backgroundColor = 'rgba(0, 216, 255, 0.05)';
        }
      } else {
        if (activeMagnetic) {
          activeMagnetic.style.transform = '';
          activeMagnetic.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
          activeMagnetic = null;
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Smooth follower tracking using basic lerp
    let isMoving = true;
    const updateFollower = () => {
      if (!isMoving) return;
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      if (cursorFollower) {
        cursorFollower.style.left = `${followerX}px`;
        cursorFollower.style.top = `${followerY}px`;
      }
      requestAnimationFrame(updateFollower);
    };
    requestAnimationFrame(updateFollower);

    // Hover states for links and buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive-hover')
      ) {
        if (!target.closest('.magnetic-target')) {
          if (cursorFollower) {
            cursorFollower.style.width = '56px';
            cursorFollower.style.height = '56px';
            cursorFollower.style.borderColor = 'rgba(0, 216, 255, 0.8)';
            cursorFollower.style.backgroundColor = 'rgba(0, 216, 255, 0.03)';
          }
          if (cursorDot) {
            cursorDot.style.backgroundColor = '#5D7CFF';
          }
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive-hover')
      ) {
        if (cursorFollower) {
          cursorFollower.style.width = '36px';
          cursorFollower.style.height = '36px';
          cursorFollower.style.borderColor = 'rgba(0, 216, 255, 0.3)';
          cursorFollower.style.backgroundColor = 'transparent';
        }
        if (cursorDot) {
          cursorDot.style.backgroundColor = '#00D8FF';
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      resizeObserver.disconnect();
      lenis.destroy();
      isMoving = false;
    };
  }, []);

  return (
    <>
      {/* Cinema grain overlay */}
      <div className="grain-overlay" />

      {/* Custom Cursor elements */}
      <div id="cursor-dot" ref={cursorDotRef} className="hidden md:block" />
      <div id="cursor-follower" ref={cursorFollowerRef} className="hidden md:block" />

      {children}
    </>
  );
}
