"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Configure uma vez",
    description:
      "Monte setores, defina regras de repasse e importe sua equipe. Leva menos de um dia. Médicos não precisam de treinamento presencial.",
  },
  {
    number: "2",
    title: "A escala roda sozinha",
    description:
      "Médicos recebem e confirmam plantões pelo WhatsApp. Trocas são feitas e registradas automaticamente. O gestor só age quando necessário.",
  },
  {
    number: "3",
    title: "Repasse automático e auditável",
    description:
      "A secretária valida a presença com duplo check. O sistema calcula o repasse e gera o relatório. Zero planilha, zero contestação.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="como-funciona" className="py-20 md:py-28 bg-teko-dark">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teko-primary">
            Como Funciona
          </p>
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-white md:text-4xl">
            Da escala ao pagamento{" "}
            <span className="text-teko-accent">em 3 passos</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/50">
            Implantação em dias. Adoção imediata pelos médicos. Resultados no
            primeiro mês.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="absolute top-[27px] left-[calc(16.67%+14px)] hidden h-0.5 w-[calc(66.66%-28px)] bg-gradient-to-r from-teko-primary/20 via-teko-primary/60 to-teko-primary/20 md:block" />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teko-primary text-xl font-black text-white shadow-lg shadow-teko-primary/30 ring-4 ring-teko-dark">
                  {step.number}
                </div>
                <h3 className="mb-3 font-[var(--font-geist)] text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile app preview */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="relative max-w-[280px] w-full">
            <div className="overflow-hidden rounded-[2rem] bg-[#0a1f14] p-3 shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <img
                src="/images/teko-mobile-agenda.png"
                alt="App Teko — agenda do médico"
                className="w-full rounded-[1.5rem]"
              />
            </div>
            <p className="mt-4 text-center text-xs text-white/30">
              Agenda do médico via WhatsApp e app
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
