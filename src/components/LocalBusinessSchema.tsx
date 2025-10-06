export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "name": "Teppichhaus am Dornbusch",
    "image": "https://teppich-frankfurt.de/img/store/aussen_sehrgut.jpg",
    "description": "Ihr Spezialist für Orientteppiche und Perserteppiche in Frankfurt am Main. Verkauf, Ankauf, Teppichwäsche und professionelle Reparaturen.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Am Dornbusch 24",
      "addressLocality": "Frankfurt am Main",
      "postalCode": "60320",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.137893,
      "longitude": 8.667035
    },
    "url": "https://teppich-frankfurt.de",
    "telephone": "+49-69-232581",
    "email": "info@teppich-frankfurt.de",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "6"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Teppichhaus+am+Dornbusch"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Frankfurt am Main"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Teppich-Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Orientteppiche & Perserteppiche Verkauf",
            "description": "Hochwertige handgeknüpfte Orientteppiche aus verschiedenen Regionen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teppichankauf",
            "description": "Faire Preise für gebrauchte Orientteppiche"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teppichwäsche",
            "description": "Professionelle Reinigung für wertvolle Teppiche"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teppichreparatur",
            "description": "Fachgerechte Restaurierung beschädigter Teppiche"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
