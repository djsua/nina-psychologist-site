"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cómo funciona la terapia online?",
    a: "Las sesiones se realizan a través de videollamada en una plataforma segura. Solo necesitas una conexión a internet estable, un dispositivo con cámara y un espacio tranquilo. La terapia online es igual de efectiva que la presencial y ofrece una mayor flexibilidad horaria y geográfica.",
  },
  {
    q: "¿Cuánto dura cada sesión?",
    a: "Cada sesión tiene una duración de 50 a 60 minutos. La frecuencia habitual es una vez por semana, aunque esto puede adaptarse según tus necesidades y circunstancias personales.",
  },
  {
    q: "¿Realizas una consulta inicial gratuita?",
    a: "Sí, ofrezco una primera consulta gratuita por videollamada de unos 20 minutos. Es una oportunidad para conocernos, que puedas plantearme tus necesidades y resolver cualquier duda antes de comenzar el proceso terapéutico.",
  },
  {
    q: "¿Qué es la Terapia de Aceptación y Compromiso (ACT)?",
    a: "La ACT es una forma de terapia cognitivo-conductual de tercera generación que se centra en aceptar los pensamientos y emociones difíciles en lugar de luchar contra ellos, y en comprometerse con acciones que te acerquen a tus valores. Está ampliamente respaldada por la investigación científica.",
  },
  {
    q: "¿En qué idiomas realizas terapia?",
    a: "Ofrezco sesiones en español y en francés, ya que cuento con doble nacionalidad franco-española. Esto permite que personas de habla francesa también puedan acceder a terapia en su lengua materna.",
  },
  {
    q: "¿Cuántas sesiones necesitaré?",
    a: "El número de sesiones varía según cada persona y sus objetivos. En la primera sesión evaluamos tu situación y diseñamos un plan terapéutico adaptado. Algunos temas se abordan en pocas sesiones, mientras que otros requieren un proceso más prolongado.",
  },
  {
    q: "¿Cuánto cuesta una sesión?",
    a: "Para conocer las tarifas actualizadas, te invito a contactarme directamente a través del formulario o por teléfono. Estaré encantada de darte toda la información que necesitas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 lg:py-40 bg-[#EDE8DF]">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p
            className="text-[#C8903C] text-[10px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Preguntas Frecuentes
          </p>
          <h2
            className="text-[#2C2420] text-4xl lg:text-5xl font-medium"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Tienes alguna duda?
          </h2>
        </div>

        <div className="divide-y divide-[#C8903C]/20">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                className="w-full flex items-center justify-between gap-6 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="text-[#2C2420] text-base font-medium group-hover:text-[#C8903C] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 border border-[#C8903C]/50 flex items-center justify-center text-[#C8903C] text-xl leading-none transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <p
                  className="mt-4 text-[#7A6E68] text-sm leading-relaxed pr-14"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
