"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / scrollable));
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      style={{ height: "300vh" }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Video — right 20% */}
        <div className="absolute right-0 top-0 w-[20%] h-full">
          <video
            ref={videoRef}
            src="/nina_video.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Gradient overlay — 10% blend zone between text and video */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #1A1008 0%, #1A1008 70%, #6B3E18 78%, transparent 80%)",
          }}
        />

        {/* Text — left side */}
        <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-20 max-w-xl">
          <p
            className="text-[#E8B96A] text-[11px] tracking-[0.45em] uppercase mb-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Psicología Clínica
          </p>

          <h1
            className="text-[#FAF7F2] text-5xl lg:text-6xl font-medium leading-[1.2] mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Aquí empieza
            <br />
            tu viaje de
            <br />
            desarrollo
            <br />
            personal
          </h1>

          <p
            className="text-[#C8B08A] text-sm leading-relaxed mb-10 max-w-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Acompañamiento psicológico personalizado online, en español y francés.
          </p>

          <a
            href="#contacto"
            className="self-start border border-[#FAF7F2] text-[#FAF7F2] text-[10px] tracking-[0.35em] uppercase px-10 py-4 hover:bg-[#FAF7F2] hover:text-[#2C2420] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Contacto
          </a>

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-12 lg:left-20 flex items-center gap-3 opacity-40">
            <div className="w-px h-8 bg-[#FAF7F2]" />
            <span
              className="text-[#FAF7F2] text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Scroll
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
