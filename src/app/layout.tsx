import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://teppich-frankfurt.de'),
  title: {
    default: 'Teppichhaus am Dornbusch - Orientteppiche & Perserteppiche Frankfurt',
    template: '%s | Teppichhaus am Dornbusch Frankfurt'
  },
  description: 'Ihr Spezialist für Orientteppiche und Perserteppiche in Frankfurt am Main. Verkauf, Ankauf, Teppichwäsche und professionelle Reparaturen. ✓ Große Auswahl ✓ Fachberatung',
  keywords: ['Orientteppiche Frankfurt', 'Perserteppiche Frankfurt', 'Teppichankauf Frankfurt', 'Teppichwäsche Frankfurt', 'Teppichreparatur Frankfurt', 'Handgeknüpfte Teppiche', 'Teppichhaus am Dornbusch'],
  authors: [{ name: 'Teppichhaus am Dornbusch' }],
  creator: 'Teppichhaus am Dornbusch',
  publisher: 'S. Koukpari Handelsgesellschaft mbH',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://teppich-frankfurt.de',
    siteName: 'Teppichhaus am Dornbusch',
    title: 'Teppichhaus am Dornbusch - Orientteppiche & Perserteppiche Frankfurt',
    description: 'Ihr Spezialist für Orientteppiche und Perserteppiche in Frankfurt am Main. Verkauf, Ankauf, Teppichwäsche und professionelle Reparaturen.',
    images: [
      {
        url: '/img/store/aussen_sehrgut.jpg',
        width: 1200,
        height: 630,
        alt: 'Teppichhaus am Dornbusch - Außenansicht',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teppichhaus am Dornbusch - Orientteppiche & Perserteppiche Frankfurt',
    description: 'Ihr Spezialist für Orientteppiche und Perserteppiche in Frankfurt am Main.',
    images: ['/img/store/aussen_sehrgut.jpg'],
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
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Google Search Console Verification Code hier einfügen wenn verfügbar
    // google: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
