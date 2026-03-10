"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MessageSquare, FileSpreadsheet, UserX } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

const problems = [
  {
    icon: Clock,
    title: "Horas perdidas toda semana",
    description: "Montar, ajustar e comunicar a escala manualmente consome entre 4 a 8 horas semanais do gestor. Tempo que deveria estar na operação.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp não é sistema",
    description: "Trocas de plantão por mensagem, sem rastreio, sem confirmação formal. Qualquer erro vira problema do gestor — e do paciente.",
  },
  {
    icon: FileSpreadsheet,
    title: "Repasses com erro humano",
    description: "Cálculos manuais no Excel geram inconsistências, contestações e retrabalho financeiro todo mês. Nenhum gestor deveria viver assim.",
  },
  {
    icon: UserX,
    title: "Alocação sem controle",
    description: "Médicos em setores para os quais não estão qualificados. Sem trava, sem alerta, sem auditoria. Risco operacional e jurídico constante.",
    highlight: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function ProblemSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600">O Problema</span>
          </div>
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            O custo invisível da <span className="text-red-500">gestão manual</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500">
            Quando a escala vive no WhatsApp e o repasse no Excel, ninguém tem controle real.
            O gestor perde horas toda semana. Os médicos reclamam. O financeiro fecha com erro.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14 lg:items-start">
          {/* Image */}
          <motion.div
            className="relative w-full lg:w-5/12 shrink-0"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image src="/images/hospital-chaos.jpg" alt="Gestão caótica" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-xs text-gray-400">Erro detectado no Excel</p>
              <p className="text-sm font-bold text-red-500">R$ 17.340 em repasses incorretos este mês</p>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {problems.map((p) => (
              <motion.div key={p.title} variants={itemVariants}>
                <div className={`relative h-full rounded-2xl border p-px ${p.highlight ? "border-teko-primary/30" : "border-gray-200"}`}>
                  <GlowingEffect spread={36} glow={!!p.highlight} disabled={false} proximity={60} inactiveZone={0.01} borderWidth={2} />
                  <div className={`relative h-full rounded-2xl p-5 ${p.highlight ? "bg-teko-light" : "bg-gray-50"}`}>
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${p.highlight ? "bg-teko-primary/15" : "bg-white border border-gray-200"}`}>
                      <p.icon size={20} className={p.highlight ? "text-teko-primary" : "text-gray-500"} />
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-gray-800">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{p.description}</p>
                    {p.highlight && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teko-primary/10 px-3 py-1">
                        <span className="text-xs font-semibold text-teko-primary">✓ O Teko resolve isso</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
