"use client";

import { useRef, useEffect } from "react";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let globeInstance: any;

    const loadGlobe = async () => {
      const Globe = (await import("globe.gl")).default;

      if (!globeRef.current) return;

      globeInstance = Globe()(globeRef.current)
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(0.25)
        .width(600)
        .height(600);

      globeInstance.controls().autoRotate = true;
      globeInstance.controls().autoRotateSpeed = 0.3;
    };

    loadGlobe();

    return () => {
      // cleanup jika perlu (opsional)
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
