// src/components/gallery-section.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring config
  const springConfig = { stiffness: 80, damping: 20, restDelta: 0.001 };

  // Expansion scale (60% → 100%)
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scale = useSpring(rawScale, springConfig);

  // Rounded edges dissolve
  const rawBorder = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const borderRadius = useSpring(rawBorder, springConfig);

  // Overlay fade
  const rawOverlay = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [0, 0.6, 0]
  );
  const overlayOpacity = useSpring(rawOverlay, springConfig);

  return (
    <section
      ref={containerRef}
      className="h-screen relative bg-deepBlack overflow-hidden"
    >
      {/* Expanding video */}
      <motion.video
        src="/Videos/h12.mp4"
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover shadow-2xl"
        style={{
          scale,
          borderRadius,
        }}
      />

      {/* Blur/Fade overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-deepBlack/60 backdrop-blur-md pointer-events-none"
      />

      {/* Centered overlay content with responsive text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-graduate font-bold text-amberYellow text-shadow mb-4 md:mb-6">
          Discover the Energy Inside
        </h3>
        <Link
          href="/gallery"
          className="relative text-base sm:text-lg md:text-xl font-kodeMono text-lightGrey hover:text-electricRed hover:blur-[1px] hover:underline transition-all flex items-center gap-2"
        >
          Take a Tour
          <ChevronRight className="inline-block w-4 h-4 md:w-5 md:h-5 text-electricRed" />
        </Link>
      </div>
    </section>
  );
}
