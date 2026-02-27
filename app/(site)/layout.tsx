import type { Metadata } from 'next'
import React from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

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

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col pt-16 md:pt-18">{children}</main>
      <Footer />
    </>
  )
}
