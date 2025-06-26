// Lokasi: src/components/apple-cards-carousel-demo.tsx

"use client";

import React from "react";
// Ini adalah komponen asli Anda, kita akan tetap menggunakannya
import { Carousel, Card, type CardProps } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  // Hanya mengambil 4 item pertama dari data menggunakan slice(0, 4)
  const cards = data.slice(0, 4).map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="layanan" className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto text-center text-xl md:text-5xl font-bold text-neutral-800 dark:text-white font-sans">
        Layanan Bisnovo
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Props untuk DummyContent
interface DummyContentProps {
  title: string;
  customText: string;
}

// --- REVISI DI SINI: Warna diubah sesuai permintaan Anda ---
const DummyContent: React.FC<DummyContentProps> = ({ title, customText }) => {
  return (
    // Latar belakang diubah jadi hitam, teks jadi putih
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <h3 className="text-xl md:text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {customText}
      </p>
      {/* Gambar di dalam konten sengaja tidak ditampilkan agar tidak duplikat di dalam modal */}
    </div>
  );
};

// Data tidak berubah, tapi sekarang akan merender konten dengan background hitam
const data: CardProps[] = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/1.jpeg",
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
    src: "/2.jpeg",
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
    src: "/3.jpeg",
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
    src: "/4.jpeg",
    content: (
      <DummyContent
        title="Maps for your iPhone 15 Pro Max."
        customText="Explore with confidence using advanced Maps features. Enjoy real-time navigation, detailed 3D views, and offline access for seamless adventures."
      />
    ),
  },
];
