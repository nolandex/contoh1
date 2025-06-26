// Lokasi: src/components/ui/apple-cards-carousel.tsx

"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";

// --- REVISI DI SINI: Menambahkan kata kunci 'export' ---
export interface CardProps {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
}
// --- AKHIR REVISI ---

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const carouselWrapper = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: carouselWrapper });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const scale = useTransform(scrollXProgress, [0, 1], [1.05, 1]);
  const rotate = useTransform(scrollXProgress, [0, 1], [0, -20]);
  const translate = useTransform(scrollXProgress, [0, 1], [0, -100]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  const handleClose = React.useCallback(() => {
    setActiveCard(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <>
      <motion.div
        style={{
          scale,
          rotate,
          translate,
        }}
        className="relative"
      >
        <div
          ref={carouselWrapper}
          className="w-full h-[500px] flex items-center overflow-x-auto py-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) =>
            React.cloneElement(item as React.ReactElement, {
              onCardClick: () => handleCardClick(index),
            })
          )}
        </div>
      </motion.div>
      <AnimatePresence>
        {activeCard !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
            />
            <div className="fixed inset-0 grid place-items-center z-50 p-4 md:p-10 cursor-pointer" onClick={handleClose}>
                <motion.div
                  layoutId={`card-container-${React.Children.toArray(items)[activeCard].props.card.title}`}
                  className="w-full max-w-4xl max-h-[90vh] p-0 rounded-2xl overflow-y-auto cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button onClick={handleClose} className="sticky top-4 right-4 ml-auto mr-4 block text-white bg-black/50 rounded-full p-2 z-10">
                    <X size={24} />
                  </button>
                  <div className="relative -mt-12">
                     {React.Children.toArray(items)[activeCard].props.card.content}
                  </div>
                </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const Card = ({
  card,
  index,
  onCardClick,
}: {
  card: CardProps;
  index: number;
  onCardClick?: () => void;
}) => {
  return (
    <motion.div
      layoutId={`card-container-${card.title}`}
      onClick={onCardClick}
      style={{
        width: "350px",
        height: "450px",
        flexShrink: 0,
        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
      }}
      className="bg-[#F5F5F7] dark:bg-neutral-800 rounded-2xl p-6 mr-8 relative cursor-pointer"
    >
      <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-200">{card.title}</h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{card.category}</p>
      <img src={card.src} alt={card.title} className="w-full h-[200px] object-cover rounded-lg mt-4" />
    </motion.div>
  );
};

 
