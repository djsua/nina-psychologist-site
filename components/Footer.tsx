export default function Footer() {
  const year = new Date().getFullYear();

  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return {
      x1: 50 + 27 * Math.cos(angle),
      y1: 50 + 27 * Math.sin(angle),
      x2: 50 + 37 * Math.cos(angle),
      y2: 50 + 37 * Math.sin(angle),
    };
  });

  return (
    <footer className="bg-[#2C2420] py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 100 100"
            className="w-9 h-9 text-[#C8903C]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <circle cx="50" cy="50" r="43" />
            <circle cx="50" cy="50" r="21" />
            {rays.map((r, i) => (
              <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
            ))}
          </svg>
          <div>
            <p
              className="text-[#FAF7F2] font-medium text-sm leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Marina Leal
            </p>
            <p
              className="text-[#7A6E68] text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Psicóloga Clínica
            </p>
          </div>
        </div>

        {/* Legal links */}
        <div
          className="flex items-center gap-6 text-[9px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <a href="#" className="text-[#7A6E68] hover:text-[#FAF7F2] transition-colors">
            Aviso Legal
          </a>
          <a href="#" className="text-[#7A6E68] hover:text-[#FAF7F2] transition-colors">
            Política de Privacidad
          </a>
        </div>

        {/* Copyright */}
        <p
          className="text-[#7A6E68] text-[11px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Marina Leal Guillemin © {year}
        </p>
      </div>
    </footer>
  );
}
