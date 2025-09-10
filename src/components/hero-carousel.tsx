// src/components/hero-carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  {
    id: 1,
    video: "/Videos/h1.mp4",
    title: "Transform Your Body",
    subtitle: "Premium Fitness Experience",
  },
  {
    id: 2,
    video: "/Videos/h2.mp4",
    title: "Elite Training",
    subtitle: "World-Class Facilities",
  },
  {
    id: 3,
    video: "/Videos/h3.mp4",
    title: "Community Strength",
    subtitle: "Join Our Fitness Family",
  },
  {
    id: 4,
    video: "/Videos/h4.mp4",
    title: "Achieve Greatness",
    subtitle: "Your Journey Starts Here",
  },
];

export function HeroCarousel() {
  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10" />

              {/* Content - Responsive text sizes and padding */}
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white max-w-2xl"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-graduate mb-4 font-bold">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-kodeMono mb-6 md:mb-8">
                      {slide.subtitle}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-electricRed hover:text-amberYellow font-graduate text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 cursor-pointer"
                    >
                      Start Your Journey <ArrowRight className="ml-2" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
