"use client";

import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { cn } from "@/lib/utils";

export default function AppleCardsCarouselDemo() {
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  // Hanya ambil 4 card pertama
  const cards = data.slice(0, 4).map((card, index) => (
    <div key={card.src} onClick={() => setSelectedCard(card)}>
      <Card card={card} index={index} />
    </div>
  ));

  return (
    <div className="w-full h-full py-20 relative">
      <h2 className="max-w-7xl mx-auto text-center text-xl md:text-5xl font-bold text-white font-sans">
        Layanan Bisnovo
      </h2>

      <Carousel items={cards} />

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-neutral-900 text-white rounded-2xl p-6 max-w-lg w-full mx-4 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-white text-2xl"
              onClick={() => setSelectedCard(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedCard.title}</h3>
            <div className="mb-4">{selectedCard.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

interface DummyContentProps {
  title: string;
  customText: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ title, customText }) => {
  return (
    <div>
      <p className="text-white text-base md:text-lg font-sans mb-4">
        {customText}
      </p>
      <img
        src="/1.jpeg"
        alt={`${title} mockup`}
        className="mx-auto rounded-xl max-w-full h-auto"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          console.error("Gambar gagal dimuat. URL:", target.src, "Error:", e);
        }}
      />
    </div>
  );
};

const data = [
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
