// src/components/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { AuthModal } from "@/components/auth-modal";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services & Pricing", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

interface NavbarProps {
  heroHeight: number;
}

export function Navbar({ heroHeight }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-transparent transition-all duration-300 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-sm border-b border-electricRed/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/Images/logo.png" alt="V's Gym" className="h-8 w-8" />
              <span
                className={`text-xl font-graduate drop-shadow-lg ${
                  isScrolled ? "text-white" : "text-electricRed"
                }`}
              >
                V's Gym
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-kodeMono drop-shadow-md ${
                    isScrolled
                      ? "text-white hover:text-electricRed"
                      : "text-white hover:text-electricRed"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 ml-8">
                <Button
                  variant="ghost"
                  className={`transition-colors duration-300 font-kodeMono drop-shadow-md ${
                    isScrolled ? "text-white hover" : "text-white hover"
                  }`}
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  <User size={16} className="mr-2" />
                  Login
                </Button>
                <Button
                  variant="secondary"
                  className="font-kodeMono"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Join Now
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div
              className={`md:hidden transition-all duration-300 ${
                isScrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-white hover:text-electricRed transition-colors duration-300 font-kodeMono drop-shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-electricRed/20">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:text-electricRed font-kodeMono drop-shadow-md"
                    onClick={openAuthModal}
                  >
                    <User size={16} className="mr-2" />
                    Login
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full mt-2 font-kodeMono"
                    onClick={openAuthModal}
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
