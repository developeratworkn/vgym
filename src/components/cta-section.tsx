// src/components/cta-section.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-electricRed/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-graduate text-electricRed mb-4 md:mb-6 font-bold">
            READY TO TRANSFORM YOUR LIFE?
          </h2>
          <p className="text-lightGrey font-kodeMono text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto">
            Join our community of fitness enthusiasts and start your journey to
            a healthier, stronger you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="font-graduate text-base sm:text-lg md:text-xl px-6 py-3 md:px-8 md:py-4 font-bold"
            >
              Start Your Free Trial
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
