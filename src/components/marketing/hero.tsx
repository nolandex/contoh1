// src/components/marketing/hero.tsx

"use client";

import { heroContent } from "@/config/content";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";

// ... import lainnya
import Image from "next/image";
import Marquee from "react-fast-marquee";

// ... (Kode ScrollingLogos tidak perlu diubah)
const ScrollingLogos = () => { ... };

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // --- REVISI DI SINI: Tambahkan id="hero" ---
    <div id="hero" className="flex flex-col items-center text-center w-full max-w-5xl my-16 mx-auto z-40 relative px-4">
      {/* Konten lainnya tetap sama */}
      <div className="pl-2 pr-1 py-1 rounded-full ...">
        {/* ... */}
      </div>

      <BlurText
        word={heroContent.headline}
        className="text-3xl sm:text-5xl ..."
      />

      <p className="text-sm sm:text-base ...">
        {heroContent.subheadline}
      </p>

      <div className="flex items-center justify-center md:gap-x-6 mt-8">
        <Button size="lg" onClick={scrollToPricing}>
          {heroContent.ctaPrimary.text}
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="hidden md:flex"
          onClick={scrollToPricing}
        >
          {heroContent.ctaSecondary.text}
        </Button>
      </div>

      <ScrollingLogos />

      {/* Style JSX tetap sama */}
    </div>
  );
};

export default Hero;
