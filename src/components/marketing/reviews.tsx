"use client";

import { reviewsContent } from "@/config/content";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

// Tipe data untuk setiap testimonial
type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Komponen untuk menganimasikan testimonial
const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  // Menggunakan useCallback untuk memoize fungsi agar tidak dibuat ulang pada setiap render.
  // Ini mengoptimalkan useEffect di bawah.
  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // useEffect untuk autoplay.
  // Dengan handleNext di dalam useCallback, interval tidak akan di-reset pada setiap render.
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  return (
    <div className="mx-auto w-full max-w-sm px-4 py-16 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 items-center gap-20 md:grid-cols-2">
        {/* Kolom Gambar Testimonial */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9, zIndex: 10 }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  y: isActive(index) ? [0, -20, 0] : 0,
                  zIndex: isActive(index) ? 40 : testimonials.length - Math.abs(index - active),
                }}
                exit={{ opacity: 0, scale: 0.9, zIndex: 10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
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
        {/* Kolom Teks Testimonial */}
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
              <p className="text-sm text-white/80">
                {testimonials[active].designation}
              </p>
              <blockquote className="mt-8 text-lg text-white/90">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(4px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </blockquote>
            </motion.div>
          </AnimatePresence>
          {/* Tombol Navigasi */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button onClick={handlePrev} className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <IconArrowLeft className="h-5 w-5 text-white" />
            </button>
            <button onClick={handleNext} className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <IconArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Utama
const Reviews = () => {
  // Mengambil data dari config dan memetakannya ke format yang dibutuhkan komponen Testimonial
  const testimonials = reviewsContent.reviews.map((review) => ({
    quote: review.review,
    name: review.name,
    designation: review.username,
    src: review.img,
  }));

  return (
    // Menambahkan bg-gray-900 untuk latar belakang gelap
    <div id="reviews" className="flex w-full flex-col items-center justify-center overflow-hidden bg-gray-900 py-12 md:py-16 lg:py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Menyesuaikan badge untuk tema gelap */}
          <SectionBadge title={reviewsContent.badge} className="bg-white/10 text-white" />
          <h2 className="mt-6 font-heading text-2xl font-medium !leading-snug text-white md:text-4xl lg:text-5xl">
            {reviewsContent.headline}
          </h2>
          <p className="mt-6 text-center text-base text-white/80 md:text-lg">
            {reviewsContent.subheadline}
          </p>
        </div>
      </Container>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Reviews;
