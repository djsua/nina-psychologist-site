export default function About() {
  return (
    <section id="acerca-de" className="py-28 lg:py-40 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Text */}
          <div>
            <p
              className="text-[#C8903C] text-[10px] tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Acerca de
            </p>
            <h2
              className="text-[#2C2420] text-4xl lg:text-5xl font-medium leading-[1.2] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Un acompañamiento
              <br />
              personalizado y cercano
            </h2>
            <div
              className="space-y-5 text-[#7A6E68] leading-relaxed text-[15px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                Soy Marina Leal Guillemin, psicóloga clínica con doble
                nacionalidad franco-española. Ofrezco un acompañamiento
                psicológico personalizado utilizando herramientas de la
                Terapia de Aceptación y Compromiso (ACT).
              </p>
              <p>
                Desde la gestión emocional hasta el crecimiento personal,
                trabajo en un entorno seguro, cálido y sin juicios, donde
                puedas explorar libremente tus pensamientos y emociones.
              </p>
              <p>
                Ofrezco sesiones individuales y de pareja de forma online, en
                español y en francés, adaptadas a tus necesidades y objetivos
                concretos.
              </p>
            </div>
            <a
              href="#terapia"
              className="inline-block mt-10 text-[10px] tracking-[0.3em] uppercase border-b-2 border-[#C8903C] text-[#2C2420] pb-1 hover:text-[#C8903C] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Saber más
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-[#EDE8DF] flex items-center justify-center overflow-hidden">
              {/* Decorative plant illustration */}
              <svg
                viewBox="0 0 200 200"
                className="w-48 h-48 text-[#C8903C] opacity-20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M100 160 C100 160 100 100 100 60" strokeLinecap="round" />
                <path d="M100 120 C100 120 75 105 60 110 C70 125 100 120 100 120" fill="currentColor" stroke="none" />
                <path d="M100 100 C100 100 125 85 140 90 C130 105 100 100 100 100" fill="currentColor" stroke="none" />
                <path d="M100 140 C100 140 80 125 65 130 C75 145 100 140 100 140" fill="currentColor" stroke="none" />
                <ellipse cx="100" cy="165" rx="25" ry="8" fill="currentColor" stroke="none" />
              </svg>
            </div>
            {/* Offset decorative frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#C8903C]/30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
