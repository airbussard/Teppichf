'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Teppich } from '@/types/teppich'
import { getAllTeppiche, getUniqueHerkuenfte, getUniqueMaterialien, getPreisRange } from '@/lib/teppiche'

export default function Angebote() {
  const [allTeppiche, setAllTeppiche] = useState<Teppich[]>([])
  const [filteredTeppiche, setFilteredTeppiche] = useState<Teppich[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'preis-asc' | 'preis-desc' | 'name'>('name')
  const [filters, setFilters] = useState({
    herkunft: [] as string[],
    material: [] as string[],
    minPreis: 0,
    maxPreis: 10000,
  })

  const [availableHerkuenfte, setAvailableHerkuenfte] = useState<string[]>([])
  const [availableMaterialien, setAvailableMaterialien] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })

  useEffect(() => {
    async function loadTeppiche() {
      const teppiche = await getAllTeppiche()
      setAllTeppiche(teppiche)
      setFilteredTeppiche(teppiche)

      setAvailableHerkuenfte(getUniqueHerkuenfte(teppiche))
      setAvailableMaterialien(getUniqueMaterialien(teppiche))

      const range = getPreisRange(teppiche)
      setPriceRange(range)
      setFilters(prev => ({ ...prev, minPreis: range.min, maxPreis: range.max }))
    }

    loadTeppiche()
  }, [])

  useEffect(() => {
    let result = [...allTeppiche]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.herkunft.toLowerCase().includes(query) ||
        (t.region && t.region.toLowerCase().includes(query)) ||
        t.beschreibung.toLowerCase().includes(query)
      )
    }

    // Herkunft filter
    if (filters.herkunft.length > 0) {
      result = result.filter(t => filters.herkunft.includes(t.herkunft))
    }

    // Material filter
    if (filters.material.length > 0) {
      result = result.filter(t =>
        filters.material.some(m => t.material.toLowerCase().includes(m.toLowerCase()))
      )
    }

    // Price filter
    result = result.filter(t => t.preis >= filters.minPreis && t.preis <= filters.maxPreis)

    // Sort
    switch (sortBy) {
      case 'preis-asc':
        result.sort((a, b) => a.preis - b.preis)
        break
      case 'preis-desc':
        result.sort((a, b) => b.preis - a.preis)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    setFilteredTeppiche(result)
  }, [allTeppiche, searchQuery, filters, sortBy])

  const toggleHerkunft = (herkunft: string) => {
    setFilters(prev => ({
      ...prev,
      herkunft: prev.herkunft.includes(herkunft)
        ? prev.herkunft.filter(h => h !== herkunft)
        : [...prev.herkunft, herkunft]
    }))
  }

  const toggleMaterial = (material: string) => {
    setFilters(prev => ({
      ...prev,
      material: prev.material.includes(material)
        ? prev.material.filter(m => m !== material)
        : [...prev.material, material]
    }))
  }

  const resetFilters = () => {
    setFilters({
      herkunft: [],
      material: [],
      minPreis: priceRange.min,
      maxPreis: priceRange.max,
    })
    setSearchQuery('')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Unsere Teppich-Angebote
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
            Entdecken Sie unsere handverlesene Auswahl an hochwertigen Orientteppichen und Perserteppichen
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Filter</h3>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-red-700 hover:text-red-800"
                  >
                    Zurücksetzen
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Suche
                  </label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Teppich suchen..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  />
                </div>

                {/* Herkunft Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Herkunft
                  </label>
                  <div className="space-y-2">
                    {availableHerkuenfte.map(herkunft => (
                      <label key={herkunft} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.herkunft.includes(herkunft)}
                          onChange={() => toggleHerkunft(herkunft)}
                          className="rounded border-gray-300 text-red-700 focus:ring-red-700"
                        />
                        <span className="ml-2 text-sm text-gray-700">{herkunft}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Material
                  </label>
                  <div className="space-y-2">
                    {availableMaterialien.map(material => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.material.includes(material)}
                          onChange={() => toggleMaterial(material)}
                          className="rounded border-gray-300 text-red-700 focus:ring-red-700"
                        />
                        <span className="ml-2 text-sm text-gray-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preis: €{filters.minPreis} - €{filters.maxPreis}
                  </label>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min={priceRange.min}
                      max={priceRange.max}
                      step="100"
                      value={filters.minPreis}
                      onChange={(e) => setFilters(prev => ({ ...prev, minPreis: parseInt(e.target.value) }))}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min={priceRange.min}
                      max={priceRange.max}
                      step="100"
                      value={filters.maxPreis}
                      onChange={(e) => setFilters(prev => ({ ...prev, maxPreis: parseInt(e.target.value) }))}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 mb-3">
                    Fragen zu unseren Teppichen?
                  </p>
                  <a
                    href="tel:069232581"
                    className="block w-full bg-red-700 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition"
                  >
                    069 - 232 581
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <p className="text-gray-600">
                  {filteredTeppiche.length} {filteredTeppiche.length === 1 ? 'Teppich' : 'Teppiche'} gefunden
                </p>

                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-700">Sortieren:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  >
                    <option value="name">Name</option>
                    <option value="preis-asc">Preis aufsteigend</option>
                    <option value="preis-desc">Preis absteigend</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              {filteredTeppiche.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    Keine Teppiche gefunden. Bitte passen Sie Ihre Filter an.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTeppiche.map(teppich => (
                    <Link
                      key={teppich.id}
                      href={`/angebote/${teppich.id}`}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                    >
                      <div className="relative h-64 bg-gray-200">
                        <Image
                          src={teppich.bilder[0]}
                          alt={teppich.name}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition">
                          {teppich.name}
                        </h3>

                        <div className="space-y-1 mb-4">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Herkunft:</span> {teppich.herkunft}
                            {teppich.region && ` (${teppich.region})`}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Größe:</span> {teppich.groesse}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Alter:</span> {teppich.alter}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-red-700">
                            €{teppich.preis.toLocaleString('de-DE')}
                          </span>
                          <span className="text-red-700 font-semibold group-hover:translate-x-1 transition">
                            Details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nicht das Richtige gefunden?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Wir haben noch viele weitere Teppiche in unserem Geschäft. Besuchen Sie uns oder rufen Sie uns an!
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
              className="inline-block bg-white text-red-700 border-2 border-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
