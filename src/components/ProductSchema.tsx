import { Teppich } from '@/types/teppich'

interface ProductSchemaProps {
  teppich: Teppich
}

export default function ProductSchema({ teppich }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: teppich.name,
    description: teppich.beschreibung,
    image: teppich.bilder.map(bild => `https://teppich-frankfurt.de${bild}`),
    brand: {
      '@type': 'Brand',
      name: 'Teppichhaus am Dornbusch',
    },
    offers: {
      '@type': 'Offer',
      price: teppich.preis,
      priceCurrency: 'EUR',
      availability: teppich.verfuegbar
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'LocalBusiness',
        name: 'Teppichhaus am Dornbusch',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Am Dornbusch 24',
          addressLocality: 'Frankfurt am Main',
          postalCode: '60320',
          addressCountry: 'DE',
        },
      },
    },
    category: 'Orientteppiche',
    material: teppich.material,
    countryOfOrigin: teppich.herkunft,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Größe',
        value: teppich.groesse,
      },
      {
        '@type': 'PropertyValue',
        name: 'Alter',
        value: teppich.alter,
      },
      {
        '@type': 'PropertyValue',
        name: 'Zustand',
        value: teppich.zustand,
      },
      {
        '@type': 'PropertyValue',
        name: 'Knüpfung',
        value: teppich.knuepfung,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
