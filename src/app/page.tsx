import Navbar from '@/components/Navbar';
import CanvasShader from '@/components/CanvasShader';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import WhyStacklin from '@/components/WhyStacklin';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Immersive WebGL Mesh Canvas Background */}
      <CanvasShader />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content Wrapper (Smooth Scrolled by Lenis) */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Cinematic Hero Section */}
        <Hero />

        {/* Trusted By Carousel/Marquee */}
        <TrustedBy />

        {/* Selected Work Portfolio */}
        <FeaturedProjects />

        {/* Services Bento Grid */}
        <Services />

        {/* Workflows Timeline */}
        <Process />

        {/* Tech Stack Grid */}
        <TechStack />

        {/* Why Stacklin Outcomes */}
        <WhyStacklin />

        {/* Client Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact Form Inquiry */}
        <ContactCTA />

        {/* Luxury Footer */}
        <Footer />
      </main>
    </>
  );
}
