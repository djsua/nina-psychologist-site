"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollCharacter() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // How far into the hero section we've scrolled (0 to 1)
  const heroHeight =
    typeof window !== "undefined" ? window.innerHeight : 800;
  const progress = Math.max(0, Math.min(1, scrollY / heroHeight));

  // Left column: back → front → zoom (moves up as we scroll)
  const leftY = progress * -120;
  // Right column: zoom → front → back (moves down as we scroll, opposite)
  const rightY = progress * 120;

  // Opacity transitions between frames
  const backOpacity = progress < 0.5 ? 1 - progress * 2 : 0;
  const frontOpacity =
    progress < 0.5 ? progress * 2 : 1 - (progress - 0.5) * 2;
  const zoomOpacity = progress > 0.5 ? (progress - 0.5) * 2 : 0;

  return (
    <div ref={ref} className="absolute inset-0 flex items-stretch pointer-events-none overflow-hidden">
      {/* Left column — back → front → zoom */}
      <div
        className="relative w-[22%] h-full flex-shrink-0"
        style={{ transform: `translateY(${leftY}px)`, transition: "transform 0.05s linear" }}
      >
        <div className="absolute inset-0" style={{ opacity: backOpacity }}>
          <Image
            src="/character-back.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute inset-0" style={{ opacity: frontOpacity }}>
          <Image
            src="/character-front.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0" style={{ opacity: zoomOpacity }}>
          <Image
            src="/character-zoom.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Center — text lives here, leave empty */}
      <div className="flex-1" />

      {/* Right column — zoom → front → back (inverted) */}
      <div
        className="relative w-[22%] h-full flex-shrink-0"
        style={{ transform: `translateY(${rightY}px)`, transition: "transform 0.05s linear" }}
      >
        <div className="absolute inset-0" style={{ opacity: zoomOpacity }}>
          <Image
            src="/character-zoom.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0" style={{ opacity: frontOpacity }}>
          <Image
            src="/character-front.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0" style={{ opacity: backOpacity }}>
          <Image
            src="/character-back.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
