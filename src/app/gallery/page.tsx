// src/app/gallery/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronDown, X, Expand } from "lucide-react";

export default function GalleryPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<{
    type: string;
    src: string;
    title: string;
  } | null>(null);

  const categories = [
    { id: "all", name: "All Media" },
    { id: "workouts", name: "Workouts" },
    { id: "facility", name: "Facility" },
    { id: "transformations", name: "Transformations" },
    { id: "events", name: "Events" },
  ];

  const galleryMedia = [
    {
      id: 1,
      type: "image",
      src: "/Images/a1.jpg",
      category: "workouts",
      title: "Strength Training Session",
    },
    {
      id: 2,
      type: "image",
      src: "/Images/d2.jpg",
      category: "facility",
      title: "Main Gym Area",
    },
    {
      id: 3,
      type: "image",
      src: "/Images/b1.jpg",
      category: "transformations",
      title: "12 Week Transformation",
    },
    {
      id: 4,
      type: "video",
      src: "/Videos/h5.mp4",
      category: "workouts",
      title: "HIIT Circuit Training",
    },
    {
      id: 5,
      type: "image",
      src: "/Images/c1.jpg",
      category: "events",
      title: "Annual Fitness Challenge",
    },
    {
      id: 6,
      type: "image",
      src: "/Images/a2.jpg",
      category: "workouts",
      title: "Yoga Class",
    },
    {
      id: 7,
      type: "image",
      src: "/Images/b2.jpg",
      category: "facility",
      title: "Locker Room",
    },
    {
      id: 8,
      type: "video",
      src: "/Videos/h7.mp4",
      category: "transformations",
      title: "Client Success Story",
    },
    {
      id: 9,
      type: "image",
      src: "/Images/c2.jpg",
      category: "events",
      title: "Nutrition Workshop",
    },
    {
      id: 10,
      type: "image",
      src: "/Images/e3.jpg",
      category: "workouts",
      title: "Personal Training",
    },
    {
      id: 11,
      type: "image",
      src: "/Images/e2.jpg",
      category: "facility",
      title: "Cardio Zone",
    },
    {
      id: 12,
      type: "video",
      src: "/Videos/h11.mp4",
      category: "events",
      title: "Community Workout",
    },
  ];

  const filteredMedia =
    activeCategory === "all"
      ? galleryMedia
      : galleryMedia.filter((media) => media.category === activeCategory);

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
          <source src="/Videos/h9.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-deepBlack/50 flex items-center justify-center">
          <div className="text-center text-white">
            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-graduate mb-6 text-shadow font-bold">
                BEHIND THE SCENES
              </h1>
              <p className="text-xl md:text-2xl font-kodeMono text-shadow max-w-2xl mx-auto">
                Experience the energy, community, and transformations that
                happen every day at V's Gym
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

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-electricRed" />
        </div>
      </section>

      {/* Section 2: Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold">
              WELCOME TO OUR WORLD
            </h2>
            <p className="text-xl font-kodeMono text-lightGrey max-w-3xl mx-auto">
              Explore our state-of-the-art facilities, intense training
              sessions, incredible transformations, and vibrant community
              events. This is more than a gym - it's a lifestyle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3: Gallery Scroll Section - Fixed */}
      <section className="py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-kodeMono transition-all ${
                    activeCategory === category.id
                      ? "bg-electricRed text-deepBlack font-bold"
                      : "bg-deepBlack/70 text-lightGrey border border-electricRed/30 hover:border-electricRed"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery Grid - Fixed with proper image display */}
          {filteredMedia.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredMedia.map((media) => (
                  <motion.div
                    key={media.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer group"
                    onClick={() => setSelectedMedia(media)}
                  >
                    <div className="relative overflow-hidden rounded-lg border border-electricRed/30 group-hover:border-electricRed transition-all shadow-lg bg-deepBlack/30">
                      {media.type === "image" ? (
                        <img
                          src={media.src}
                          alt={media.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback for broken images
                            e.currentTarget.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23E50914' font-family='Arial' font-size='20'%3EImage not found%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      ) : (
                        <div className="relative">
                          <video
                            muted
                            playsInline
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          >
                            <source src={media.src} type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-deepBlack/50 rounded-full p-3">
                              <Play size={24} className="text-lightGrey" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-deepBlack/0 group-hover:bg-deepBlack/70 transition-all duration-300 flex items-end">
                        <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-lightGrey font-graduate font-bold">
                            {media.title}
                          </h3>
                          <p className="text-electricRed font-kodeMono text-sm">
                            {media.category.toUpperCase()}
                          </p>
                        </div>

                        <div className="absolute top-4 right-4 p-2 bg-deepBlack/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Expand size={20} className="text-lightGrey" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <p className="text-center text-lightGrey font-kodeMono">
              No media found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Section 4: Expandable Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-graduate text-electricRed text-center mb-12 font-bold">
              EXPLORE BY CATEGORY
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {categories
              .filter((cat) => cat.id !== "all")
              .map((category, index) => (
                <AnimatedSection
                  key={category.id}
                  direction="up"
                  delay={0.2 + index * 0.1}
                >
                  <div className="bg-deepBlack/50 rounded-lg border border-electricRed/20 overflow-hidden">
                    <button
                      onClick={() =>
                        setActiveCategory(
                          activeCategory === category.id ? "all" : category.id
                        )
                      }
                      className="w-full p-6 text-left flex justify-between items-center font-graduate text-xl text-lightGrey hover:text-electricRed transition-colors"
                    >
                      <span>{category.name}</span>
                      <ChevronDown
                        className={`transform transition-transform ${
                          activeCategory === category.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeCategory === category.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 border-t border-electricRed/20">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {galleryMedia
                                .filter(
                                  (media) => media.category === category.id
                                )
                                .slice(0, 4)
                                .map((media) => (
                                  <div
                                    key={media.id}
                                    className="cursor-pointer group"
                                    onClick={() => setSelectedMedia(media)}
                                  >
                                    <div className="relative overflow-hidden rounded-lg">
                                      {media.type === "image" ? (
                                        <img
                                          src={media.src}
                                          alt={media.title}
                                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                          onError={(e) => {
                                            e.currentTarget.src =
                                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23E50914' font-family='Arial' font-size='20'%3EImage not found%3C/text%3E%3C/svg%3E";
                                          }}
                                        />
                                      ) : (
                                        <div className="relative">
                                          <video
                                            muted
                                            playsInline
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                          >
                                            <source
                                              src={media.src}
                                              type="video/mp4"
                                            />
                                          </video>
                                          <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-deepBlack/50 rounded-full p-3">
                                              <Play
                                                size={20}
                                                className="text-lightGrey"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      <div className="absolute inset-0 bg-deepBlack/0 group-hover:bg-deepBlack/70 transition-all duration-300 flex items-center justify-center">
                                        <Expand
                                          size={32}
                                          className="text-lightGrey opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching About Us Page Style */}
      <section className="py-20 bg-electricRed/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-graduate text-electricRed mb-6 font-bold">
              READY TO JOIN OUR COMMUNITY?
            </h2>
            <p className="text-xl font-kodeMono text-lightGrey mb-8 max-w-3xl mx-auto">
              Experience the energy and transformation for yourself. Join V's
              Gym today and start your fitness journey.
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

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deepBlack/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 bg-deepBlack/50 p-2 rounded-full border border-electricRed/20 hover:border-electricRed transition-colors"
              >
                <X size={24} className="text-lightGrey" />
              </button>

              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23E50914' font-family='Arial' font-size='20'%3EImage not found%3C/text%3E%3C/svg%3E";
                  }}
                />
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full h-auto object-contain rounded-lg"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                </video>
              )}

              <div className="mt-4 text-center">
                <h3 className="text-xl font-graduate text-lightGrey font-bold">
                  {selectedMedia.title}
                </h3>
                <p className="text-electricRed font-kodeMono">
                  {selectedMedia.category.toUpperCase()}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
