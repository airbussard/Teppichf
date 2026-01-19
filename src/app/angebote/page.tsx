import { Metadata } from 'next'
import AngeboteClient from './AngeboteClient'

export const metadata: Metadata = {
  title: 'Orientteppiche kaufen Frankfurt - Perserteppiche & Handgeknüpfte Teppiche',
  description: 'Kaufen Sie hochwertige Orientteppiche und Perserteppiche in Frankfurt. Handgeknüpfte Teppiche aus Iran, Afghanistan, Türkei. Große Auswahl, faire Preise.',
  openGraph: {
    title: 'Orientteppiche kaufen Frankfurt - Perserteppiche & Handgeknüpfte Teppiche',
    description: 'Entdecken Sie unsere handverlesene Auswahl an Orientteppichen und Perserteppichen in Frankfurt.',
    url: 'https://teppich-frankfurt.de/angebote',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function Angebote() {
  return <AngeboteClient />
}
