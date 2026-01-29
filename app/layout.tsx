import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

// Elegant serif for headings - sophisticated institutional aesthetic
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

// Readable serif for body text - refined with excellent legibility
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Sylvan - Standardized Real Estate Sponsor Diligence',
  description: 'Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures. Evaluate how sponsors behave under financial pressure before you commit capital.',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Sylvan - Standardized Real Estate Sponsor Diligence',
    description: 'Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures. Evaluate how sponsors behave under financial pressure.',
    images: [
      {
        url: '/og.png',
        width: 1080,
        height: 1080,
        alt: 'Sylvan',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${lora.variable}`}>
      <body className="font-body antialiased flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1 flex flex-col pt-17 md:pt-21">{children}</main>
        <Footer />
      </body>
    </html>
  )
}