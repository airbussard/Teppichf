import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt - Teppichhaus am Dornbusch Frankfurt',
  description: 'Kontaktieren Sie Teppichhaus am Dornbusch in Frankfurt. ✓ Am Dornbusch 24, 60320 Frankfurt ✓ Tel: 069-232581 ✓ Mobil: 0172-9511370 (WhatsApp) ✓ Persönliche Beratung',
  openGraph: {
    title: 'Kontakt - Teppichhaus am Dornbusch Frankfurt',
    description: 'Kontaktieren Sie uns für eine persönliche Beratung. Am Dornbusch 24, Frankfurt am Main.',
    url: 'https://teppich-frankfurt.de/kontakt',
    images: [
      {
        url: '/img/Geschaeftvonaussen.jpeg',
        width: 1200,
        height: 630,
        alt: 'Teppichhaus am Dornbusch - Außenansicht',
      }
    ],
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
