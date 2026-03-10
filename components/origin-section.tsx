"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Clock, TrendingDown } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

const metrics = [
  { icon: Check, text: "Eliminação total de erros em cálculos de repasse" },
  { icon: Clock, text: "Redução de 84% no tempo de gestão administrativa" },
  { icon: TrendingDown, text: "98% de redução de erros em repasses financeiros" },
];

export function OriginSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="sobre" className="py-20 md:py-28 bg-[#0a1f14]">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teko-accent/20 bg-teko-accent/10 px-4 py-1.5">
            <Check size={13} className="text-teko-accent" />
            <span className="text-xs font-medium text-teko-accent">
              Validado na Prática
            </span>
          </div>
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-white md:text-4xl">
            Nascido no{" "}
            <span className="text-teko-accent">Hospital Felício Rocho</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/50">
            O Teko não é apenas uma ideia. Foi desenvolvido e testado em um dos hospitais
            de maior complexidade de Minas Gerais — e hoje atende desde pequenos
            ambulatórios até grandes redes hospitalares.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative border border-teko-primary/20 rounded-2xl p-px">
            <GlowingEffect spread={50} glow disabled={false} proximity={80} inactiveZone={0.01} borderWidth={2} />
            <div className="relative flex flex-col rounded-2xl overflow-hidden md:flex-row bg-teko-dark">
              <div className="flex flex-1 flex-col justify-center gap-5 p-6 md:p-8">
                <h3 className="font-[var(--font-geist)] text-xl font-bold text-white">
                  Hospital Felício Rocho
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  Hospital de alta complexidade que enfrentava os mesmos desafios que você.
                  O Teko nasceu para resolver esses problemas do zero — e os resultados
                  falam por si.
                </p>
                <ul className="flex flex-col gap-3">
                  {metrics.map((m) => (
                    <li key={m.text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teko-primary/20">
                        <m.icon size={12} className="text-teko-accent" />
                      </div>
                      <span className="text-sm text-white/60">{m.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-56 md:h-auto md:w-64 shrink-0">
                <Image
                  src="/images/hospital-felicio-rocho.jpg"
                  alt="Hospital Felício Rocho"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teko-dark/60 to-transparent md:bg-gradient-to-r" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-sm text-white/30"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hoje disponível para hospitais de{" "}
          <span className="font-semibold text-white/60">qualquer porte</span>{" "}
          — do ambulatório à rede hospitalar.
        </motion.p>
      </div>
    </section>
  );
}
