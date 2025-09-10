// src/app/about/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GallerySection } from "@/components/gallery-section";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Play,
  Pause,
} from "lucide-react";

export default function AboutPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [activeFounder, setActiveFounder] = useState<number | null>(null);

  const founders = [
    {
      id: 1,
      name: "Vishal Sharma",
      role: "Founder & Head Trainer",
      image: "/images/e1.jpg",
      bio: "15+ years of experience in fitness training. Certified personal trainer with expertise in strength conditioning and nutrition.",
      social: {
        instagram: "https://instagram.com/vishal",
        facebook: "https://facebook.com/vishal",
        twitter: "https://twitter.com/vishal",
      },
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Co-Founder & Yoga Specialist",
      image: "/images/h2.jpg",
      bio: "International yoga instructor with 10+ years of experience. Specialized in therapeutic yoga and mindfulness practices.",
      social: {
        instagram: "https://instagram.com/priya",
        facebook: "https://facebook.com/priya",
        linkedin: "https://linkedin.com/in/priya",
      },
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Operations Manager",
      image: "/images/e1.jpg",
      bio: "Fitness industry veteran with expertise in gym operations and member experience. Passionate about creating welcoming spaces.",
      social: {
        instagram: "https://instagram.com/rajesh",
        twitter: "https://twitter.com/rajesh",
        linkedin: "https://linkedin.com/in/rajesh",
      },
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our facilities to our training programs.",
      icon: "🏆",
    },
    {
      title: "Community",
      description:
        "We believe in building a supportive community where everyone feels welcome and encouraged.",
      icon: "👥",
    },
    {
      title: "Innovation",
      description:
        "We continuously evolve our methods and facilities to provide the best fitness experience.",
      icon: "💡",
    },
    {
      title: "Wellness",
      description:
        "We promote holistic wellness that encompasses physical, mental, and emotional health.",
      icon: "🧠",
    },
  ];

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
          <source src="/Videos/h6.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-deepBlack/50 flex items-center justify-center">
          <div className="text-center text-white">
            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-graduate mb-6 font-bold">
                <span className="text-shadow">BEYOND</span>{" "}
                <span className="text-amberYellow">FITNESS</span>
              </h1>

              <p className="text-xl md:text-2xl font-kodeMono text-shadow max-w-2xl mx-auto">
                Building stronger bodies, minds, and communities since 2015
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
            <h2 className="text-4xl md:text-5xl font-graduate text-amberYellow mb-6 font-bold">
              HELPING PEOPLE IMPROVE
            </h2>
            <p className="text-xl font-kodeMono text-lightGrey max-w-3xl mx-auto">
              Our mission is to empower individuals to transform their lives
              through fitness, community, and expert guidance. We believe
              everyone deserves to feel strong, confident, and healthy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upper Part: Our Story */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl font-graduate text-amberYellow mb-6 font-bold">
                OUR STORY
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <p className="text-lightGrey font-kodeMono mb-6">
                    V's Gym began in 2015 with a simple vision: to create a
                    fitness space that focuses on holistic wellness rather than
                    just physical training. What started as a small local gym
                    has grown into a community of over 5,000 members.
                  </p>
                  <p className="text-lightGrey font-kodeMono mb-6">
                    Our founders, Vishal and Priya, combined their expertise in
                    strength training and yoga to create a unique approach to
                    fitness that balances physical intensity with mental
                    wellness.
                  </p>
                  <p className="text-lightGrey font-kodeMono">
                    Today, we continue to innovate and expand our offerings
                    while staying true to our core values of community,
                    excellence, and holistic health.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-electricRed/10 rounded-lg overflow-hidden">
                    <img
                      src="/Images/e1.jpg"
                      alt="V's Gym history"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-deepBlack/90 backdrop-blur-sm p-6 rounded-lg border border-electricRed/20 shadow-lg">
                    <div className="text-electricRed font-graduate text-2xl font-bold mb-2">
                      5,00+
                    </div>
                    <div className="text-lightGrey font-kodeMono text-sm">
                      Members Transformed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Founders Section */}
          <AnimatedSection direction="up" delay={0.4}>
            <h3 className="text-xs font-graduate text-[#252424] text-center mb-10 font-bold">
              .
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div
                    className="bg-deepBlack/50 p-6 rounded-lg border border-electricRed/20 hover:border-electricRed/40 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setActiveFounder(
                        activeFounder === founder.id ? null : founder.id
                      )
                    }
                  >
                    <div className="aspect-square w-32 h-32 mx-auto mb-6 bg-electricRed/10 rounded-full overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-graduate text-lightGrey text-center mb-2 font-bold">
                      {founder.name}
                    </h4>
                    <p className="text-electricRed font-kodeMono text-center mb-4">
                      {founder.role}
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-4 mb-4">
                      {founder.social.instagram && (
                        <a
                          href={founder.social.instagram}
                          className="text-lightGrey/60 hover:text-electricRed transition-colors"
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                      {founder.social.facebook && (
                        <a
                          href={founder.social.facebook}
                          className="text-lightGrey/60 hover:text-electricRed transition-colors"
                        >
                          <Facebook size={20} />
                        </a>
                      )}
                      {founder.social.twitter && (
                        <a
                          href={founder.social.twitter}
                          className="text-lightGrey/60 hover:text-electricRed transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                      {founder.social.linkedin && (
                        <a
                          href={founder.social.linkedin}
                          className="text-lightGrey/60 hover:text-electricRed transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                    </div>

                    {/* Bio (shown on click) */}
                    {activeFounder === founder.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden"
                      >
                        <p className="text-lightGrey/80 font-kodeMono text-sm text-center">
                          {founder.bio}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Lower Part: Our Values */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="mt-20 text-center">
              <h3 className="text-3xl font-graduate text-electricRed mb-12 font-bold">
                OUR VALUES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="bg-deepBlack/50 p-6 rounded-lg border border-electricRed/20 hover:border-electricRed/40 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-graduate text-lightGrey mb-3 font-bold">
                      {value.title}
                    </h4>
                    <p className="text-lightGrey/80 font-kodeMono text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GallerySection />

      {/* Section 4: Contact Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold">
                GET IN TOUCH
              </h2>
              <p className="text-xl font-kodeMono text-lightGrey max-w-3xl mx-auto">
                Have questions or ready to start your fitness journey? We'd love
                to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection direction="left" delay={0.4}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-graduate text-lightGrey mb-6 font-bold">
                    CONTACT INFORMATION
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-electricRed mt-1" />
                      <div>
                        <h4 className="font-graduate text-lightGrey font-bold">
                          ADDRESS
                        </h4>
                        <p className="font-kodeMono text-lightGrey/80">
                          123 Fitness Street, Health City, FC 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-electricRed mt-1" />
                      <div>
                        <h4 className="font-graduate text-lightGrey font-bold">
                          PHONE
                        </h4>
                        <p className="font-kodeMono text-lightGrey/80">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-electricRed mt-1" />
                      <div>
                        <h4 className="font-graduate text-lightGrey font-bold">
                          EMAIL
                        </h4>
                        <p className="font-kodeMono text-lightGrey/80">
                          info@vsgym.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-graduate text-lightGrey mb-6 font-bold">
                    BUSINESS HOURS
                  </h3>
                  <div className="space-y-2 font-kodeMono">
                    <div className="flex justify-between">
                      <span className="text-lightGrey">Monday - Friday</span>
                      <span className="text-amberYellow">
                        5:00 AM - 11:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lightGrey">Saturday</span>
                      <span className="text-amberYellow">
                        6:00 AM - 9:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lightGrey">Sunday</span>
                      <span className="text-amberYellow">
                        7:00 AM - 8:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.6}>
              <div className="bg-deepBlack/50 p-8 rounded-lg border border-electricRed/20">
                <h3 className="text-2xl font-graduate text-lightGrey mb-6 font-bold">
                  SEND US A MESSAGE
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-lightGrey font-kodeMono mb-2"
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full bg-deepBlack/30 border-electricRed/20 focus:border-electricRed"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lightGrey font-kodeMono mb-2"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className="w-full bg-deepBlack/30 border-electricRed/20 focus:border-electricRed"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-lightGrey font-kodeMono mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="w-full bg-deepBlack/30 border-electricRed/20 focus:border-electricRed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lightGrey font-kodeMono mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="w-full bg-deepBlack/30 border-electricRed/20 focus:border-electricRed"
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="w-full font-graduate font-bold"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 5: CTA Banner */}
      <section className="py-20 bg-electricRed/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold">
              READY TO TRANSFORM YOUR LIFE?
            </h2>
            <p className="text-xl font-kodeMono text-lightGrey mb-8 max-w-3xl mx-auto">
              Join our community of fitness enthusiasts and start your journey
              to a healthier, stronger you.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="font-graduate text-lg px-8 py-3 font-bold"
              >
                Start Your Free Trial
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
