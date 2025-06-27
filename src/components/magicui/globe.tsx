"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Import globe.gl secara dinamis agar hanya berjalan di client
const GlobeGL = dynamic(() => import("globe.gl"), { ssr: false });

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Inisialisasi globe
    const globe = GlobeGL()(globeRef.current)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .backgroundColor("rgba(0, 0, 0, 0)")
      .width(600)
      .height(600)
      .showAtmosphere(true)
      .atmosphereColor("#ffffff")
      .atmosphereAltitude(0.2);

    // Optional: animasi rotasi globe
    let animationFrameId: number;
    const animate = () => {
      const rotation = globe.controls().autoRotate ? 0.001 : 0;
      globe.controls().autoRotateSpeed = 0.5;
      globe.controls().autoRotate = true;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={globeRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
