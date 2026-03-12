const services = [
  {
    title: "Terapia Individual",
    description:
      "Un espacio seguro y acogedor para trabajar tu bienestar emocional. Sesiones online adaptadas a tu ritmo y necesidades, orientadas a resultados concretos.",
    icon: "individual",
  },
  {
    title: "Terapia de Pareja",
    description:
      "Acompañamiento para mejorar la comunicación, resolver conflictos y fortalecer el vínculo. Un espacio neutral donde ambos se sienten escuchados.",
    icon: "couple",
  },
  {
    title: "Online",
    description:
      "Todas las sesiones son en formato online, eliminando barreras geográficas. En español o en francés, desde la comodidad de tu propio espacio.",
    icon: "online",
  },
];

const specializations = [
  "Estrés y ansiedad",
  "Depresión y estado de ánimo",
  "Trastornos del sueño",
  "Regulación emocional",
  "Autoestima",
  "Gestión de conflictos",
  "Habilidades sociales",
  "Comunidad LGTBIQAP+",
];

export default function Services() {
  return (
    <section id="terapia" className="py-28 lg:py-40 bg-[#EDE8DF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C8903C] text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Terapia
          </p>
          <h2
            className="text-[#2C2420] text-4xl lg:text-5xl font-medium"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿En qué puedo ayudarte?
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#FAF7F2] p-10 hover:bg-[#2C2420] transition-colors duration-300 cursor-default"
            >
              <ServiceIcon
                type={service.icon}
                className="w-10 h-10 text-[#C8903C] mb-7 group-hover:text-[#E8B96A] transition-colors"
              />
              <h3
                className="text-[#2C2420] group-hover:text-[#FAF7F2] text-2xl font-medium mb-4 transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#7A6E68] group-hover:text-[#9B8E88] text-sm leading-relaxed transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className="text-[#2C2420] text-2xl font-medium mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Áreas de especialización
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {specializations.map((spec) => (
              <div
                key={spec}
                className="border border-[#C8903C]/35 py-3 px-4 text-[11px] tracking-wide text-[#3D3530]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  if (type === "individual") {
    return (
      <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    );
  }
  if (type === "couple") {
    return (
      <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"
      />
    </svg>
  );
}
