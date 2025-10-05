import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Teppichhaus am Dornbusch</h3>
            <p className="text-gray-400">
              Ihr Spezialist für Orientteppiche und Perserteppiche in Frankfurt am Main.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-gray-400">Am Dornbusch 24</p>
            <p className="text-gray-400">60320 Frankfurt am Main</p>
            <p className="text-gray-400 mt-2">Tel: 069 - 232 581</p>
            <p className="text-gray-400">E-Mail: info@teppichankauf24.de</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link href="/impressum" className="block text-gray-400 hover:text-white transition">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-gray-400 hover:text-white transition">
                Datenschutz
              </Link>
              <Link href="/agb" className="block text-gray-400 hover:text-white transition">
                AGB
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} S. Koukpari Handelsgesellschaft mbH. Alle Rechte vorbehalten.</p>
          <p className="mt-2 text-sm">
            Website entwickelt mit ❤️ von{' '}
            <a
              href="https://getemergence.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition"
            >
              getemergence.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
