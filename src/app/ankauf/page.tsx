import Link from 'next/link'

export default function Ankauf() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Teppichankauf
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Wir kaufen Ihre Orientteppiche und Perserteppiche zu fairen Preisen an
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Verkaufen Sie Ihre Teppiche
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Sie möchten sich von einem oder mehreren Orientteppichen trennen? Wir sind an
                hochwertigen Perserteppichen und anderen Orientteppichen interessiert und bieten
                Ihnen faire Ankaufspreise.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Mit unserer langjährigen Erfahrung bewerten wir Ihre Teppiche fachgerecht und
                machen Ihnen ein attraktives Angebot. Der gesamte Prozess ist unkompliziert
                und transparent.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wir kaufen an:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Perserteppiche aller Art</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Orientteppiche aus verschiedenen Regionen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Antike und moderne Teppiche</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Nachlässe und Sammlungen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              So funktioniert der Ankauf
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Kontakt</h3>
                <p className="text-gray-600">
                  Kontaktieren Sie uns telefonisch oder per E-Mail
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Begutachtung</h3>
                <p className="text-gray-600">
                  Wir begutachten Ihren Teppich vor Ort oder in unserem Geschäft
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Angebot</h3>
                <p className="text-gray-600">
                  Sie erhalten ein faires und transparentes Ankaufsangebot
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Abwicklung</h3>
                <p className="text-gray-600">
                  Bei Annahme erfolgt die Bezahlung sofort in bar
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-red-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interessiert? Kontaktieren Sie uns!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Rufen Sie uns an oder senden Sie uns Fotos Ihrer Teppiche per E-Mail
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
