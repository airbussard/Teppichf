import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum - S. Koukpari Handelsgesellschaft mbH, Teppichhaus am Dornbusch, Frankfurt am Main',
  robots: {
    index: false,
    follow: true,
  },
}

export default function Impressum() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="mb-4">
            <strong>S. Koukpari Handelsgesellschaft mbH</strong>
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Sitz:</h3>
          <p className="mb-4">
            Am Weissen Berg 5<br />
            61476 Kronberg/Taunus
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ladengeschäft:</h3>
          <p className="mb-4">
            Am Dornbusch 24<br />
            60320 Frankfurt am Main
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Kontakt:</h3>
          <p className="mb-4">
            Telefon: 069 - 232 581<br />
            Mobil: 0172 951 1370<br />
            E-Mail: <a href="mailto:info@teppich-frankfurt.de" className="text-red-700 hover:text-red-800">info@teppich-frankfurt.de</a>
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Vertretungsberechtigter:</h3>
          <p className="mb-4">
            Sirous Koukpari
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Registereintrag:</h3>
          <p className="mb-4">
            Registergericht: Amtsgericht Königstein/Ts.<br />
            Registernummer: HRB 5350
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Umsatzsteuer-ID:</h3>
          <p className="mb-4">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE212103524
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">EU-Streitschlichtung</h2>
          <p className="mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p className="mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftung für Inhalte</h2>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mb-4">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftung für Links</h2>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="mb-4">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Urheberrecht</h2>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="mb-4">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Webdesign & Entwicklung</h2>
          <p className="mb-4">
            Diese Website wurde mit ❤️ entwickelt und konzipiert von:<br />
            <a href="https://getemergence.com" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800">
              getemergence.com
            </a><br />
            Webadresse: <a href="https://getemergence.com" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800">
              getemergence.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
