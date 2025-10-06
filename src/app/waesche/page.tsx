import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teppichwäsche Frankfurt - Professionelle Teppichreinigung',
  description: 'Professionelle Teppichwäsche in Frankfurt für Orientteppiche und Perserteppiche. ✓ Kostenloser Hol- und Bringservice ✓ Schonende Reinigung ✓ Fleckenentfernung ✓ Farberhaltung',
  openGraph: {
    title: 'Teppichwäsche Frankfurt - Professionelle Teppichreinigung',
    description: 'Professionelle Teppichwäsche in Frankfurt. Kostenloser Hol- und Bringservice, schonende Reinigung für Orientteppiche.',
    url: 'https://teppich-frankfurt.de/waesche',
    images: [
      {
        url: '/img/teppichwaesche.jpeg',
        width: 1200,
        height: 630,
        alt: 'Teppichwäsche - Teppichhaus am Dornbusch',
      }
    ],
  },
}

export default function Waesche() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Teppichwäsche
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
            Professionelle und schonende Reinigung mit kostenlosem Hol- und Bringservice
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <Image
                src="/img/teppichwaesche.jpeg"
                alt="Teppichwäsche Frankfurt"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fachgerechte Teppichreinigung
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Orientteppiche und Perserteppiche benötigen eine besondere Pflege. Mit unserer
                professionellen Teppichwäsche sorgen wir dafür, dass Ihre wertvollen Teppiche
                schonend und gründlich gereinigt werden.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Wir verwenden spezielle Reinigungsmethoden und Produkte, die für handgeknüpfte
                Teppiche geeignet sind. Dabei achten wir besonders auf den Erhalt der Farben
                und der Faserstruktur.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Kostenloser Hol- und Bringservice:</strong> Für Ihren Komfort holen wir
                Ihren Teppich bei Ihnen zu Hause ab und bringen ihn nach der professionellen
                Reinigung wieder zurück – komplett kostenfrei.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Grundreinigung</h3>
              <p className="text-gray-600">
                Tiefenreinigung des gesamten Teppichs mit speziellen Reinigungsmitteln
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Fleckenentfernung</h3>
              <p className="text-gray-600">
                Spezialbehandlung für hartnäckige Flecken ohne Beschädigung der Fasern
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Geruchsbeseitigung</h3>
              <p className="text-gray-600">
                Neutralisierung unangenehmer Gerüche durch spezielle Behandlungsmethoden
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Unser Reinigungsprozess
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  1
                </div>
                <h4 className="font-bold mb-2">Prüfung</h4>
                <p className="text-sm text-gray-600">Begutachtung von Material und Zustand</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  2
                </div>
                <h4 className="font-bold mb-2">Vorreinigung</h4>
                <p className="text-sm text-gray-600">Entfernung von grobem Schmutz</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  3
                </div>
                <h4 className="font-bold mb-2">Hauptwäsche</h4>
                <p className="text-sm text-gray-600">Schonende Tiefenreinigung</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  4
                </div>
                <h4 className="font-bold mb-2">Trocknung</h4>
                <p className="text-sm text-gray-600">Schonende Trocknung und Nachbehandlung</p>
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
                <h3 className="text-xl font-bold mb-2">Farberhaltung</h3>
                <p className="text-gray-600">Spezielle Methoden zum Schutz der originalen Farben</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Materialschonung</h3>
                <p className="text-gray-600">Sanfte Reinigung ohne Beschädigung der Fasern</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Langjährige Erfahrung</h3>
                <p className="text-gray-600">Fachkompetenz im Umgang mit wertvollen Teppichen</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">Kostenloser Hol- und Bringservice</h3>
                <p className="text-gray-600">Wir holen Ihren Teppich kostenlos ab und liefern ihn gereinigt zurück</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-red-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lassen Sie Ihren Teppich professionell reinigen
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Kontaktieren Sie uns für ein unverbindliches Angebot
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
