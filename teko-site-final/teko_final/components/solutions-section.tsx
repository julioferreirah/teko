"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ShieldCheck, Calculator, Lock, Stethoscope, LayoutDashboard, BadgeDollarSign } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const profiles = [
  {
    icon: Stethoscope,
    tag: "Para o Médico",
    title: "Zero app novo pra aprender",
    description:
      "O médico vê sua escala e faz trocas de plantão direto pelo WhatsApp que já usa. Confirmação em segundos, sem fricção, sem resistência.",
    bullets: [
      "Notificações automáticas de escala",
      "Troca de plantão via WhatsApp",
      "Histórico de plantões disponível",
    ],
  },
  {
    icon: LayoutDashboard,
    tag: "Para o Gestor",
    title: "Escala sincronizada 24/7",
    description:
      "Visão completa da escala em tempo real. Qualquer mudança é refletida instantaneamente para todos. Sem ligações, sem mensagens, sem retrabalho.",
    bullets: [
      "Escala sempre atualizada",
      "Alertas de conflito automáticos",
      "Trava de qualificação por setor",
    ],
    featured: true,
  },
  {
    icon: BadgeDollarSign,
    tag: "Para o Financeiro",
    title: "Repasse calculado, não estimado",
    description:
      "Regras financeiras configuradas uma vez. O sistema calcula automaticamente cada repasse — por dia, horário, setor e contrato. Auditável e incontestável.",
    bullets: [
      "Motor de regras financeiras",
      "Dupla validação de presença",
      "Exportação para folha de pagamento",
    ],
  },
];

const techFeatures = [
  { icon: MessageCircle, title: "Integração WhatsApp", desc: "Automação nativa onde o médico já está" },
  { icon: ShieldCheck, title: "Dupla Validação", desc: "Secretária confirma presença antes do pagamento" },
  { icon: Calculator, title: "Motor Financeiro", desc: "Regras complexas, zero erro humano" },
  { icon: Lock, title: "Trava de Qualificação", desc: "Impede alocação indevida automaticamente" },
];

export function SolutionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="solucoes" className="py-20 md:py-28 bg-teko-dark">
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teko-accent/20 bg-teko-accent/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-teko-accent">
              Uma plataforma. Três perfis. Zero fricção.
            </span>
          </div>
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-white md:text-4xl">
            Simples pro médico.{" "}
            <span className="text-teko-accent">Poderoso pro gestor.</span>{" "}
            Confiável pro financeiro.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/50">
            Do agendamento à validação de presença, do cálculo de repasses à auditoria
            financeira — tudo em uma plataforma desenhada para quem usa.
          </p>
        </motion.div>

        {/* 3 Profile Cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-10">
          {profiles.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div
                className={`relative h-full rounded-2xl border p-px ${
                  p.featured ? "border-teko-primary/50" : "border-white/10"
                }`}
              >
                <GlowingEffect
                  spread={40}
                  glow={p.featured}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-6 ${
                    p.featured ? "bg-[#0d2218]" : "bg-white/[0.04]"
                  }`}
                >
                  {p.featured && (
                    <div className="mb-4 self-start rounded-full bg-teko-accent/10 px-3 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teko-accent">
                        ⭐ Mais impactante
                      </span>
                    </div>
                  )}
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teko-primary/20">
                    <p.icon size={22} className="text-teko-accent" />
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-teko-accent/60">
                    {p.tag}
                  </p>
                  <h3 className="mb-3 font-[var(--font-geist)] text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/50 flex-1">
                    {p.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teko-accent" />
                        <span className="text-xs text-white/60">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech features — 4 horizontal pills */}
        <motion.div
          className="grid grid-cols-2 gap-3 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {techFeatures.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-2 rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.07]"
            >
              <f.icon size={18} className="text-teko-primary" />
              <p className="text-sm font-semibold text-white">{f.title}</p>
              <p className="text-xs leading-relaxed text-white/40">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Screenshot */}
        <motion.div
          className="mt-12 overflow-hidden rounded-2xl bg-[#0a1f14] p-5 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-teko-accent/60">
            Painel de Administração · App do Médico
          </p>
          <img
            src="/images/teko-desktop-admin.png"
            alt="Painel do Teko"
            className="mx-auto w-full max-w-4xl rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
