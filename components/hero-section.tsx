"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const trustSignals = [
  "Sem treinamento necessário",
  "Integração WhatsApp nativa",
  "Funciona em qualquer porte",
];

const doctors = [
  { name: "Dr. Carlos Mendes", status: "Validado", value: "R$ 4.200", validated: true },
  { name: "Dra. Ana Souza", status: "Validado", value: "R$ 3.800", validated: true },
  { name: "Dr. Ricardo Lima", status: "Pendente", value: "R$ 5.100", validated: false },
  { name: "Dra. Paula Faria", status: "Validado", value: "R$ 6.450", validated: true },
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
    }, 2400);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  // Inject UnicornStudio script once
  useEffect(() => {
    if (document.getElementById("unicorn-studio-script")) return;
    const script = document.createElement("script");
    script.id = "unicorn-studio-script";
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";
    script.onload = () => {
      const us = (window as Window & { UnicornStudio?: { isInitialized?: boolean; init?: () => void } }).UnicornStudio;
      if (us && !us.isInitialized && us.init) us.init();
    };
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-teko-dark">
      {/* UnicornStudio animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          data-us-project="JBiioUrrV3bFyUVX7KQn"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-teko-dark/70 via-teko-dark/50 to-teko-dark pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="flex flex-col items-center gap-7 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teko-accent/30 bg-teko-dark/60 px-4 py-1.5 backdrop-blur-sm">
              <Check size={13} className="text-teko-accent" />
              <span className="text-xs font-medium text-teko-accent">
                Validado no Hospital Felício Rocho
              </span>
            </div>
          </motion.div>

          {/* Animated headline */}
          <motion.div
            className="flex flex-col items-center gap-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-[var(--font-geist)] text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Sua clínica merece
            </h1>
            {/* Rotating word row */}
            <div className="relative flex h-[1.2em] w-full items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleNumber}
                  className="absolute font-[var(--font-geist)] text-4xl font-black tracking-tight text-teko-accent sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
                  initial={{ opacity: 0, y: 56 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -56 }}
                  transition={{ type: "spring", stiffness: 80, damping: 18 }}
                >
                  {titles[titleNumber]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teko-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teko-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teko-primary/40 sm:w-auto"
            >
              Agendar Demonstração
              <ArrowRight size={16} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
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
                <Check size={13} className="text-teko-accent" />
                <span className="text-xs text-white/50">{signal}</span>
              </div>
            ))}
          </motion.div>

          {/* Dashboard mock */}
          <motion.div
            className="w-full max-w-md mt-2"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0a1f14]/80 p-5 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teko-accent opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teko-accent" />
                </span>
                <span className="text-xs font-medium text-teko-accent/80">
                  Escala Médica — Julho 2025
                </span>
                <span className="ml-auto rounded-full bg-teko-accent/10 px-2 py-0.5 text-[10px] font-semibold text-teko-accent">
                  ● AO VIVO
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {doctors.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-2.5"
                  >
                    <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-teko-primary to-teko-dark flex items-center justify-center text-[10px] font-bold text-white">
                      {doc.name.split(" ")[1][0]}
                    </div>
                    <span className="flex-1 truncate text-xs font-medium text-green-100/90">
                      {doc.name}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        doc.validated
                          ? "bg-teko-accent/15 text-teko-accent"
                          : "bg-amber-400/15 text-amber-400"
                      }`}
                    >
                      {doc.validated ? "✓ " : "⏳ "}
                      {doc.status}
                    </span>
                    <span className="shrink-0 text-xs font-bold text-green-100/80">
                      {doc.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute -top-3 -right-3 rounded-xl border border-white/10 bg-white px-3.5 py-2 shadow-xl">
                <p className="text-lg font-black text-teko-primary leading-none">84%</p>
                <p className="mt-0.5 text-[10px] text-gray-400">Tempo Economizado</p>
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-xl border border-white/10 bg-white px-3.5 py-2 shadow-xl">
                <p className="text-lg font-black text-teko-primary leading-none">98%</p>
                <p className="mt-0.5 text-[10px] text-gray-400">Redução de Erros</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
