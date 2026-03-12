const pillars = [
  {
    num: "01",
    title: "Aceptación",
    description:
      "Aprender a aceptar las emociones y pensamientos incómodos sin resignación, abriéndose a la experiencia tal como es.",
  },
  {
    num: "02",
    title: "Defusión",
    description:
      "Crear distancia de los pensamientos angustiantes para verlos como lo que son: simples eventos mentales, no verdades absolutas.",
  },
  {
    num: "03",
    title: "Valores",
    description:
      "Identificar y conectar con los valores más profundos de tu vida, usándolos como brújula interna para orientar tus decisiones.",
  },
  {
    num: "04",
    title: "Mindfulness",
    description:
      "Cultivar la presencia plena en el 'aquí y ahora', reduciendo la rumiación sobre el pasado o la preocupación por el futuro.",
  },
  {
    num: "05",
    title: "Flexibilidad Cognitiva",
    description:
      "Desarrollar la capacidad de adaptarse a los cambios y desafíos de la vida con mayor apertura y resiliencia.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-28 lg:py-40 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Left: sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p
              className="text-[#C8903C] text-[10px] tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Proceso
            </p>
            <h2
              className="text-[#2C2420] text-4xl lg:text-5xl font-medium leading-[1.2] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Espacio de reflexión
              <br />y cambio
            </h2>
            <p
              className="text-[#7A6E68] leading-relaxed text-[15px] mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Mi metodología se centra en la Terapia de Aceptación y Compromiso
              (ACT), diseñada para ayudarte a vivir una vida más plena y
              significativa. Trabajamos juntos para explorar tus emociones y
              pensamientos sin juicio, construyendo una conexión auténtica hacia
              lo que realmente importa.
            </p>
            <div className="w-14 h-0.5 bg-[#C8903C]" />
          </div>

          {/* Right: pillars */}
          <div className="space-y-0 divide-y divide-[#EDE8DF]">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="flex gap-8 py-8 first:pt-0">
                <span
                  className="text-[#C8903C] text-4xl font-medium leading-none flex-shrink-0 pt-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {pillar.num}
                </span>
                <div>
                  <h3
                    className="text-[#2C2420] text-xl font-medium mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-[#7A6E68] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
