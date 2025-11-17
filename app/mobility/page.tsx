'use client'

import { useState } from 'react'
import { Ship, Bus, Bike, Car, Clock, MapPin, Euro, Calendar } from 'lucide-react'

type TransportOption = {
  id: string
  type: 'ferry' | 'bus' | 'bike' | 'car'
  name: string
  description: string
  price: string
  duration: string
  provider: string
  available: boolean
  nextDeparture?: string
  features: string[]
}

const transportOptions: TransportOption[] = [
  {
    id: '1',
    type: 'ferry',
    name: 'Navigarda Fähre',
    description: 'Komfortables Reisen zwischen allen Orten am See',
    price: '€8-15',
    duration: '20-45 Min',
    provider: 'Navigazione Laghi',
    available: true,
    nextDeparture: '10:30',
    features: ['Fahrradmitnahme', 'Panoramablick', 'Café an Bord', 'Barrierefreier Zugang'],
  },
  {
    id: '2',
    type: 'bus',
    name: 'ATV Busnetz',
    description: 'Regelmäßige Verbindungen entlang des gesamten Seeufers',
    price: '€2-5',
    duration: '15-60 Min',
    provider: 'ATV Verona',
    available: true,
    nextDeparture: '09:45',
    features: ['Klimatisiert', 'Häufige Verbindungen', 'Günstig', 'WiFi'],
  },
  {
    id: '3',
    type: 'bike',
    name: 'E-Bike Verleih',
    description: 'Elektrofahrräder für entspanntes Erkunden der Uferstraßen',
    price: '€25/Tag',
    duration: 'Flexibel',
    provider: 'Garda Bike',
    available: true,
    features: ['GPS-Navigation', 'Helm inklusive', 'Mehrere Standorte', 'Kindersitze verfügbar'],
  },
  {
    id: '4',
    type: 'bike',
    name: 'Vespa Vermietung',
    description: 'Erleben Sie italienisches Lebensgefühl auf zwei Rädern',
    price: '€45/Tag',
    duration: 'Flexibel',
    provider: 'Vespa Garda',
    available: true,
    features: ['Vollkasko', 'Freie Kilometeranzahl', 'Tandemroller verfügbar', 'Gepäckfach'],
  },
  {
    id: '5',
    type: 'car',
    name: 'Smart Navigation',
    description: 'Intelligente Routenführung zur Vermeidung von Staus',
    price: 'Kostenlos',
    duration: 'Variable',
    provider: 'Garda Connect',
    available: true,
    features: ['Echtzeit-Verkehr', 'Hotspot-Umfahrung', 'Parkplatz-Finder', 'Offline-Karten'],
  },
]

export default function MobilityPage() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null)

  const filteredOptions = selectedType === 'all'
    ? transportOptions
    : transportOptions.filter(opt => opt.type === selectedType)

  const getIcon = (type: string) => {
    switch (type) {
      case 'ferry': return Ship
      case 'bus': return Bus
      case 'bike': return Bike
      case 'car': return Car
      default: return MapPin
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'ferry': return 'Fähre'
      case 'bus': return 'Bus'
      case 'bike': return 'Zweirad'
      case 'car': return 'Auto'
      default: return 'Alle'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mobility Hub</h1>
        <p className="text-lg text-gray-600">
          Alle Transportmittel an einem Ort - planen Sie Ihre Mobilität am Gardasee einfach und nachhaltig.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            selectedType === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          } shadow`}
        >
          Alle
        </button>
        {['ferry', 'bus', 'bike', 'car'].map((type) => {
          const Icon = getIcon(type)
          return (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedType === type
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow`}
            >
              <Icon className="h-5 w-5" />
              <span>{getTypeLabel(type)}</span>
            </button>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOptions.map((option) => {
          const Icon = getIcon(option.type)
          return (
            <div
              key={option.id}
              onClick={() => setSelectedTransport(option)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="h-10 w-10" />
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {option.provider}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
                <p className="text-primary-100 text-sm">{option.description}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Euro className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Preis</p>
                      <p className="font-bold text-gray-900">{option.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Dauer</p>
                      <p className="font-bold text-gray-900">{option.duration}</p>
                    </div>
                  </div>
                </div>

                {option.nextDeparture && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-800">
                        Nächste Abfahrt: <strong>{option.nextDeparture}</strong>
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    option.available
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!option.available}
                >
                  {option.available ? 'Details & Buchen' : 'Nicht verfügbar'}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal for selected transport */}
      {selectedTransport && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedTransport(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
              {(() => {
                const Icon = getIcon(selectedTransport.type)
                return <Icon className="h-12 w-12 mb-4" />
              })()}
              <h2 className="text-3xl font-bold mb-2">{selectedTransport.name}</h2>
              <p className="text-primary-100">{selectedTransport.description}</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Preis</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedTransport.price}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Dauer</h3>
                  <p className="text-2xl font-bold text-gray-900">{selectedTransport.duration}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Leistungen</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedTransport.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedTransport.nextDeparture && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-blue-900 mb-2">Abfahrtszeiten heute</h3>
                  <div className="flex space-x-3 text-sm">
                    <span className="bg-white px-3 py-1 rounded font-medium">{selectedTransport.nextDeparture}</span>
                    <span className="bg-white px-3 py-1 rounded">12:15</span>
                    <span className="bg-white px-3 py-1 rounded">14:00</span>
                    <span className="bg-white px-3 py-1 rounded">16:30</span>
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Jetzt buchen
                </button>
                <button
                  onClick={() => setSelectedTransport(null)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Tips */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">💡 Mobilitäts-Tipps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-bold mb-2">🚢 Fähre als Erlebnis</h3>
            <p className="text-sm text-gray-600">
              Die Fähre ist nicht nur Transport, sondern ein Highlight! Genießen Sie spektakuläre Ausblicke vom Wasser.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-bold mb-2">🚴 E-Bike für Weintouren</h3>
            <p className="text-sm text-gray-600">
              Perfekt für Ausflüge ins Hinterland - keine Sorgen über Steigungen oder den Rückweg nach der Verkostung.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-bold mb-2">🚌 Bus-Tagesticket</h3>
            <p className="text-sm text-gray-600">
              Mit dem Tagesticket für €10 unbegrenzt alle Busse nutzen - ideal für spontane Entdecker.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-bold mb-2">🅿️ Park & Ride</h3>
            <p className="text-sm text-gray-600">
              Nutzen Sie die P&R-Parkplätze außerhalb und fahren Sie mit Bus oder Fähre in die Zentren.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
