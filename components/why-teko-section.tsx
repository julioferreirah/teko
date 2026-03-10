"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, GraduationCap, ShieldCheck } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const reasons = [
  {
    icon: BadgeCheck,
    label: "VALIDAÇÃO REAL",
    title: "Nasceu dentro de um hospital",
    description:
      "Desenvolvido e testado no Hospital Felício Rocho, hospital de alta complexidade de Minas Gerais. Não é teoria — são métricas geradas em operação real.",
  },
  {
    icon: GraduationCap,
    label: "ADOÇÃO IMEDIATA",
    title: "Zero curva de aprendizado",
    description:
      "Ao usar o fluxo do WhatsApp, o Teko remove a maior barreira tecnológica: a resistência do médico. O que ERPs e apps genéricos nunca conseguiram.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    label: "PROTEÇÃO FINANCEIRA",
    title: "Repasse auditável, não estimado",
    description:
      "O foco não é só organizar agenda. É blindar o pagamento. Dupla validação de presença antes de qualquer cálculo. Sem contestação, sem retrabalho.",
  },
];

export function WhyTekoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="vantagens" className="py-20 md:py-28 bg-[#0a1f14]">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-white md:text-4xl">
            Por que escolher o{" "}
            <span className="text-teko-accent">Teko</span>?
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/50">
            Três pilares que fazem do Teko a escolha certa — do pequeno ambulatório
            ao grande hospital.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div
                className={`relative h-full rounded-2xl border p-px ${
                  r.featured ? "border-teko-accent/40" : "border-white/10"
                }`}
              >
                <GlowingEffect
                  spread={40}
                  glow={!!r.featured}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div
                  className={`relative flex h-full flex-col gap-4 rounded-2xl p-6 md:p-8 ${
                    r.featured ? "bg-teko-dark" : "bg-white/[0.04]"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teko-primary/20">
                    <r.icon size={24} className="text-teko-accent" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teko-accent/60">
                    {r.label}
                  </p>
                  <h3 className="font-[var(--font-geist)] text-lg font-bold text-white">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {r.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
