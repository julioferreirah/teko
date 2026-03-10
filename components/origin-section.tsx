"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

// Only qualitative points — no specific unvalidated percentages
const points = [
  "Eliminação de erros nos cálculos de repasse",
  "Redução expressiva no tempo de gestão administrativa",
  "Adoção imediata pelos médicos via WhatsApp",
];

export function OriginSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="sobre" className="py-20 md:py-28 bg-teko-light">
      <div className="mx-auto max-w-7xl px-5">

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teko-primary/30 bg-white px-4 py-1.5">
            <Check size={13} className="text-teko-primary" />
            <span className="text-xs font-semibold text-teko-primary">Validado na Prática</span>
          </div>
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Nascido no <span className="text-teko-primary">Hospital Felício Rocho</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500">
            O Teko não é apenas uma ideia. Foi desenvolvido e testado em um dos hospitais
            de maior complexidade de Minas Gerais — e hoje atende desde pequenos
            ambulatórios até grandes redes hospitalares.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative rounded-2xl border border-teko-primary/20 p-px">
            <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
            <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white md:flex-row shadow-sm">
              <div className="flex flex-1 flex-col justify-center gap-5 p-6 md:p-8">
                <h3 className="font-[var(--font-geist)] text-xl font-bold text-gray-900">
                  Hospital Felício Rocho
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Hospital de alta complexidade em Belo Horizonte que enfrentava os mesmos
                  desafios que você. O Teko nasceu para resolver esses problemas do zero —
                  e os resultados falam por si.
                </p>
                <ul className="flex flex-col gap-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teko-primary/15">
                        <Check size={11} className="text-teko-primary" />
                      </div>
                      <span className="text-sm text-gray-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-56 shrink-0 md:h-auto md:w-64">
                <Image
                  src="/images/hospital-felicio-rocho.jpg"
                  alt="Hospital Felício Rocho"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent md:bg-gradient-to-r" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hoje disponível para hospitais de{" "}
          <span className="font-semibold text-gray-700">qualquer porte</span>
          {" "}— do ambulatório à rede hospitalar.
        </motion.p>
      </div>
    </section>
  );
}
