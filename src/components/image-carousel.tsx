// src/components/image-carousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ImageCarousel() {
  return (
    <section className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-deepBlack">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-full"
      >
        <SwiperSlide className="w-full h-full">
          <Image
            src="/Images/d2.jpg"
            alt="Gym 1"
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image
            src="/Images/i2.jpg"
            alt="Gym 2"
            fill
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image
            src="/Images/b2.jpg"
            alt="Gym 3"
            fill
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
