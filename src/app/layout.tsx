import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://zetsubou-blog.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Zetsubou Blog - Pensamentos e reflexões',
  description:
    'Um blog pessoal sobre diversos assuntos. Compartilhando pensamentos, experiências e aprendizados.',
  keywords: [
    'blog',
    'filosofia',
    'reflexões',
    'pensamentos',
    'anime',
    'análise',
  ],
  authors: [{ name: 'Zetsubou' }],
  openGraph: {
    title: 'Zetsubou Blog - Pensamentos e reflexões',
    description:
      'Um blog pessoal sobre diversos assuntos. Compartilhando pensamentos, experiências e aprendizados.',
    url: siteUrl,
    siteName: 'Zetsubou Blog',
    images: [
      {
        url: `${siteUrl}/image/bannerblog.png`,
        width: 1200,
        height: 630,
        alt: 'Zetsubou Blog',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zetsubou Blog - Pensamentos e reflexões',
    description:
      'Um blog pessoal sobre diversos assuntos. Compartilhando pensamentos, experiências e aprendizados.',
    images: [`${siteUrl}/image/bannerblog.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
