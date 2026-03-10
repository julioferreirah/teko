"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Zap, DollarSign } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const valueProps = [
  {
    icon: Check,
    title: "Para qualquer porte",
    desc: "Funciona em ambulatórios, clínicas, UPAs e hospitais de grande complexidade.",
  },
  {
    icon: Zap,
    title: "Operacional em dias",
    desc: "Sem treinamento presencial. Médicos adotam porque é via WhatsApp.",
  },
  {
    icon: DollarSign,
    title: "Retorno no primeiro mês",
    desc: "A redução de erros nos repasses cobre o investimento logo no mês 1.",
  },
];

export function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="contato" className="py-20 md:py-28 bg-[#0a1f14]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teko-accent/20 bg-teko-accent/10 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-teko-accent">
                Fale com a gente
              </span>
            </div>
            <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-white md:text-4xl">
              Pronto para ter sua escala em ordem?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/55">
              Do pequeno ambulatório ao grande hospital — o Teko se adapta ao seu porte.
              Veja ao vivo em uma demo de 20 minutos, sem compromisso.
            </p>

            <div className="flex flex-col gap-4">
              {valueProps.map((vp, i) => (
                <motion.div
                  key={vp.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teko-primary/20">
                    <vp.icon size={17} className="text-teko-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{vp.title}</p>
                    <p className="text-sm text-white/45">{vp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — HubSpot Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative rounded-2xl border border-teko-primary/30 p-px">
              <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
              <div className="relative rounded-2xl bg-white p-6 md:p-8">
                <h3 className="mb-5 font-[var(--font-geist)] text-xl font-bold text-gray-900">
                  Agendar Demonstração
                </h3>
                <div
                  className="hs-form-frame [&_form]:flex [&_form]:flex-col [&_form]:gap-3 [&_.hs-form-field]:flex [&_.hs-form-field]:flex-col [&_.hs-form-field]:gap-1 [&_label]:text-xs [&_label]:font-semibold [&_label]:text-gray-600 [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-gray-200 [&_input]:px-3 [&_input]:py-2.5 [&_input]:text-sm [&_input]:outline-none [&_input:focus]:border-teko-primary [&_input:focus]:ring-2 [&_input:focus]:ring-teko-primary/20 [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-gray-200 [&_select]:px-3 [&_select]:py-2.5 [&_select]:text-sm [&_select]:outline-none [&_textarea]:w-full [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-gray-200 [&_textarea]:px-3 [&_textarea]:py-2.5 [&_textarea]:text-sm [&_textarea]:outline-none [&_.hs-button]:mt-2 [&_.hs-button]:w-full [&_.hs-button]:rounded-full [&_.hs-button]:bg-teko-primary [&_.hs-button]:px-6 [&_.hs-button]:py-3 [&_.hs-button]:text-sm [&_.hs-button]:font-semibold [&_.hs-button]:text-white [&_.hs-button]:cursor-pointer [&_.hs-button:hover]:bg-teko-primary/90 [&_.hs-error-msgs]:text-xs [&_.hs-error-msgs]:text-red-500"
                  data-region="na1"
                  data-form-id="3ce18757-cd9d-45be-b0e4-8db5660d7dca"
                  data-portal-id="50634073"
                />
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {["Sem compromisso", "Demo personalizada", "20 minutos"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <Check size={12} className="text-teko-primary" />
                      <span className="text-xs text-gray-400">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
