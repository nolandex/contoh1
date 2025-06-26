// Lokasi: src/components/marketing/hero.tsx

"use client";

import { heroContent } from "@/config/content";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const LOGOS = [
  { name: "Next.js", image: "/nextjs.svg" },
  { name: "React", image: "/react.svg" },
  { name: "Tailwind", image: "/tailwind.svg" },
  { name: "Framer", image: "/framer.svg" },
  { name: "Shadcnui", image: "/shadcnui.svg" },
  { name: "Nextui", image: "/nextui.svg" },
  { name: "TS", image: "/typescript.svg" },
  { name: "Vercel", image: "/vercel.svg" },
];

// --- KODE LENGKAP DI SINI ---
// Implementasi lengkap untuk ScrollingLogos
const ScrollingLogos = () => {
  return (
    <section className="mx-auto w-full max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 mt-16">
      <Marquee direction="left" autoFill pauseOnHover>
        {LOGOS.map((logo, index) => (
          <div className="mx-8" key={index}>
            <Image
              src={logo.image}
              alt={logo.name}
              width={50}
              height={50}
              className="invert grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="flex flex-col items-center text-center w-full max-w-5xl my-16 mx-auto z-40 relative px-4">
      <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
        <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-ping absolute"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary absolute"></div>
        </div>
        <span className="inline-flex items-center justify-center gap-2 bg-[linear-gradient(110deg,#b2a8fd,45%,#8678f9,55%,#c7d2fe)] bg-[length:200%_100%] bg-clip-text text-sm text-transparent animate-background-shine">
          {heroContent.badge.mainText}
          <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
            {heroContent.badge.subText}
          </span>
        </span>
      </div>

      <BlurText
        word={heroContent.headline}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium mt-6 font-heading"
      />

      <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
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

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .animate-background-shine {
          animation: shine 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
