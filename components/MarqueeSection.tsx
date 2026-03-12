const ITEM = "Inicia tu cambio  ✦  ";
const items = Array.from({ length: 10 }, () => ITEM);

export default function MarqueeSection() {
  return (
    <section className="bg-[#C8903C] overflow-hidden py-16">
      {/* Marquee */}
      <div className="overflow-hidden mb-12">
        <div className="animate-marquee">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-[#FAF7F2] text-3xl lg:text-4xl font-medium px-2 flex-shrink-0 whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#contacto"
          className="inline-block border border-[#FAF7F2] text-[#FAF7F2] text-[10px] tracking-[0.35em] uppercase px-10 py-4 hover:bg-[#FAF7F2] hover:text-[#C8903C] transition-all duration-300"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Contacto
        </a>
      </div>
    </section>
  );
}
