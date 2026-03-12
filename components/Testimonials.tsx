const testimonials = [
  {
    text: "Marina tiene una capacidad extraordinaria para crear un espacio de confianza desde el primer momento. Su trabajo con terapia ACT ha transformado completamente mi manera de gestionar la ansiedad. La recomiendo al cien por cien.",
    author: "Claudia R.",
  },
  {
    text: "Llevo seis meses en terapia con Marina y los cambios han sido increíbles. Su profesionalidad y calidez humana son únicas. Me ha ayudado a reconectar con lo que realmente importa en mi vida.",
    author: "Javier M.",
  },
  {
    text: "Gracias a Marina aprendí a relacionarme con mis pensamientos de una forma completamente nueva. Su metodología es muy práctica y los resultados se notan con rapidez. Una profesional excepcional.",
    author: "Sara L.",
  },
  {
    text: "La terapia online funcionó perfectamente, sin ningún tipo de barrera. Marina consiguió que me conectara con mis valores más profundos y tomara decisiones con mucha más claridad.",
    author: "Ana P.",
  },
  {
    text: "He trabajado la gestión emocional y la autoestima con Marina. Su enfoque personalizado y su escucha activa marcan la diferencia. La recomiendo a cualquier persona que quiera crecer.",
    author: "Miguel T.",
  },
  {
    text: "La terapia de pareja con Marina nos ayudó a comunicarnos mejor y a redescubrir nuestro vínculo. Profesional, empática y muy bien preparada. Nos ha cambiado la vida.",
    author: "Laura y Carlos",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-40 bg-[#2C2420]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p
            className="text-[#C8903C] text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Testimonios
          </p>
          <h2
            className="text-[#FAF7F2] text-4xl lg:text-5xl font-medium"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lo que dicen mis pacientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-white/10 p-8 flex flex-col justify-between gap-8 hover:border-[#C8903C]/40 transition-colors duration-300"
            >
              <div>
                <QuoteIcon className="w-7 h-7 text-[#C8903C] mb-5 opacity-60" />
                <p
                  className="text-[#EDE8DF] text-sm leading-relaxed italic"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  "{t.text}"
                </p>
              </div>
              <p
                className="text-[#C8903C] text-[10px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
