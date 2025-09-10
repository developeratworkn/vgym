// src/components/footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services & Pricing", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

export function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle,rgba(59,56,56,1)_0%,rgba(38,36,36,1)_5%,rgba(37,35,35,1)_7%,rgba(36,34,34,1)_12%,rgba(35,33,33,1)_15%,rgba(33,31,31,1)_19%,rgba(24,22,22,1)_28%,rgba(23,21,21,1)_36%,rgba(21,19,19,1)_44%,rgba(20,18,18,1)_52%,rgba(18,16,16,1)_60%,rgba(16,14,14,1)_68%,rgba(14,12,12,1)_78%,rgba(0,0,0,1)_100%)] border-t border-electricRed/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo.svg" alt="V's Gym" className="h-10 w-10" />
              <span className="text-2xl font-graduate text-electricRed font-bold">
                V's Gym
              </span>
            </Link>
            <p className="text-lightGrey/80 font-kodeMono text-sm">
              Train Hard. Stay Strong. Achieve Greatness.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-lightGrey/60 hover:text-electricRed transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center">
            <div className="space-y-4">
              <h3 className="text-electricRed font-graduate text-lg font-bold">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lightGrey/80 hover:text-electricRed transition-colors duration-300 font-kodeMono text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h3 className="text-electricRed font-graduate text-lg font-bold">
              Get Started
            </h3>
            <Button className="w-full font-graduate font-bold">
              Book Free Trial
            </Button>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-lightGrey/80">
                <Phone size={16} />
                <span className="font-kodeMono text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-lightGrey/80">
                <Mail size={16} />
                <span className="font-kodeMono text-sm">info@vsgym.com</span>
              </div>
              <div className="flex items-center space-x-2 text-lightGrey/80">
                <MapPin size={16} />
                <span className="font-kodeMono text-sm">
                  123 Fitness St, City
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-electricRed/20 mt-8 pt-8 text-center">
          <p className="text-lightGrey/60 font-kodeMono text-xs">
            © 2025 V's Gym. All rights reserved. Made by Vishal.
          </p>
        </div>
      </div>
    </footer>
  );
}
