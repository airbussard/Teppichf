import { Metadata } from 'next'
import KontaktClient from './KontaktClient'

export const metadata: Metadata = {
  title: 'Kontakt - Teppichhaus am Dornbusch Frankfurt',
  description: 'Kontaktieren Sie das Teppichhaus am Dornbusch in Frankfurt. Adresse: Am Dornbusch 24, 60320 Frankfurt. Telefon: 069-232581. Beratung zu Orientteppichen.',
  openGraph: {
    title: 'Kontakt - Teppichhaus am Dornbusch Frankfurt',
    description: 'Besuchen Sie uns in Frankfurt am Dornbusch 24. Telefonische Beratung unter 069-232581.',
    url: 'https://teppich-frankfurt.de/kontakt',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function Kontakt() {
  return <KontaktClient />
}
