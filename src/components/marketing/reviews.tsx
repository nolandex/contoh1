// Lokasi: src/components/marketing/reviews.tsx
// Ini adalah kode lengkap (versi workaround) untuk keseluruhan file.

"use client";

import { reviewsContent } from "@/config/content";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import { useState } from "react";

// [DIKEMBALIKAN] Hapus import 'Image' dari next/image
// import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const SimpleTestimonials = () => {
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
      {
        quote:
          "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D",
      },
      {
        quote:
          "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D",
      },
       {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D",
    },
    ];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const activeTestimonial = testimonials[active];

  return (
    <div className="mx-auto w-full max-w-sm px-4 py-16 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative h-80 w-full">
            {/* [DIKEMBALIKAN] Menggunakan tag <img> biasa lagi */}
            <img
              src={activeTestimonial.src}
              alt={activeTestimonial.name}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center transition-all duration-300 ease-in-out"
            />
        </div>
        <div className="flex flex-col justify-between py-4">
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {activeTestimonial.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {activeTestimonial.designation}
            </p>
            <p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
             {activeTestimonial.quote}
            </p>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Reviews = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <SectionBadge title={reviewsContent.badge} />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        {reviewsContent.headline}
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        {reviewsContent.subheadline}
                    </p>
                </div>
            </Container>
            
            <SimpleTestimonials />
            
        </div>
    );
};

export default Reviews;
