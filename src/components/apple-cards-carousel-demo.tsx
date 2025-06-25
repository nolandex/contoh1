"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto pl-4 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

interface DummyContentProps {
  title: string;
  customText: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ title, customText }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <h3 className="text-xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {customText}
      </p>
      <img
        src="https://www.google.com/images/branding/googlemic/2x/googlemic_color_24dp.png" // Ganti dengan link Google Images yang valid
        alt={`${title} mockup`}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none"; // Sembunyikan jika gagal
          console.error("Gambar gagal dimuat. URL:", target.src, "Error:", e); // Debug lebih detail
        }}
      />
    </div>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://t0.gstatic.com/images?q=tbn:ANd9GcT8jM9n3wP4f5f5f5f5f5f5f5f5f5f5f5", // Ganti dengan link Google Images yang valid
    content: (
      <DummyContent
        title="You can do more with AI."
        customText="Transform your workflow with AI-driven insights. From smart suggestions to automated analytics, unlock new possibilities for innovation and efficiency."
      />
    ),
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://t0.gstatic.com/images?q=tbn:ANd9GcT8jM9n3wP4f5f5f5f5f5f5f5f5f5f5", // Ganti dengan link Google Images yang valid
    content: (
      <DummyContent
        title="Enhance your productivity."
        customText="Stay organized and focused with tools designed to streamline your day. Sync tasks, manage projects, and boost efficiency with intuitive apps."
      />
    ),
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://t0.gstatic.com/images?q=tbn:ANd9GcT8jM9n3wP4f5f5f5f5f5f5f5f5f5f5", // Ganti dengan link Google Images yang valid
    content: (
      <DummyContent
        title="Launching the new Apple Vision Pro."
        customText="Step into a new reality with Apple Vision Pro. Experience immersive environments for work, entertainment, and creativity like never before."
      />
    ),
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://t0.gstatic.com/images?q=tbn:ANd9GcT8jM9n3wP4f5f5f5f5f5f5f5f5f5f5", // Ganti dengan link Google Images yang valid
    content: (
      <DummyContent
        title="Maps for your iPhone 15 Pro Max."
        customText="Explore with confidence using advanced Maps features. Enjoy real-time navigation, detailed 3D views, and offline access for seamless adventures."
      />
    ),
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://t0.gstatic.com/images?q=tbn:ANd9GcT8jM9n3wP4f5f5f5f5f5f5f5f5f5f5", // Ganti dengan link Google Images yang valid
    content: (
      <DummyContent
        title="Photography just got better."
        customText="Elevate your photography with cutting-edge iOS features. Capture vibrant colors, stunning low-light shots, and professional-grade portraits effortlessly."
      />
    ),
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://t0.gstatic.com/images?q=tbn:ANd9GcT8jM9n3wP4f5f5f5f5f5f5f5f5f5f5", // Ganti dengan link Google Images yang valid
    content: (
      <DummyContent
        title="Hiring for a Staff Software Engineer"
        customText="Join our mission to shape the future of technology. We're seeking talented engineers to build innovative solutions. Apply now and make an impact!"
      />
    ),
  },
];
