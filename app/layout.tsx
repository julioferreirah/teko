import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Teko — Escala Médica Inteligente",
  description: "Do caos do WhatsApp à precisão da folha de pagamento. Gestão de escalas médicas e repasses para hospitais de qualquer porte.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {children}
        <Script
          src="//js.hs-scripts.com/50634073.js"
          strategy="afterInteractive"
          id="hs-script"
        />
        <Script id="hs-form-init" strategy="afterInteractive">{`
          window.addEventListener('DOMContentLoaded', function() {
            if (window.hbspt) {
              hbspt.forms.create({
                region: "na1",
                portalId: "50634073",
                formId: "3ce18757-cd9d-45be-b0e4-8db5660d7dca",
                target: ".hs-form-frame"
              });
            }
          });
        `}</Script>
      </body>
    </html>
  );
}
