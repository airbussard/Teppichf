import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teppichankauf Frankfurt - Orientteppiche & Perserteppiche verkaufen',
  description: 'Teppichankauf in Frankfurt - Faire Preise für Ihre Orientteppiche und Perserteppiche. ✓ Kostenlose Bewertung ✓ Sofortige Barauszahlung ✓ Hausbesuch möglich ✓ Nachlass-Ankauf',
  openGraph: {
    title: 'Teppichankauf Frankfurt - Orientteppiche & Perserteppiche verkaufen',
    description: 'Teppichankauf in Frankfurt - Faire Preise für Ihre Orientteppiche und Perserteppiche. Kostenlose Bewertung, sofortige Barauszahlung.',
    url: 'https://teppich-frankfurt.de/ankauf',
  },
}

export default function AnkaufLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
