import HeroSection from "@/infinity/components/hero-section";
import ServicesGrid from "@/infinity/components/services-grid";
import WhyChooseUs from "@/infinity/components/why-choose-us";
import TestimonialsSection from "@/infinity/components/testimonials-section";
import FinalCTA from "@/infinity/components/final-cta";

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
