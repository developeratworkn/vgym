// src/components/why-join-us.tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { CheckCircle, Clock, Users, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: Users,
    title: "Professional Trainers",
    description:
      "Certified experts with years of experience to guide you every step of the way.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock gym access.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Advanced tools to monitor your progress and celebrate your achievements.",
  },
  {
    icon: CheckCircle,
    title: "Nutrition Guidance",
    description: "Personalized diet plans to complement your training regimen.",
  },
];

export function WhyJoinUs() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[radial-gradient(circle,rgba(59,56,56,1)_0%,rgba(38,36,36,1)_5%,rgba(37,35,35,1)_7%,rgba(36,34,34,1)_12%,rgba(35,33,33,1)_15%,rgba(33,31,31,1)_19%,rgba(24,22,22,1)_28%,rgba(23,21,21,1)_36%,rgba(21,19,19,1)_44%,rgba(20,18,18,1)_52%,rgba(18,16,16,1)_60%,rgba(16,14,14,1)_68%,rgba(14,12,12,1)_78%,rgba(0,0,0,1)_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-graduate text-electricRed mb-4 md:mb-6 font-bold">
              Join Us to Transform, Not Just Train
            </h2>
            <p className="text-lightGrey font-kodeMono text-sm sm:text-base max-w-3xl mx-auto">
              Experience fitness that goes beyond the ordinary. We're committed
              to your complete transformation—body, mind, and spirit.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Benefits List */}
          <AnimatedSection direction="left" delay={0.4}>
            <div className="space-y-6 md:space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 p-2 bg-electricRed/10 rounded-full">
                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-electricRed" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-graduate text-lightGrey mb-1 sm:mb-2 font-bold">
                      {benefit.title}
                    </h3>
                    <p className="text-lightGrey/80 font-kodeMono text-sm sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Image/Visual */}
          <AnimatedSection direction="right" delay={0.6}>
            <div className="relative">
              <div className="aspect-square bg-electricRed/10 rounded-lg overflow-hidden">
                <img
                  src="/Images/a1.jpg"
                  alt="Gym members working out"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Testimonial Card - Responsive positioning */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-deepBlack/90 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-electricRed/20 shadow-lg max-w-xs"
              >
                <div className="flex items-center mb-2 md:mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3 h-3 md:w-4 md:h-4 text-amberYellow fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lightGrey font-kodeMono text-xs md:text-sm mb-2 md:mb-3">
                  "Joined 6 months ago and already transformed my body and
                  mindset. Best decision ever!"
                </p>
                <p className="text-electricRed font-graduate text-xs md:text-sm font-bold">
                  - Michael R.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA Button */}
        <AnimatedSection direction="up" delay={1}>
          <div className="text-center mt-12 md:mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="font-graduate text-base sm:text-lg md:text-xl px-6 py-3 md:px-8 md:py-3 font-bold"
              >
                Start Your Free Trial
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
