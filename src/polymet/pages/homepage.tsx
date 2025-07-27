import HeroSection from "@/polymet/components/hero-section";
import ServicesGrid from "@/polymet/components/services-grid";
import WhyChooseUs from "@/polymet/components/why-choose-us";
import TestimonialsSection from "@/polymet/components/testimonials-section";
import FinalCTA from "@/polymet/components/final-cta";

export default function Homepage() {
  return (
    <div>
      <HeroSection />

      <ServicesGrid />

      <WhyChooseUs />

      <TestimonialsSection />

      <FinalCTA />
    </div>
  );
}
