// src/app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { WhyJoinUs } from "@/components/why-join-us";
import { ProgramsSection } from "@/components/programs-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { ImageCarousel } from "@/components/image-carousel";
import { CTASection } from "@/components/cta-section"; // Import the new CTA section

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyJoinUs />
      <ProgramsSection />
      <ImageCarousel />
      <AboutSection />
      <GallerySection />
      <CTASection /> {/* Add CTA section at the end */}
    </main>
  );
}
