"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dinamis import globe.gl agar hanya digunakan di client
const GlobeGL = dynamic(() => import("globe.gl"), { ssr: false });

export function Globe({ className }: { className?: string }) {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = GlobeGL()(globeRef.current)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .backgroundColor("rgba(0,0,0,0)");

    // Cleanup
    return () => {
      globeRef.current?.replaceChildren();
    };
  }, []);

  return <div ref={globeRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
