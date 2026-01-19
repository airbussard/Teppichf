import { Metadata } from 'next'
import AnkaufClient from './AnkaufClient'

export const metadata: Metadata = {
  title: 'Teppich verkaufen Frankfurt - Ankauf von Orientteppichen',
  description: 'Verkaufen Sie Ihre Orientteppiche und Perserteppiche in Frankfurt. Faire Preise, kostenlose Bewertung, Barzahlung. Wir kaufen Nachlässe und Sammlungen.',
  openGraph: {
    title: 'Teppich verkaufen Frankfurt - Ankauf von Orientteppichen',
    description: 'Verkaufen Sie Ihre Orientteppiche in Frankfurt. Faire Preise, kostenlose Bewertung, sofortige Barzahlung.',
    url: 'https://teppich-frankfurt.de/ankauf',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function Ankauf() {
  return <AnkaufClient />
}
