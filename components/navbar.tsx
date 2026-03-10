"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Escalas",        href: "#solucoes" },
  { label: "Repasses",       href: "#vantagens" },
  { label: "Como Funciona",  href: "#como-funciona" },
  { label: "Sobre",          href: "#sobre" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    // small delay so drawer closes before scroll
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-black font-[var(--font-geist)] text-teko-primary tracking-tight shrink-0">
          Teko
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-teko-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teko-primary/25"
          >
            Agendar Demo
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center text-gray-700 md:hidden shrink-0"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <div className="flex flex-col px-5 py-5 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="flex h-12 w-full items-center text-left text-base font-medium text-gray-700 transition-colors hover:text-teko-primary rounded-lg px-2"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex h-12 w-full items-center justify-center rounded-full bg-teko-primary text-sm font-semibold text-white"
              >
                Agendar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
