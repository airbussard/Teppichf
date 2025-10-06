import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orientteppiche kaufen Frankfurt - Perserteppiche Verkauf',
  description: 'Hochwertige Orientteppiche und Perserteppiche kaufen in Frankfurt. ✓ Handgeknüpft ✓ Große Auswahl ✓ Perserteppiche aus Iran ✓ Türkische & Afghanische Teppiche ✓ Fachberatung am Dornbusch',
  openGraph: {
    title: 'Orientteppiche kaufen Frankfurt - Perserteppiche Verkauf',
    description: 'Hochwertige Orientteppiche und Perserteppiche kaufen in Frankfurt. Handgeknüpft, große Auswahl, kompetente Beratung.',
    url: 'https://teppich-frankfurt.de/verkauf',
    images: [
      {
        url: '/img/store/teppichinnen_schoen.jpg',
        width: 1200,
        height: 630,
        alt: 'Orientteppiche - Teppichhaus am Dornbusch',
      }
    ],
  },
}

export default function Verkauf() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Teppichverkauf
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
            Entdecken Sie unsere exquisite Auswahl an handgeknüpften Orientteppichen und Perserteppichen
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hochwertige Orientteppiche
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                In unserem Geschäft am Dornbusch in Frankfurt finden Sie eine vielfältige Auswahl
                an handgeknüpften Orientteppichen aus verschiedenen Regionen. Jeder Teppich ist ein
                Unikat und erzählt seine eigene Geschichte.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Unsere Spezialität sind Perserteppiche aus den traditionellen Knüpfregionen Irans.
                Von klassischen Mustern bis zu modernen Designs – bei uns werden Sie fündig.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Teppiche</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Perserteppiche aus Iran</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Türkische Teppiche</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Afghanische Teppiche</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Kaukasische Teppiche</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Moderne Designer-Teppiche</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Handgeknüpft</h3>
              <p className="text-gray-600">Alle Teppiche sind traditionell handgeknüpft</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Geprüfte Qualität</h3>
              <p className="text-gray-600">Jeder Teppich wird von uns fachkundig geprüft</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Persönliche Beratung</h3>
              <p className="text-gray-600">Wir beraten Sie kompetent und individuell</p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Einblicke in unsere Auswahl
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/img/store/teppichinnen_schoen.jpg"
                  alt="Teppichauswahl 1"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/img/store/teppich2innen_gut.jpg"
                  alt="Teppichauswahl 2"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/img/store/teppich3innen_schoen.jpg"
                  alt="Teppichauswahl 3"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Besuchen Sie uns in unserem Geschäft
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lassen Sie sich von unserer Auswahl überzeugen und finden Sie Ihren perfekten Teppich
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
