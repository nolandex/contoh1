// Lokasi: src/components/marketing/reviews.tsx

"use client";

import { reviewsContent } from "@/config/content";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, active]);

  const isActive = (index: number) => index === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto w-full max-w-sm px-4 py-16 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 items-center gap-20 md:grid-cols-2">
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : testimonials.length - index,
                  y: isActive(index) ? [0, -40, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-white">
                {testimonials[active].designation}
              </p>
              <blockquote className="mt-8 text-lg text-white">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(8px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.03 * index }}
                    className="inline-block"
                  >
                    {word} 
                  </motion.span>
                ))}
              </blockquote>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button onClick={handlePrev} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button onClick={handleNext} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const testimonials = [
    { quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.", name: "Sarah Chen", designation: "Product Manager at TechFlow", src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.", name: "Michael Rodriguez", designation: "CTO at InnovateSphere", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.", name: "Emily Watson", designation: "Operations Director at CloudScale", src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.", name: "James Kim", designation: "Engineering Lead at DataPro", src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D" },
    { quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.", name: "Lisa Thompson", designation: "VP of Technology at FutureNet", src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D" },
  ];

  return (
    <div id="reviews" className="flex w-full flex-col items-center justify-center overflow-x-hidden py-12 md:py-16 lg:py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <SectionBadge title={reviewsContent.badge} />
          <h2 className="mt-6 font-heading text-2xl font-medium !leading-snug text-white md:text-4xl lg:text-5xl">
            {reviewsContent.headline}
          </h2>
          <p className="mt-6 text-center text-base text-white md:text-lg">
            {reviewsContent.subheadline}
          </p>
        </div>
      </Container>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Reviews;
