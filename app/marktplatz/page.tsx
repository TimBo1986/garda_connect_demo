'use client'

import { useState } from 'react'
import { Wine, UtensilsCrossed, Mountain, Camera, Heart, Star, Users, Clock, Euro } from 'lucide-react'

type Experience = {
  id: string
  title: string
  category: 'wine' | 'food' | 'tour' | 'adventure' | 'culture'
  provider: string
  location: string
  price: number
  duration: string
  rating: number
  reviews: number
  maxParticipants: number
  description: string
  highlights: string[]
  image: string
  featured: boolean
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Weinprobe auf historischem Weingut',
    category: 'wine',
    provider: 'Cantina Zeni',
    location: 'Bardolino',
    price: 35,
    duration: '2-3 Stunden',
    rating: 4.8,
    reviews: 127,
    maxParticipants: 12,
    description: 'Entdecken Sie die Geheimnisse des Bardolino-Weins in einem der traditionsreichsten Weingüter der Region.',
    highlights: [
      'Verkostung von 5 verschiedenen Weinen',
      'Führung durch historische Weinkeller',
      'Lokale Antipasti inklusive',
      'Deutschsprachige Guides verfügbar',
    ],
    image: 'wine-tasting',
    featured: true,
  },
  {
    id: '2',
    title: 'Olivenöl-Tour mit Verkostung',
    category: 'food',
    provider: 'Frantoio di Riva',
    location: 'Riva del Garda',
    price: 28,
    duration: '2 Stunden',
    rating: 4.9,
    reviews: 89,
    maxParticipants: 15,
    description: 'Erleben Sie die Olivenölproduktion von der Ernte bis zur Flasche und verkosten Sie preisgekrönte Öle.',
    highlights: [
      'Besichtigung der Ölmühle',
      'Verkostung von 4 Olivenölsorten',
      'Traditionelle Bruschetta',
      'Tipps zur Ölverwendung',
    ],
    image: 'olive-oil',
    featured: true,
  },
  {
    id: '3',
    title: 'Monte Baldo Sonnenaufgangs-Wanderung',
    category: 'adventure',
    provider: 'Garda Mountain Guides',
    location: 'Malcesine',
    price: 45,
    duration: '4 Stunden',
    rating: 5.0,
    reviews: 64,
    maxParticipants: 8,
    description: 'Erleben Sie einen magischen Sonnenaufgang auf dem Monte Baldo mit atemberaubendem Blick über den See.',
    highlights: [
      'Professioneller Bergführer',
      'Frühstück am Gipfel',
      'Fotografische Highlights',
      'Seilbahnticket inklusive',
    ],
    image: 'mountain-sunrise',
    featured: false,
  },
  {
    id: '4',
    title: 'Kochkurs: Authentische Pasta',
    category: 'food',
    provider: 'Cucina di Nonna',
    location: 'Garda',
    price: 55,
    duration: '3 Stunden',
    rating: 4.9,
    reviews: 156,
    maxParticipants: 10,
    description: 'Lernen Sie von einer echten Nonna, wie man perfekte handgemachte Pasta zubereitet.',
    highlights: [
      'Herstellung von 3 Pasta-Sorten',
      'Gemeinsames Abendessen',
      'Rezeptbuch zum Mitnehmen',
      'Kleine Gruppen für persönliche Betreuung',
    ],
    image: 'cooking-class',
    featured: true,
  },
  {
    id: '5',
    title: 'Versteckte Perlen: Foto-Tour',
    category: 'culture',
    provider: 'Local Eyes Photography',
    location: 'Limone & Umgebung',
    price: 40,
    duration: '3 Stunden',
    rating: 4.7,
    reviews: 43,
    maxParticipants: 6,
    description: 'Entdecken Sie fotogene Geheimtipps abseits der Touristenpfade mit einem lokalen Fotografen.',
    highlights: [
      'Zugang zu versteckten Locations',
      'Fotografie-Tipps vom Profi',
      'Kleine Gruppe für Flexibilität',
      'Nachbearbeitung-Workshop optional',
    ],
    image: 'photo-tour',
    featured: false,
  },
  {
    id: '6',
    title: 'Kajak-Tour zum Wasserfall',
    category: 'adventure',
    provider: 'Garda Kayak Adventures',
    location: 'Torbole',
    price: 50,
    duration: '3-4 Stunden',
    rating: 4.8,
    reviews: 98,
    maxParticipants: 12,
    description: 'Paddeln Sie entlang der Küste zu einem versteckten Wasserfall, inkl. Schwimmpause.',
    highlights: [
      'Komplette Ausrüstung inklusive',
      'Für Anfänger geeignet',
      'Schwimmen am Wasserfall',
      'Snacks und Getränke',
    ],
    image: 'kayak',
    featured: false,
  },
]

const categories = [
  { id: 'all', label: 'Alle Erlebnisse', icon: Heart },
  { id: 'wine', label: 'Wein', icon: Wine },
  { id: 'food', label: 'Kulinarik', icon: UtensilsCrossed },
  { id: 'adventure', label: 'Abenteuer', icon: Mountain },
  { id: 'culture', label: 'Kultur', icon: Camera },
]

export default function MarktplatzPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory)

  const featuredExperiences = experiences.filter(exp => exp.featured)

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat ? cat.icon : Heart
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Lokale Erlebnisse & Marktplatz</h1>
        <p className="text-lg text-gray-600">
          Entdecken Sie authentische Erlebnisse mit lokalen Experten - abseits der Touristenpfade.
        </p>
      </div>

      {/* Featured Experiences */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Star className="h-6 w-6 mr-2 text-yellow-500 fill-yellow-500" />
          Empfohlene Erlebnisse
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredExperiences.map((exp) => {
            const Icon = getCategoryIcon(exp.category)
            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <Icon className="h-20 w-20 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {exp.location}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold">{exp.rating}</span>
                      <span className="text-xs text-gray-500">({exp.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{exp.provider}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">€{exp.price}</span>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow`}
            >
              <Icon className="h-5 w-5" />
              <span>{cat.label}</span>
            </button>
          )
        })}
      </div>

      {/* All Experiences */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperiences.map((exp) => {
          const Icon = getCategoryIcon(exp.category)
          return (
            <div
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
                <Icon className="h-16 w-16 text-white opacity-50" />
                {exp.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                    Empfohlen
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500">{exp.location}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold">{exp.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold mb-2">{exp.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{exp.provider}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-primary-600">€{exp.price}</span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">{exp.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="h-64 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center relative">
              {(() => {
                const Icon = getCategoryIcon(selectedExperience.category)
                return <Icon className="h-32 w-32 text-white opacity-30" />
              })()}
              {selectedExperience.featured && (
                <div className="absolute top-6 right-6 bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-900" />
                  <span>Empfohlen</span>
                </div>
              )}
            </div>

            <div className="p-8">
              {/* Title & Rating */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedExperience.title}</h2>
                  <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-lg">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-lg">{selectedExperience.rating}</span>
                    <span className="text-sm text-gray-500">({selectedExperience.reviews} Bewertungen)</span>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-2">{selectedExperience.provider}</p>
                <p className="text-sm text-primary-600 font-medium">📍 {selectedExperience.location}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{selectedExperience.description}</p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Euro className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-2xl font-bold text-gray-900">€{selectedExperience.price}</p>
                  <p className="text-xs text-gray-500">pro Person</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-lg font-bold text-gray-900">{selectedExperience.duration}</p>
                  <p className="text-xs text-gray-500">Dauer</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-lg font-bold text-gray-900">max. {selectedExperience.maxParticipants}</p>
                  <p className="text-xs text-gray-500">Teilnehmer</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">✨ Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedExperience.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-colors font-bold text-lg">
                  Jetzt buchen
                </button>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="px-6 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Local Providers Section */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">🌟 Werden Sie Partner</h2>
        <p className="text-gray-700 mb-6">
          Sie sind lokaler Anbieter und möchten Ihre Erlebnisse auf Garda Connect präsentieren?
          Erreichen Sie tausende qualifizierter Gäste und profitieren Sie von unserem direkten Buchungssystem.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
          Partner werden
        </button>
      </div>
    </div>
  )
}
