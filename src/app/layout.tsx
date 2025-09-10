// src/app/layout.tsx
import type { Metadata } from "next";
import { Graduate, Kode_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const graduate = Graduate({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-graduate",
});

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

export const metadata: Metadata = {
  title: "V's Gym - Premium Fitness Experience",
  description:
    "Transform your body and mind with our elite training facilities and community support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${graduate.variable} ${kodeMono.variable}`}>
      <head>
        {/* Add viewport meta tag for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-deepBlack">
        <Navbar heroHeight={0} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
