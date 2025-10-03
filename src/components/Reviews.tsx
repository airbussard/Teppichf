import Image from 'next/image'

interface Review {
  name: string
  text: string
  rating: number
  badge?: string
  image?: string
  initials?: string
}

const reviews: Review[] = [
  {
    name: 'Hans Joachim Ziegenhagen',
    text: 'Top Adresse. Haben einen neuen Teppich erworben, nach Besuch bei und Vergleich mit 3 anderen Anbietern. Tolle und kompetente Beratung, sehr schöne Teppiche. Man nimmt sich Zeit für den Kunden, ein Besuch lohnt sich.',
    rating: 5,
    badge: 'Local Guide',
    initials: 'HZ'
  },
  {
    name: 'Wiebke Gorny',
    text: 'Habe einen empfindlichen Teppich hier reinigen lassen. Er wurde abgeholt und gebracht. Sehr kompetente Beratung bei der Abholung. Ergebnis ist fantastisch!',
    rating: 5,
    initials: 'WG'
  },
  {
    name: 'Andy "Paul Paule" Brauy',
    text: 'Habe ein Termin bei meiner verstorbenen Tante in der Wohnung gemacht zur Besichtigung von 5 Teppiche und habe danach eine super Beratung und ehrliche Einschätzung der Teppiche bekommen.',
    rating: 5,
    badge: 'Local Guide',
    initials: 'AB'
  },
  {
    name: 'Annemie Pauli-Binten',
    text: 'Im Teppichhaus am Dornbusch habe ich einen gebrauchten Teppich zu einem fairen Preis erworben. Von Herrn Koukpari wurde ich fachlich bestens und freundlich beraten. Ich kann das Teppichhaus nur weiterempfehlen, alle meine Bedenken in Bezug auf den Kauf des gebrauchten Teppichs wurden ernst genommen, hilfsbereit und großzügig entgegenkommend behandelt. Ich bin sehr zufrieden mit diesem Teppichkauf.',
    rating: 5,
    initials: 'AP'
  },
  {
    name: 'Oliver G.',
    text: 'Sehr höfliche und unaufdringliche Beratung. Gekaufte Teppiche werden nach Hause geliefert. Sehr schöne Auswahl!',
    rating: 5,
    initials: 'OG'
  },
  {
    name: 'S. Buth',
    text: 'Nette und kompetente Mitarbeiter, nicht aufdringlich. Leider schwierige Parksituation',
    rating: 4,
    initials: 'SB'
  },
  {
    name: 'Roland Klimas',
    text: 'Freundlich und Kompetent !',
    rating: 5,
    badge: 'Local Guide',
    image: '/img/BILD1.jpeg',
    initials: 'RK'
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating rating={5} />
            <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
            <span className="text-gray-600">von 5 Sternen</span>
          </div>
          <p className="text-gray-600">
            Basierend auf {reviews.length} Google Bewertungen
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {review.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {review.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name and Badge */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 truncate">
                    {review.name}
                  </h3>
                  {review.badge && (
                    <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded">
                      {review.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review Text */}
              <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Google Link */}
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Teppichhaus+am+Dornbusch/@50.1378935,8.6650353,17z/data=!3m1!4b1!4m6!3m5!1s0x47bd0931dd74cd71:0x8adb477aed6aa806!8m2!3d50.1378901!4d8.6676102!16s%2Fg%2F11cr_0wl21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Alle Bewertungen auf Google ansehen
          </a>
        </div>
      </div>
    </section>
  )
}
