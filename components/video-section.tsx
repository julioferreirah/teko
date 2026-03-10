"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teko-primary">Veja na Prática</p>
          <h2 className="mb-4 font-[var(--font-geist)] text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Conheça o <span className="text-teko-primary">Teko</span> em ação
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500">
            Assista como o Teko transforma a gestão de escalas médicas e elimina a cegueira financeira dos hospitais.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-xl shadow-gray-200/80 ring-1 ring-gray-100"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {!isPlaying ? (
            <button onClick={() => setIsPlaying(true)} className="group relative block w-full cursor-pointer" aria-label="Reproduzir vídeo">
              <img src="https://img.youtube.com/vi/5SiPYZP9Hns/maxresdefault.jpg" alt="Vídeo Teko" className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 bg-gray-900/30 transition-colors group-hover:bg-gray-900/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teko-primary shadow-xl shadow-teko-primary/30 transition-transform group-hover:scale-110">
                  <Play size={30} className="ml-1 text-white" fill="currentColor" />
                </div>
              </div>
            </button>
          ) : (
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/5SiPYZP9Hns?autoplay=1&rel=0"
                title="Teko"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
