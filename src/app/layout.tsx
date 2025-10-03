import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teppich Frankfurt - Orientteppiche, Perserteppiche, Ankauf & Reparatur',
  description: 'Ihr Spezialist für Orientteppiche und Perserteppiche in Frankfurt am Main. Verkauf, Ankauf, Teppichwäsche und professionelle Reparaturen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
