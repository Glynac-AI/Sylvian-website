import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { Playfair_Display, Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { importMap } from './(payload)/admin/importMap.js'

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

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({ ...args, config, importMap })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
      htmlProps={{
        className: `${playfairDisplay.variable} ${inter.variable} ${robotoMono.variable}`,
        lang: 'en',
      }}
    >
      {children}
    </RootLayout>
  )
}
