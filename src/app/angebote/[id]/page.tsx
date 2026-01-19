import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTeppichById } from '@/lib/teppiche'
import TeppichDetailClient from './TeppichDetailClient'
import ProductSchema from '@/components/ProductSchema'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const teppich = await getTeppichById(id)

  if (!teppich) {
    return {
      title: 'Teppich nicht gefunden',
      description: 'Der gesuchte Teppich wurde nicht gefunden.',
    }
  }

  const description = `${teppich.name} aus ${teppich.herkunft}${teppich.region ? ` (${teppich.region})` : ''}. ${teppich.groesse}, ${teppich.alter}, ${teppich.material}. ${teppich.beschreibung.slice(0, 100)}...`

  return {
    title: `${teppich.name} - €${teppich.preis.toLocaleString('de-DE')} | Teppichhaus Frankfurt`,
    description,
    openGraph: {
      title: `${teppich.name} - Handgeknüpfter Orientteppich`,
      description: `${teppich.name} aus ${teppich.herkunft}. ${teppich.groesse}, ${teppich.material}. Jetzt anfragen!`,
      url: `https://teppich-frankfurt.de/angebote/${teppich.id}`,
      images: [
        {
          url: `https://teppich-frankfurt.de${teppich.bilder[0]}`,
          width: 1200,
          height: 630,
          alt: `${teppich.name} - Teppichhaus am Dornbusch`,
        },
      ],
      type: 'website',
      locale: 'de_DE',
    },
  }
}

export default async function TeppichDetailPage({ params }: Props) {
  const { id } = await params
  const teppich = await getTeppichById(id)

  if (!teppich) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Home', url: 'https://teppich-frankfurt.de' },
    { name: 'Angebote', url: 'https://teppich-frankfurt.de/angebote' },
    { name: teppich.name },
  ]

  return (
    <>
      <ProductSchema teppich={teppich} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <TeppichDetailClient teppich={teppich} />
    </>
  )
}
