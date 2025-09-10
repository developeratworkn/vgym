// src/components/programs-section.tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { Button } from "./ui/button";
import { ArrowRight, Dumbbell, Heart, Flame, Calendar } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    name: "Strength Training",
    tagline: "Build power and endurance",
    color: "text-electricRed",
  },
  {
    icon: Flame,
    name: "HIIT",
    tagline: "Burn calories fast",
    color: "text-amberYellow",
  },
  {
    icon: Heart,
    name: "Yoga",
    tagline: "Flexibility and calm in one",
    color: "text-electricRed",
  },
  {
    icon: Calendar,
    name: "Custom Programs",
    tagline: "Tailored to your goals",
    color: "text-amberYellow",
  },
];

export function ProgramsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[radial-gradient(circle,rgba(59,56,56,1)_0%,rgba(38,36,36,1)_5%,rgba(37,35,35,1)_7%,rgba(36,34,34,1)_12%,rgba(35,33,33,1)_15%,rgba(33,31,31,1)_19%,rgba(24,22,22,1)_28%,rgba(23,21,21,1)_36%,rgba(21,19,19,1)_44%,rgba(20,18,18,1)_52%,rgba(18,16,16,1)_60%,rgba(16,14,14,1)_68%,rgba(14,12,12,1)_78%,rgba(0,0,0,1)_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-graduate text-electricRed mb-4 md:mb-6 font-bold">
              Programs Built for Every Goal
            </h2>
            <p className="text-lightGrey font-kodeMono text-sm sm:text-base max-w-3xl mx-auto">
              From fat loss to muscle gain, find a program that matches your
              journey. Every program is built to bring visible results, faster.
            </p>
          </div>
        </AnimatedSection>

        {/* Program Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {programs.map((program, index) => (
            <AnimatedSection
              key={program.name}
              direction="up"
              delay={0.2 + index * 0.1}
            >
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-deepBlack/50 p-4 md:p-6 rounded-lg border border-electricRed/20 hover:border-electricRed/40 transition-all duration-300 h-full flex flex-col items-center text-center"
              >
                <div className="p-2 md:p-3 bg-electricRed/10 rounded-full mb-3 md:mb-4">
                  <program.icon
                    className={`h-6 w-6 md:h-8 md:w-8 ${program.color}`}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-graduate text-lightGrey mb-2 font-bold">
                  {program.name}
                </h3>
                <p className="text-lightGrey/80 font-kodeMono text-sm md:text-base flex-grow">
                  {program.tagline}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection direction="up" delay={0.6}>
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="font-graduate group text-sm md:text-base"
              >
                Explore More{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
