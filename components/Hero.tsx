export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1A2B1A 0%, #2E4228 20%, #4A5E3A 40%, #6B7A55 60%, #9B8A6A 80%, #C8903C 100%)",
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-25 pointer-events-none">
        <svg
          viewBox="0 0 1440 220"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FAF7F2"
          preserveAspectRatio="none"
        >
          <path d="M0 220 L180 90 L310 150 L480 45 L640 130 L780 60 L920 140 L1060 35 L1200 115 L1340 70 L1440 100 L1440 220 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-[#E8B96A] text-[11px] tracking-[0.45em] uppercase mb-8"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Psicología Clínica
        </p>
        <h1
          className="text-[#FAF7F2] text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.15] mb-10"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Aquí empieza tu viaje
          <br />
          de desarrollo personal
        </h1>
        <a
          href="#contacto"
          className="inline-block border border-[#FAF7F2] text-[#FAF7F2] text-[10px] tracking-[0.35em] uppercase px-10 py-4 hover:bg-[#FAF7F2] hover:text-[#2C2420] transition-all duration-300"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Contacto
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#FAF7F2] opacity-50 animate-bounce">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
