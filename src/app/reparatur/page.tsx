import Link from 'next/link'
import ImageCompare from '@/components/ImageCompare'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teppichreparatur Frankfurt - Restaurierung von Orientteppichen',
  description: 'Professionelle Teppichreparatur in Frankfurt. ✓ Nachknüpfen ✓ Kanten- & Fransenreparatur ✓ Mottenbefall-Sanierung ✓ Traditionelle Techniken ✓ Kaum sichtbare Reparatur',
  openGraph: {
    title: 'Teppichreparatur Frankfurt - Restaurierung von Orientteppichen',
    description: 'Professionelle Teppichreparatur und Restaurierung in Frankfurt. Traditionelle Techniken, kaum sichtbare Reparatur.',
    url: 'https://teppich-frankfurt.de/reparatur',
    images: [
      {
        url: '/img/Teppichreperaturnachher.jpeg',
        width: 1200,
        height: 630,
        alt: 'Teppichreparatur Nachher - Teppichhaus am Dornbusch',
      }
    ],
  },
}

export default function Reparatur() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Teppichreparatur
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
            Professionelle Restaurierung und Reparatur Ihrer wertvollen Orientteppiche
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fachgerechte Teppichreparatur
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Orientteppiche sind oft über Generationen weitergegeben worden und haben einen hohen
                emotionalen und materiellen Wert. Beschädigungen durch Abnutzung, Mottenbefall oder
                andere Einflüsse müssen nicht das Ende Ihres Teppichs bedeuten.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Mit traditionellen Techniken und modernem Fachwissen restaurieren wir Ihren Teppich
                fachgerecht. Unsere erfahrenen Knüpfer arbeiten mit originalen Materialien und
                achten darauf, dass die Reparatur kaum sichtbar ist.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Reparaturleistungen</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Nachknüpfen beschädigter Stellen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Reparatur von Kanten und Fransen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mottenbefall-Reparatur</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Wiederherstellung von Rissen und Löchern</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Farbauffrischung und Nachfärbung</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Vorher-Nachher Vergleich
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Bewegen Sie den Regler, um den Unterschied zu sehen
            </p>
            <div className="max-w-4xl mx-auto">
              <ImageCompare
                beforeImage="/img/Teppichreperatur.jpeg"
                afterImage="/img/Teppichreperaturnachher.jpeg"
                beforeLabel="Vorher"
                afterLabel="Nachher"
              />
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              So läuft die Reparatur ab
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  1
                </div>
                <h4 className="font-bold mb-2">Begutachtung</h4>
                <p className="text-sm text-gray-600">Analyse der Schäden und Kostenvoranschlag</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  2
                </div>
                <h4 className="font-bold mb-2">Vorbereitung</h4>
                <p className="text-sm text-gray-600">Reinigung und Materialauswahl</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  3
                </div>
                <h4 className="font-bold mb-2">Reparatur</h4>
                <p className="text-sm text-gray-600">Fachgerechtes Knüpfen und Restaurieren</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  4
                </div>
                <h4 className="font-bold mb-2">Fertigstellung</h4>
                <p className="text-sm text-gray-600">Qualitätskontrolle und Übergabe</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Traditionelle Techniken</h3>
                <p className="text-gray-600">Handknüpfung nach traditionellen Methoden</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Originale Materialien</h3>
                <p className="text-gray-600">Verwendung passender Wolle und Farben</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Erfahrene Knüpfer</h3>
                <p className="text-gray-600">Jahrzehntelange Erfahrung in der Teppichreparatur</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Werterhaltung</h3>
                <p className="text-gray-600">Professionelle Restaurierung zur Werterhaltung</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-red-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lassen Sie Ihren Teppich reparieren
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Bringen Sie Ihren beschädigten Teppich vorbei und lassen Sie sich beraten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:069232581"
                className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
              >
                069 - 232 581
              </a>
              <Link
                href="/kontakt"
                className="inline-block border-2 border-red-700 text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition"
              >
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
