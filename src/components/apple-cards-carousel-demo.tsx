"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full flex flex-col items-center justify-content-center">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
        </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title, customText }) => {
  <div className="bg-[#F5F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <h3 className="text-xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">{title}</h3>
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      {customText}
    </p>
    <img 
      src="https://images.unsplash.com/photo/1650584038034-c640x1280&auto=format&fit=crop&ixlib=rb-4.0.3"
      alt={`${title} mockup`}
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1677442136019-391247d6b4b4?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="You can do more with AI."
        customText="Unleash your creativity with AI-powered tools that assist in writing, designing, and problem-solving. From generating ideas to automating tasks, AI is your ultimate productivity partner."
      />
    ),
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Enhance your productivity."
        customText="Streamline your workflow with intuitive apps designed to keep you organized. Create tasks, set reminders, and collaborate seamlessly to achieve your goals faster."
      />
    ),
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1676648417571-89e5a8b6b33e?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Launching the new Apple Vision Pro."
        customText="Experience the future of augmented reality with Apple Vision Pro. Immerse yourself in stunning visuals and intuitive controls for work, gaming, and creativity."
      />
    ),
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1508615039620-4d0b93814295?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Maps for your iPhone 15 Pro Max."
        customText="Navigate the world with precision using enhanced Maps. Discover detailed 3D city views, real-time traffic updates, and offline navigation for your adventures."
      />
    ),
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1509233725247-49e657c5b586?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Photography just got better."
        customText="Capture every moment in stunning detail with advanced computational photography. Night mode, portrait enhancements, and 48MP resolution make every shot a masterpiece."
      />
    ),
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Hiring for a Staff Software Engineer"
        customText="Join our team to build groundbreaking technology. We're looking for passionate engineers to innovate and shape the future of our products. Apply today!"
      />
    ),
  },
];

export default AppleCardsCarouselDemo;
