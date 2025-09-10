// src/components/about-section.tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[radial-gradient(circle,rgba(59,56,56,1)_0%,rgba(38,36,36,1)_5%,rgba(37,35,35,1)_7%,rgba(36,34,34,1)_12%,rgba(35,33,33,1)_15%,rgba(33,31,31,1)_19%,rgba(24,22,22,1)_28%,rgba(23,21,21,1)_36%,rgba(21,19,19,1)_44%,rgba(20,18,18,1)_52%,rgba(18,16,16,1)_60%,rgba(16,14,14,1)_68%,rgba(14,12,12,1)_78%,rgba(0,0,0,1)_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection direction="left" delay={0.2}>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-graduate text-electricRed mb-4 md:mb-6 font-bold">
                More Than a Gym, A Lifestyle
              </h2>
              <div className="space-y-4 font-kodeMono text-lightGrey text-sm sm:text-base">
                <p>
                  We believe fitness is not just about lifting weights – it's
                  about building confidence, strength, and community.
                </p>
                <p>
                  Our trainers, programs, and environment are designed to
                  support every journey, from beginners taking their first steps
                  to athletes pushing their limits.
                </p>
                <p>
                  At V's Gym, we're committed to creating a space where everyone
                  feels welcome, supported, and empowered to become their best
                  self.
                </p>
              </div>
              <div className="mt-6 md:mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="font-graduate font-bold text-sm md:text-base">
                    Learn More About Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="relative">
              <div className="aspect-[4/5] bg-electricRed/10 rounded-lg overflow-hidden">
                <img
                  src="/Images/h2.jpg"
                  alt="Gym community and trainers"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats Card - Responsive positioning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-deepBlack/90 backdrop-blur-sm p-3 md:p-6 rounded-lg border border-electricRed/20 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-xl md:text-2xl lg:text-3xl font-graduate text-electricRed mb-1 font-bold">
                    500+
                  </div>
                  <div className="text-lightGrey font-kodeMono text-xs md:text-sm">
                    Transformed Members
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
