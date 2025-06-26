"use client";

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
              <p className="text-sm text-white/70">
                {testimonials[active].designation}
              </p>
              <blockquote className="mt-8 text-lg text-white/90">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(8px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.03 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </blockquote>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button onClick={handlePrev} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <IconArrowLeft className="h-5 w-5 text-white" />
            </button>
            <button onClick={handleNext} className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <IconArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Paket Setup Bisnis Online",
      designation: "Klien Bisnovo",
      src: "/testi1.jpg",
      quote:
        "Saya sangat puas! Saya mendapatkan website, konten sosial media, chatbot, dan video promosi hanya dalam waktu beberapa hari. Semua materi disesuaikan dengan brief saya, dan hasilnya profesional sekali!",
    },
    {
      name: "Program Iklan Bersama",
      designation: "Partner Iklan",
      src: "/testi2.jpg",
      quote:
        "Dengan modal hanya Rp100.000, saya bisa ikut promosi bareng dan menjangkau lebih banyak calon pembeli. Ada laporan lengkapnya juga. Cocok banget buat pebisnis pemula!",
    },
    {
      name: "Kolaborasi Bisnis",
      designation: "Kolaborator UMKM",
      src: "/testi3.jpg",
      quote:
        "Saya ikut program kolaborasi untuk sharing ide dan layanan. Ternyata banyak peluang bisnis yang bisa digarap bareng. Diskusinya aman dan saling menghargai. Recommended!",
    },
    {
      name: "Program Reseller",
      designation: "Reseller Aktif",
      src: "/testi4.jpg",
      quote:
        "Saya daftar reseller gratis dan langsung dapat website katalog. Setiap penjualan saya dapat komisi. Tidak ribet, promosi juga dibantu, dan komisi cair tiap minggu. Mantap!",
    },
  ];

  return (
    <div id="reviews" className="flex w-full flex-col items-center justify-center overflow-x-hidden bg-gray-900 py-12 md:py-16 lg:py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <SectionBadge title="Testimoni Klien & Partner" />
          <h2 className="mt-6 font-heading text-2xl font-medium !leading-snug text-white md:text-4xl lg:text-5xl">
            Apa Kata Mereka Tentang Bisnovo
          </h2>
          <p className="mt-6 text-center text-base text-white/80 md:text-lg">
            Bisnovo dipercaya oleh pelaku bisnis digital, UMKM, dan reseller di seluruh Indonesia.
          </p>
        </div>
      </Container>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Reviews;
