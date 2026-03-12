"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to an email service (e.g. Resend, Formspree, or Next.js API route)
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-28 lg:py-40 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Left: info */}
          <div>
            <p
              className="text-[#C8903C] text-[10px] tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contacto
            </p>
            <h2
              className="text-[#2C2420] text-4xl lg:text-5xl font-medium leading-[1.2] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Empieza hoy
              <br />
              tu proceso de cambio
            </h2>
            <p
              className="text-[#7A6E68] leading-relaxed text-[15px] mb-12"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Puedes contactarme por correo, teléfono, WhatsApp o completando
              el formulario. Estaré encantada de resolver tus dudas y ofrecerte
              una primera consulta gratuita.
            </p>

            <div className="space-y-7">
              <InfoItem
                icon="email"
                label="Email"
                value="psimarinalealguillemin@gmail.com"
                href="mailto:psimarinalealguillemin@gmail.com"
              />
              <InfoItem
                icon="phone"
                label="Teléfono / WhatsApp"
                value="+34 623 933 599"
                href="tel:+34623933599"
              />
              <InfoItem
                icon="clock"
                label="Horario"
                value="Lunes a Viernes, 9:00 – 21:00"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="h-full min-h-[400px] flex items-center justify-center bg-[#EDE8DF] p-12 text-center">
                <div>
                  <div className="w-16 h-16 border border-[#C8903C] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-7 h-7 text-[#C8903C]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-[#2C2420] text-2xl mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p
                    className="text-[#7A6E68] text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Te responderé lo antes posible.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <FormField
                  label="Nombre"
                  type="text"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <FormField
                  label="Teléfono (opcional)"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <div>
                  <label
                    className="block text-[10px] tracking-[0.3em] uppercase text-[#7A6E68] mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Cuéntame el motivo de tu consulta y tu disponibilidad…"
                    required
                    className="w-full bg-transparent border-b-2 border-[#C8903C]/30 px-0 py-3 text-[#3D3530] placeholder-[#C0B8B4] focus:outline-none focus:border-[#C8903C] transition-colors resize-none text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={form.privacy}
                    onChange={(e) =>
                      setForm({ ...form, privacy: e.target.checked })
                    }
                    required
                    className="mt-0.5 accent-[#C8903C]"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-[12px] text-[#7A6E68] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    He leído y acepto la{" "}
                    <a href="#" className="underline hover:text-[#C8903C] transition-colors">
                      política de privacidad
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2C2420] text-[#FAF7F2] text-[10px] tracking-[0.35em] uppercase py-4 hover:bg-[#C8903C] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="block text-[10px] tracking-[0.3em] uppercase text-[#7A6E68] mb-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b-2 border-[#C8903C]/30 px-0 py-3 text-[#3D3530] placeholder-[#C0B8B4] focus:outline-none focus:border-[#C8903C] transition-colors text-sm"
        style={{ fontFamily: "var(--font-inter)" }}
      />
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 border border-[#C8903C]/40 flex items-center justify-center flex-shrink-0">
        <InfoIcon type={icon} className="w-4 h-4 text-[#C8903C]" />
      </div>
      <div>
        <p
          className="text-[10px] tracking-[0.25em] uppercase text-[#7A6E68] mb-0.5"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-[#3D3530] hover:text-[#C8903C] transition-colors text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {value}
          </a>
        ) : (
          <p
            className="text-[#3D3530] text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

function InfoIcon({ type, className }: { type: string; className?: string }) {
  if (type === "email") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
