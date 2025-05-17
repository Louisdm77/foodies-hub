import Hero from "../components/Hero";
import FeaturedMeals from "../components/FeaturedMeals";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import OffersSection from "../components/OffersSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedMeals />
      <AboutSection />
      <TestimonialsSection />
      <OffersSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}