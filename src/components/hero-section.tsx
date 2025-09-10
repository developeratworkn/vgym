// src/components/hero-section.tsx
"use client";

import { Navbar } from "@/components/navbar";
import { HeroCarousel } from "@/components/hero-carousel";

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <Navbar heroHeight={0} />
      <div className="pt-16 h-full">
        <HeroCarousel />
      </div>
    </section>
  );
}
