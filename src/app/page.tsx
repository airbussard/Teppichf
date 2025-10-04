import Image from 'next/image'
import Link from 'next/link'
import Reviews from '@/components/Reviews'
import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600">
              Alles rund um Orientteppiche und Perserteppiche
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Verkauf */}
            <Link href="/verkauf" className="group">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-700 transition">Verkauf</h3>
                <p className="text-gray-600">
                  Hochwertige Orientteppiche und Perserteppiche in großer Auswahl
                </p>
              </div>
            </Link>

            {/* Ankauf */}
            <Link href="/ankauf" className="group">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-700 transition">Ankauf</h3>
                <p className="text-gray-600">
                  Faire Preise für Ihre gebrauchten Orientteppiche
                </p>
              </div>
            </Link>

            {/* Teppichwäsche */}
            <Link href="/waesche" className="group">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-700 transition">Teppichwäsche</h3>
                <p className="text-gray-600">
                  Professionelle Reinigung für Ihre wertvollen Teppiche
                </p>
              </div>
            </Link>

            {/* Reparatur */}
            <Link href="/reparatur" className="group">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-700 transition">Reparatur</h3>
                <p className="text-gray-600">
                  Fachgerechte Restaurierung beschädigter Teppiche
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/img/store/aussen_sehrgut.jpg"
                alt="Teppichhaus am Dornbusch - Außenansicht"
                width={600}
                height={400}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Über uns
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Seit vielen Jahren sind wir Ihr zuverlässiger Partner für hochwertige Orientteppiche
                und Perserteppiche in Frankfurt am Main. Unser Fachgeschäft am Dornbusch bietet Ihnen
                eine große Auswahl an handgeknüpften Teppichen aus verschiedenen Regionen.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Ob Verkauf, Ankauf, professionelle Reinigung oder fachgerechte Reparatur –
                wir stehen Ihnen mit unserer langjährigen Erfahrung zur Seite.
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-red-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
              >
                Besuchen Sie uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Interessiert an unseren Teppichen?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8">
            Besuchen Sie uns in unserem Geschäft oder kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-red-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
