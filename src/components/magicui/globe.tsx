"use client";

import { useEffect, useRef } from "react";

export function Globe({ className }: { className?: string }) {
  const globeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let globeInstance: any;

    const loadGlobe = async () => {
      const Globe = (await import("globe.gl")).default;

      if (!globeContainerRef.current) return;

      globeInstance = Globe()(globeContainerRef.current)
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#ffffff")
        .atmosphereAltitude(0.2)
        .width(500)
        .height(500)
        .pointsData([
          { lat: -6.2, lng: 106.8, size: 0.5, color: "orange" }, // Jakarta
          { lat: 35.68, lng: 139.69, size: 0.5, color: "orange" }, // Tokyo
          { lat: 37.77, lng: -122.41, size: 0.5, color: "orange" }, // San Francisco
        ])
        .pointAltitude("size")
        .pointColor("color");

      globeInstance.controls().autoRotate = true;
      globeInstance.controls().autoRotateSpeed = 0.5;
    };

    loadGlobe();

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div
      ref={globeContainerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
        position: "relative",
      }}
    />
  );
}
