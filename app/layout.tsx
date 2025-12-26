import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Sylvan - Structured Real Estate Income Framework for RIAs',
  description: 'Standardized structured real estate income platform providing repeatable structure, workflow, and audit-ready documentation for institutional-grade real estate income investing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}