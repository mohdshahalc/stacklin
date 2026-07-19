'use client';

import { useEffect, useRef } from 'react';

const VERTEX_SHADER_SOURCE = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  // Simple pseudo-noise function
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    float t = u_time * 0.4;
    
    // Deep Luxury Space Base Color (#050505)
    vec3 bg = vec3(0.02, 0.02, 0.025);
    
    // Soft floating Royal Blue gradient orb (#5D7CFF)
    vec2 o1 = vec2(sin(t * 0.4), cos(t * 0.6)) * 0.5;
    float d1 = 0.4 / (length(p - o1) + 0.01);
    vec3 c1 = vec3(0.36, 0.48, 1.0) * pow(d1, 1.2) * 0.15;
    
    // Soft floating Electric Cyan gradient orb (#00D8FF)
    vec2 o2 = vec2(cos(t * 0.5), sin(t * 0.3)) * 0.6;
    float d2 = 0.35 / (length(p - o2) + 0.01);
    vec3 c2 = vec3(0.0, 0.85, 1.0) * pow(d2, 1.2) * 0.12;

    // Subtle cursor-following light glow
    vec2 targetMouse = (u_mouse * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    float mouseGlow = 0.25 / (length(p - targetMouse) + 0.01);
    vec3 cMouse = vec3(0.0, 0.85, 1.0) * pow(mouseGlow, 1.3) * 0.08;

    // Combine orbs and background
    vec3 color = bg + c1 + c2 + cMouse;
    
    // Fine cinematic grain noise
    float grain = (noise(gl_FragCoord.xy + t) - 0.5) * 0.015;
    color += vec3(grain);
    
    // Subtle vignette
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
    vignette = clamp(pow(16.0 * vignette, 0.25), 0.0, 1.0);
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function CanvasShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Helper to compile shader
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(VERTEX_SHADER_SOURCE, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(FRAGMENT_SHADER_SOURCE, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Setup screen-aligned quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);

    // Track mouse coordinates
    let mouseX = w / 2;
    let mouseY = h / 2;
    let targetMouseX = w / 2;
    let targetMouseY = h / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = h - e.clientY; // Invert Y for WebGL coords
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let startTime = Date.now();

    const render = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      // Smooth mouse movement tracking (lerp)
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      gl.uniform2f(resolutionLocation, w, h);
      gl.uniform1f(timeLocation, elapsed);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full opacity-40" />
    </div>
  );
}
