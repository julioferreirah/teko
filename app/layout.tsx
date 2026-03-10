import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Teko | Escala médica sincronizada 24/7',
  description:
    'Plataforma de gestão de escalas médicas e repasses financeiros. Do pequeno ambulatório ao grande hospital — sem treinamento, com integração WhatsApp nativa.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geist.variable}`}>
      <body className="font-sans antialiased bg-teko-dark">
        {children}
        {/* HubSpot tracking */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/50634073.js"
          strategy="afterInteractive"
        />
        <Script
          id="hs-forms-embed"
          src="https://js.hsforms.net/forms/embed/50634073.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
