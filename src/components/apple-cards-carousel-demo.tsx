// Lokasi: src/components/apple-cards-carousel-demo.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Mengimpor ikon 'X' untuk tombol tutup

// --- Komponen Kustom untuk Carousel dan Modal ---

// Komponen Kartu Individual (Unexpanded)
const CustomCard = ({ card, setActive }) => (
  <motion.div
    layoutId={`card-${card.title}`} // Penting untuk animasi "magic motion"
    onClick={() => setActive(card)}
    className="bg-neutral-200/50 dark:bg-neutral-900 rounded-2xl cursor-pointer p-5 flex flex-col justify-between overflow-hidden"
  >
    <div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{card.category}</p>
      <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mt-2">{card.title}</h3>
    </div>
    <motion.img
      layoutId={`image-${card.title}`} // Animasi untuk gambar
      src={card.src}
      alt={card.title}
      className="w-full h-40 object-cover rounded-lg mt-4"
    />
  </motion.div>
);

// --- Akhir Komponen Kustom ---

export default function AppleCardsCarouselDemo() {
  const [activeCard, setActiveCard] = useState(null);
  // Hanya mengambil 4 item pertama dari data
  const cardsData = data.slice(0, 4);

  return (
    // Latar belakang diubah menjadi hitam agar sesuai tema
    <div id="layanan" className="w-full h-full py-20 bg-black relative">
      <h2 className="max-w-7xl mx-auto text-center text-3xl md:text-5xl font-bold text-white font-sans">
        Layanan Bisnovo
      </h2>
      
      {/* Carousel Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 md:px-8">
        {cardsData.map((card) => (
          <CustomCard key={card.src} card={card} setActive={setActiveCard} />
        ))}
      </div>

      {/* Implementasi Modal */}
      <AnimatePresence>
        {activeCard && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 cursor-pointer"
            />
            
            {/* Kontainer Modal */}
            <div className="fixed inset-0 grid place-items-center z-50 p-4 md:p-10">
              <motion.div
                layoutId={`card-${activeCard.title}`}
                className="w-full max-w-4xl max-h-[90vh] bg-black border border-neutral-800 rounded-2xl overflow-y-auto"
              >
                <div className="relative p-6 md:p-10">
                  <button 
                     onClick={() => setActiveCard(null)} 
                     className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors z-20"
                   >
                     <X size={24} />
                  </button>
                  <motion.img
                    layoutId={`image-${activeCard.title}`}
                    src={activeCard.src}
                    alt={activeCard.title}
                    className="w-full h-52 md:h-72 object-cover rounded-lg mb-8"
                  />
                  {/* Merender konten dari data dengan style modal */}
                  {activeCard.content}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Komponen untuk konten di dalam modal, sudah disesuaikan
interface DummyContentProps {
  title: string;
  customText: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ title, customText }) => {
  return (
    // Style sudah disesuaikan untuk latar belakang hitam dan teks putih
    <div className="text-white">
      <h3 className="text-xl md:text-3xl font-bold text-neutral-100 mb-4">{title}</h3>
      <p className="text-neutral-300 text-base md:text-lg font-sans max-w-3xl">
        {customText}
      </p>
      {/* Gambar di dalam konten ini tidak ditampilkan di modal untuk menghindari duplikasi */}
    </div>
  );
};

// Data konten, tidak perlu diubah
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
