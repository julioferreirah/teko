"use client";

import { Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  Produto: [
    { label: "Gestão de Escalas", href: "#solucoes" },
    { label: "Integração WhatsApp", href: "#solucoes" },
    { label: "Validação de Presença", href: "#solucoes" },
    { label: "Cálculo de Repasses", href: "#solucoes" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Felício Rocho", href: "#sobre" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#contato" },
  ],
  Legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade (LGPD)", href: "#" },
    { label: "Segurança", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-teko-dark border-t border-white/10 pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="text-2xl font-black font-[var(--font-geist)] text-teko-accent tracking-tight"
            >
              Teko
            </a>
            <p className="text-sm leading-relaxed text-white/35 max-w-[220px]">
              Do pequeno ambulatório ao grande hospital. Gestão de escalas com zero
              curva de aprendizado.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/50 transition-colors hover:bg-white/15 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/50 transition-colors hover:bg-white/15 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white/60">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/35 transition-colors hover:text-white/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-10 h-px bg-white/8" />

        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs text-white/25">
            &copy; 2025 Teko. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/25">Feito em Belo Horizonte 🤍</p>
        </div>
      </div>
    </footer>
  );
}
