import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ClientOnly";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientOnly>
        <Navigation />
      </ClientOnly>
      
      <div id="home">
        <HeroSection />
      </div>
      
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <ServicesSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.4}>
        <ServiceAreasSection />
      </AnimatedSection>
      
      <ClientOnly>
        <AnimatedSection delay={0.6}>
          <GallerySection />
        </AnimatedSection>
      </ClientOnly>
      
      <ClientOnly>
        <AnimatedSection delay={0.8}>
          <TestimonialsSection />
        </AnimatedSection>
      </ClientOnly>
      
      <ClientOnly>
        <AnimatedSection delay={1.0}>
          <ContactSection />
        </AnimatedSection>
      </ClientOnly>
      
      {/* <AnimatedSection delay={1.2}>
        <Footer />
      </AnimatedSection> */}
    </main>
  );
}
