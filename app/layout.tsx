import type { Metadata } from 'next'
import { Playfair_Display, Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Sylvan - Standardized Real Estate Sponsor Diligence',
  description: 'Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures. Evaluate how sponsors behave under financial pressure before you commit capital.',
  icons: {
    icon: [{ url: '/favicon.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Sylvan - Standardized Real Estate Sponsor Diligence',
    description: 'Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures. Evaluate how sponsors behave under financial pressure.',
    images: [{ url: '/og.png', width: 1080, height: 1080, alt: 'Sylvan' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased flex min-h-screen flex-col bg-[#F9FAFB] text-[#111827]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
