"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const trustSignals = [
  "Sem treinamento necessário",
  "Integração WhatsApp nativa",
  "Funciona em qualquer porte",
];

const doctors = [
  { name: "Dr. Carlos Mendes", status: "Validado", value: "R$ 4.200", validated: true },
  { name: "Dra. Ana Souza",    status: "Validado", value: "R$ 3.800", validated: true },
  { name: "Dr. Ricardo Lima",  status: "Pendente", value: "R$ 5.100", validated: false },
  { name: "Dra. Paula Faria",  status: "Validado", value: "R$ 6.450", validated: true },
];

export function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => [
      "escala sincronizada",
      "repasse garantido",
      "plantão sem caos",
      "presença validada",
      "gestão em tempo real",
    ],
    []
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 4000); // 4s por título
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  return (
    <AuroraBackground
      className="min-h-screen w-full pt-20"
      showRadialGradient
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-16 pb-28 md:pt-24 md:pb-36">
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teko-primary/30 bg-teko-light px-4 py-1.5">
              <Check size={13} className="text-teko-primary" />
              <span className="text-xs font-semibold text-teko-primary">
                Validado no Hospital Felício Rocho
              </span>
            </div>
          </motion.div>

          {/* Animated headline */}
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-[var(--font-geist)] text-5xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
              Seu hospital merece
            </h1>

            {/* Rotating word — altura fixa generosa para não cortar */}
            <div className="relative mt-1 flex w-full items-center justify-center overflow-hidden"
                 style={{ height: "clamp(60px, 10vw, 110px)" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleNumber}
                  className="absolute font-[var(--font-geist)] text-5xl font-black tracking-tight text-teko-primary sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap"
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -70 }}
                  transition={{ type: "spring", stiffness: 70, damping: 17 }}
                >
                  {titles[titleNumber]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="max-w-xl text-base leading-relaxed text-gray-500 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Escala médica atualizada 24/7, trocas de plantão pelo WhatsApp, dupla
            validação de presença e repasses calculados automaticamente — do pequeno
            ambulatório ao grande hospital.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teko-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teko-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teko-primary/35 sm:w-auto"
            >
              Agendar Demonstração
              <ArrowRight size={16} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-teko-primary/30 hover:bg-teko-light sm:w-auto"
            >
              Ver Como Funciona
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-5 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-1.5">
                <Check size={13} className="text-teko-primary" />
                <span className="text-xs text-gray-500">{signal}</span>
              </div>
            ))}
          </motion.div>

          {/* Dashboard mock */}
          <motion.div
            className="w-full max-w-md mt-4"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <div className="relative rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-2xl shadow-gray-200/80 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teko-primary opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teko-primary" />
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  Escala Médica — Julho 2025
                </span>
                <span className="ml-auto rounded-full bg-teko-primary/10 px-2 py-0.5 text-[10px] font-semibold text-teko-primary">
                  ● AO VIVO
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {doctors.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2.5"
                  >
                    <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-teko-primary to-teko-dark flex items-center justify-center text-[10px] font-bold text-white">
                      {doc.name.split(" ")[1][0]}
                    </div>
                    <span className="flex-1 truncate text-xs font-medium text-gray-800">
                      {doc.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        doc.validated
                          ? "bg-teko-primary/10 text-teko-primary"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {doc.validated ? "✓ " : "⏳ "}
                      {doc.status}
                    </span>
                    <span className="shrink-0 text-xs font-bold text-gray-700">
                      {doc.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating stats — light mode */}
              <div className="absolute -top-3 -right-3 rounded-xl border border-gray-100 bg-white px-3.5 py-2 shadow-lg">
                <p className="text-lg font-black text-teko-primary leading-none">84%</p>
                <p className="mt-0.5 text-[10px] text-gray-400">Tempo Economizado</p>
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-xl border border-gray-100 bg-white px-3.5 py-2 shadow-lg">
                <p className="text-lg font-black text-teko-primary leading-none">98%</p>
                <p className="mt-0.5 text-[10px] text-gray-400">Redução de Erros</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </AuroraBackground>
  );
}
