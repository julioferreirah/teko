"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Configure uma vez",
    description: "Monte setores, defina regras de repasse e importe sua equipe. Leva menos de um dia. Médicos não precisam de treinamento presencial.",
  },
  {
    number: "2",
    title: "A escala roda sozinha",
    description: "Médicos recebem e confirmam plantões pelo WhatsApp. Trocas são feitas e registradas automaticamente. O gestor só age quando necessário.",
  },
  {
    number: "3",
    title: "Repasse automático e auditável",
    description: "A secretária valida a presença com duplo check. O sistema calcula o repasse e gera o relatório. Zero planilha, zero contestação.",
  },
];

export function HowItWorksSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="como-funciona" className="py-20 md:py-28 bg-teko-light">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teko-primary">Como Funciona</p>
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Da escala ao pagamento <span className="text-teko-primary">em 3 passos</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500">
            Implantação em dias. Adoção imediata pelos médicos. Resultados no primeiro mês.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="absolute top-[27px] left-[calc(16.67%+14px)] hidden h-0.5 w-[calc(66.66%-28px)] bg-gradient-to-r from-teko-primary/20 via-teko-primary to-teko-primary/20 md:block" />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teko-primary text-xl font-black text-white shadow-lg shadow-teko-primary/25 ring-4 ring-teko-light">
                  {step.number}
                </div>
                <h3 className="mb-3 font-[var(--font-geist)] text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile image inline with text — not double phone */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-12 md:items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* Image — plain, no extra phone frame */}
          <div className="w-full max-w-[260px] shrink-0 overflow-hidden rounded-3xl shadow-xl shadow-gray-200/80 border border-gray-100">
            <img
              src="/images/teko-mobile-agenda.png"
              alt="App Teko — agenda do médico"
              className="w-full block"
            />
          </div>
          {/* Text beside */}
          <div className="flex flex-col gap-4 max-w-sm text-center md:text-left">
            <h3 className="font-[var(--font-geist)] text-2xl font-black text-gray-900">
              Na palma da mão do médico
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              O médico vê sua agenda, aceita ou recusa plantões e solicita trocas diretamente
              pelo app — tudo sincronizado em tempo real com o sistema do hospital.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["Agenda mensal", "Trocas de plantão", "Vagas disponíveis", "Solicitações"].map((tag) => (
                <span key={tag} className="rounded-full bg-teko-primary/10 px-3 py-1 text-xs font-semibold text-teko-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
