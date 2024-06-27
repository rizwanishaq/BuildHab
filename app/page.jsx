import AboutSection from "@/components/About";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
export default async function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
