// src/app/services/page.tsx
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { GallerySection } from "@/components/gallery-section";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentTrainerIndex, setCurrentTrainerIndex] = useState(0);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(1); // Start with the second plan (Quarterly) as center
  const containerRef = useRef<HTMLDivElement>(null);

  const trainers = [
    {
      id: 1,
      name: "Daksh Gupta",
      specialization: "Strength & Conditioning",
      bio: "10+ years experience in strength training. Certified CSCS with a passion for helping athletes reach peak performance.",
      social: {
        instagram: "https://www.instagram.com",
        twitter: "https://twitter.com/alexmorganfit",
      },
      image: "/Images/c1.jpg",
    },
    {
      id: 2,
      name: "Aradhya Gupta",
      specialization: "Yoga & Mobility",
      bio: "RYT-500 certified yoga instructor with expertise in mobility and functional movement patterns for all fitness levels.",
      social: {
        instagram: "https://www.instagram.com",
        twitter: "https://twitter.com/sarahyoga",
      },
      image: "/Images/c2.jpg",
    },
    {
      id: 3,
      name: "Yash Pandey",
      specialization: "HIIT & Cardio",
      bio: "Specialist in high-intensity interval training with a focus on fat loss and cardiovascular health. NASM certified.",
      social: {
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/mikehiit",
      },
      image: "/Images/t2.jpg",
    },
    {
      id: 4,
      name: "Veer Pandey",
      specialization: "Nutrition & Wellness",
      bio: "Registered dietitian and wellness coach with a holistic approach to health and sustainable lifestyle changes.",
      social: {
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/jessicanutrition",
      },
      image: "/Images/g1.jpg",
    },
  ];

  const plans = [
    {
      title: "Monthly",
      price: "₹1500",
      period: "per month",
      benefits: [
        "Access to all facilities",
        "5 group classes/week",
        "Basic workout plan",
        "Email support",
      ],
    },
    {
      title: "Quarterly",
      price: "₹4500",
      period: "for 3 months",
      benefits: [
        "All Monthly benefits",
        "Personalized workout",
        "Nutrition guide",
        "Priority support",
      ],
    },
    {
      title: "Half-Yearly",
      price: "₹7000",
      period: "for 6 months",
      benefits: [
        "All Quarterly benefits",
        "24/7 gym access",
        "Recovery treatments",
        "3 personal sessions",
      ],
    },
    {
      title: "Yearly",
      price: "₹12000",
      period: "for 12 months",
      benefits: [
        "All Half-Yearly benefits",
        "VIP locker access",
        "Premium recovery",
        "6 personal sessions",
      ],
    },
  ];

  // Trainer carousel functions
  const nextTrainer = useCallback(() => {
    setCurrentTrainerIndex((prev) => (prev + 1) % trainers.length);
  }, [trainers.length]);

  const prevTrainer = useCallback(() => {
    setCurrentTrainerIndex(
      (prev) => (prev - 1 + trainers.length) % trainers.length
    );
  }, [trainers.length]);

  // Plan carousel functions
  const nextPlan = useCallback(() => {
    setCurrentPlanIndex((prev) => (prev + 1) % plans.length);
  }, [plans.length]);

  const prevPlan = useCallback(() => {
    setCurrentPlanIndex((prev) => (prev - 1 + plans.length) % plans.length);
  }, [plans.length]);

  // Auto rotate trainers
  useEffect(() => {
    const interval = setInterval(nextTrainer, 5000);
    return () => clearInterval(interval);
  }, [nextTrainer]);

  // Auto rotate plans
  useEffect(() => {
    const interval = setInterval(nextPlan, 5000);
    return () => clearInterval(interval);
  }, [nextPlan]);

  // Keyboard support for plans
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPlan();
      if (e.key === "ArrowLeft") prevPlan();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextPlan, prevPlan]);

  // Touch support for plans
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextPlan(); // swipe left → next
      }
      if (touchEndX - touchStartX > 50) {
        prevPlan(); // swipe right → prev
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextPlan, prevPlan]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle,rgba(59,56,56,1)_0%,rgba(38,36,36,1)_5%,rgba(37,35,35,1)_7%,rgba(36,34,34,1)_12%,rgba(35,33,33,1)_15%,rgba(33,31,31,1)_19%,rgba(24,22,22,1)_28%,rgba(23,21,21,1)_36%,rgba(21,19,19,1)_44%,rgba(20,18,18,1)_52%,rgba(18,16,16,1)_60%,rgba(16,14,14,1)_68%,rgba(14,12,12,1)_78%,rgba(0,0,0,1)_100%)]">
      {/* Section 1: Full-viewport Video */}
      <section className="h-screen relative">
        <video
          autoPlay
          loop
          muted={isVideoPlaying}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Videos/h7.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-deepBlack/50 flex items-center justify-center">
          <div className="text-center text-white">
            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-graduate mb-6 text-shadow font-bold">
                BEYOND LIMITS
              </h1>
              <p className="text-xl md:text-2xl font-kodeMono text-shadow max-w-2xl mx-auto">
                Premium services designed to transform your fitness journey
              </p>
            </AnimatedSection>
          </div>
        </div>

        <button
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          className="absolute bottom-6 right-6 bg-deepBlack/50 p-3 rounded-full border border-electricRed/20 hover:border-electricRed transition-colors"
        >
          {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </section>

      {/* Section 2: Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold">
              YOUR SUCCESS IS OUR MISSION
            </h2>
            <p className="text-xl font-kodeMono text-lightGrey max-w-3xl mx-auto mb-8">
              We measure our success by your achievements. Every program, every
              trainer, and every facility is designed with one goal in mind:
              your transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { value: "95%", label: "Client Satisfaction Rate" },
                { value: "5000+", label: "Transformations" },
                { value: "10+", label: "Years of Excellence" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="bg-deepBlack/50 p-6 rounded-lg border border-electricRed/20"
                >
                  <div className="text-3xl font-graduate text-electricRed mb-2 font-bold">
                    {stat.value}
                  </div>
                  <div className="text-lightGrey font-kodeMono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2.5: Programs Section */}
      <section className="py-20 bg-deepBlack/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold"
          >
            OUR PROGRAMS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-kodeMono text-lightGrey max-w-2xl mx-auto mb-12"
          >
            Explore programs crafted to challenge, inspire, and transform you.
            Each one brings a new way to reach your best self.
          </motion.p>

          {/* Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Strength Training",
                desc: "Build raw strength with structured progressive workouts.",
                img: "/Images/c1.jpg",
              },
              {
                title: "HIIT Workouts",
                desc: "Burn fat fast with high-intensity interval training.",
                img: "/Images/t2.jpg",
              },
              {
                title: "Yoga & Mobility",
                desc: "Improve flexibility, balance, and inner calm.",
                img: "/Images/c2.jpg",
              },
              {
                title: "Cardio Endurance",
                desc: "Boost stamina with tailored cardio-based sessions.",
                img: "/Images/g1.jpg",
              },
              {
                title: "Functional Training",
                desc: "Train for real-world strength and agility.",
                img: "/Images/t3.jpg",
              },
              {
                title: "Nutrition Coaching",
                desc: "Personalized diet guidance for peak performance.",
                img: "/Images/g2.jpg",
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-electricRed/20 bg-deepBlack/60 shadow-lg flex flex-col"
              >
                {/* Upper Part - Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Lower Part - Text */}
                <div className="flex flex-col flex-grow p-6 text-left">
                  <h3 className="text-2xl font-graduate text-electricRed font-bold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-lightGrey font-kodeMono text-sm mb-4 flex-grow">
                    {program.desc}
                  </p>
                  <Button className="font-graduate font-bold w-full mt-auto">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Trainer Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold">
                OUR EXPERT TRAINERS
              </h2>
              <p className="text-xl font-kodeMono text-lightGrey max-w-3xl mx-auto">
                Meet the professionals who will guide your fitness journey
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Trainer Carousel */}
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              {trainers.map((trainer, index) => (
                <motion.div
                  key={trainer.id}
                  initial={{
                    opacity: 0,
                    x: index > currentTrainerIndex ? 100 : -100,
                  }}
                  animate={{
                    opacity: index === currentTrainerIndex ? 1 : 0,
                    x:
                      index === currentTrainerIndex
                        ? 0
                        : index > currentTrainerIndex
                        ? 100
                        : -100,
                    zIndex: index === currentTrainerIndex ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <div className="h-full bg-deepBlack/50 rounded-lg overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 bg-deepBlack/50 rounded-lg border border-electricRed/20">
                    <h3 className="text-2xl font-graduate text-electricRed mb-2 font-bold">
                      {trainer.name}
                    </h3>
                    <p className="text-amberYellow font-kodeMono mb-4">
                      {trainer.specialization}
                    </p>
                    <p className="text-lightGrey font-kodeMono mb-6">
                      {trainer.bio}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={trainer.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightGrey/60 hover:text-electricRed transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href={trainer.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightGrey/60 hover:text-electricRed transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTrainer}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-deepBlack/50 p-2 rounded-full border border-electricRed/20 hover:border-electricRed transition-colors z-20"
            >
              <ChevronLeft size={24} className="text-electricRed" />
            </button>
            <button
              onClick={nextTrainer}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-deepBlack/50 p-2 rounded-full border border-electricRed/20 hover:border-electricRed transition-colors z-20"
            >
              <ChevronRight size={24} className="text-electricRed" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {trainers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrainerIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTrainerIndex
                      ? "bg-electricRed w-6"
                      : "bg-lightGrey/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Gallery Section */}
      <GallerySection />

      {/* Section 5: Pricing Section - Carousel Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold">
                MEMBERSHIP PLANS
              </h2>
              <p className="text-xl font-kodeMono text-lightGrey max-w-3xl mx-auto">
                Choose the plan that fits your fitness journey
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div className="flex justify-center items-center min-h-[500px]">
                {plans.map((plan, index) => {
                  const position =
                    (index - currentPlanIndex + plans.length) % plans.length;
                  let className = "absolute transition-all duration-500 w-80";

                  if (position === 0)
                    className += " -translate-x-full opacity-60 scale-90 z-10";
                  else if (position === 1)
                    className += " translate-x-0 opacity-100 scale-100 z-20";
                  else if (position === 2)
                    className += " translate-x-full opacity-60 scale-90 z-10";
                  else className += " translate-x-full opacity-0 scale-50 z-0";

                  return (
                    <motion.div
                      key={plan.title}
                      className={`bg-deepBlack/70 p-8 rounded-lg border-2 border-electricRed/20 ${className}`}
                      whileHover={
                        position === 1
                          ? { y: -10, transition: { duration: 0.3 } }
                          : {}
                      }
                    >
                      {index === 2 && ( // Highlight the center plan (Half-Yearly)
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-electricRed text-deepBlack font-graduate font-bold px-4 py-1 rounded-full text-sm">
                          MOST POPULAR
                        </div>
                      )}

                      <h3 className="text-2xl font-graduate text-lightGrey text-center mb-4 font-bold">
                        {plan.title}
                      </h3>

                      <div className="text-center mb-6">
                        <div className="text-3xl font-graduate text-electricRed font-bold">
                          {plan.price}
                        </div>
                        <div className="text-lightGrey/60 font-kodeMono text-sm">
                          {plan.period}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-electricRed mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span className="text-lightGrey font-kodeMono text-sm">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={position === 1 ? { scale: 1.05 } : {}}
                        whileTap={position === 1 ? { scale: 0.95 } : {}}
                      >
                        <Button
                          className={`w-full font-graduate font-bold ${
                            index === 2
                              ? "bg-amberYellow text-deepBlack hover:bg-amberYellow/80"
                              : ""
                          }`}
                          disabled={position !== 1}
                        >
                          {position === 1 ? "Get Started" : "View Details"}
                        </Button>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevPlan}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-deepBlack/50 p-3 rounded-full border border-electricRed/20 hover:border-electricRed transition-colors z-30"
            >
              <ChevronLeft size={24} className="text-electricRed" />
            </button>
            <button
              onClick={nextPlan}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-deepBlack/50 p-3 rounded-full border border-electricRed/20 hover:border-electricRed transition-colors z-30"
            >
              <ChevronRight size={24} className="text-electricRed" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPlanIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentPlanIndex
                      ? "bg-electricRed w-6"
                      : "bg-lightGrey/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional CTA - Matching About Us Page Style */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="text-center mt-16 p-8 bg-electricRed/10 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-graduate text-electricRed mb-4 font-bold">
                NOT SURE WHICH PLAN IS RIGHT FOR YOU?
              </h3>
              <p className="text-xl font-kodeMono text-lightGrey mb-6 max-w-3xl mx-auto">
                Schedule a free consultation with our experts to find the
                perfect plan for your goals and budget.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="font-graduate text-lg px-8 py-3 font-bold"
                >
                  Book a Free Consultation{" "}
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
