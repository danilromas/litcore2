import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tektur, Wix_Madefor_Text, Martian_Mono } from 'next/font/google'
import './globals.css'

const tektur = Tektur({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-tektur',
  display: 'swap',
})

const wixMadefor = Wix_Madefor_Text({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-wix',
  display: 'swap',
})

const martianMono = Martian_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-martian',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'litcore.ai — Автоматизация процессов с ИИ',
  description:
    'Свет сквозь процесс. Хаос заявок на входе — сфокусированный результат на выходе. Боты, ассистенты и бизнес-софт как интерфейсы ИИ-автоматизации. Испания · ES / RU / EN.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0B0D12',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${tektur.variable} ${wixMadefor.variable} ${martianMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
