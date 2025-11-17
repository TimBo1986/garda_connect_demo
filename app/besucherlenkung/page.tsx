'use client'

import { useState } from 'react'
import { MapPin, Users, TrendingUp, TrendingDown, AlertCircle, ThumbsUp, Navigation } from 'lucide-react'

type Location = {
  id: string
  name: string
  type: string
  currentVisitors: number
  capacity: number
  trend: 'up' | 'down' | 'stable'
  alternatives: string[]
  coordinates: { x: number; y: number }
  description: string
}

const locations: Location[] = [
  {
    id: '1',
    name: 'Sirmione',
    type: 'Historische Stadt',
    currentVisitors: 4200,
    capacity: 5000,
    trend: 'up',
    alternatives: ['Borghetto sul Mincio', 'Peschiera del Garda'],
    coordinates: { x: 45, y: 75 },
    description: 'Beliebte Halbinsel mit römischen Ruinen und Thermalquellen',
  },
  {
    id: '2',
    name: 'Bardolino',
    type: 'Weinort',
    currentVisitors: 1200,
    capacity: 3000,
    trend: 'stable',
    alternatives: ['Lazise', 'Garda'],
    coordinates: { x: 55, y: 50 },
    description: 'Charmantes Weinanbaugebiet mit malerischer Uferpromenade',
  },
  {
    id: '3',
    name: 'Malcesine',
    type: 'Bergdorf',
    currentVisitors: 3800,
    capacity: 4000,
    trend: 'up',
    alternatives: ['Brenzone', 'Cassone'],
    coordinates: { x: 70, y: 25 },
    description: 'Mittelalterliches Dorf am Fuße des Monte Baldo',
  },
  {
    id: '4',
    name: 'Limone sul Garda',
    type: 'Küstenort',
    currentVisitors: 1800,
    capacity: 3500,
    trend: 'down',
    alternatives: ['Tremosine', 'Tignale'],
    coordinates: { x: 25, y: 30 },
    description: 'Malerisches Dorf mit Zitronenhainen und dramatischer Kulisse',
  },
  {
    id: '5',
    name: 'Riva del Garda',
    type: 'Stadt',
    currentVisitors: 2500,
    capacity: 6000,
    trend: 'stable',
    alternatives: ['Torbole', 'Arco'],
    coordinates: { x: 30, y: 15 },
    description: 'Lebhafte Stadt am Nordufer, beliebt bei Surfern',
  },
  {
    id: '6',
    name: 'Borghetto sul Mincio',
    type: 'Geheimtipp',
    currentVisitors: 450,
    capacity: 2000,
    trend: 'down',
    alternatives: ['Valeggio sul Mincio'],
    coordinates: { x: 40, y: 85 },
    description: 'Verstecktes Juwel mit mittelalterlichen Wassermühlen',
  },
]

export default function BesucherlenkungPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  const getOccupancyLevel = (location: Location) => {
    const percentage = (location.currentVisitors / location.capacity) * 100
    if (percentage >= 80) return { level: 'Sehr voll', color: 'bg-red-500', textColor: 'text-red-700' }
    if (percentage >= 60) return { level: 'Gut besucht', color: 'bg-yellow-500', textColor: 'text-yellow-700' }
    return { level: 'Entspannt', color: 'bg-green-500', textColor: 'text-green-700' }
  }

  const getOccupancyPercentage = (location: Location) => {
    return Math.round((location.currentVisitors / location.capacity) * 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Intelligente Besucherlenkung</h1>
        <p className="text-lg text-gray-600">
          Echtzeit-Auslastung der beliebtesten Orte am Gardasee - vermeiden Sie Menschenmassen und entdecken Sie entspannte Alternativen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <MapPin className="h-6 w-6 mr-2 text-primary-600" />
            Interaktive Karte
          </h2>

          <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg" style={{ height: '500px' }}>
            {/* Lake Garda visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Lake shape (simplified) */}
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="35"
                    ry="45"
                    fill="#3b82f6"
                    opacity="0.3"
                  />

                  {/* Location markers */}
                  {locations.map((location) => {
                    const occupancy = getOccupancyPercentage(location)
                    const { color } = getOccupancyLevel(location)

                    return (
                      <g key={location.id}>
                        <circle
                          cx={location.coordinates.x}
                          cy={location.coordinates.y}
                          r="4"
                          className={`cursor-pointer transition-all ${
                            selectedLocation?.id === location.id ? 'scale-150' : ''
                          }`}
                          fill={occupancy >= 80 ? '#ef4444' : occupancy >= 60 ? '#eab308' : '#22c55e'}
                          onClick={() => setSelectedLocation(location)}
                        />
                        <text
                          x={location.coordinates.x}
                          y={location.coordinates.y - 6}
                          fontSize="3"
                          textAnchor="middle"
                          className="fill-gray-900 font-medium pointer-events-none"
                        >
                          {location.name.split(' ')[0]}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Entspannt</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span>Gut besucht</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Sehr voll</span>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center">
            <Users className="h-6 w-6 mr-2 text-primary-600" />
            Aktuelle Auslastung
          </h2>

          {selectedLocation ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedLocation.name}</h3>
              <p className="text-gray-600 mb-4">{selectedLocation.description}</p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Auslastung</span>
                    <span className={`text-sm font-bold ${getOccupancyLevel(selectedLocation).textColor}`}>
                      {getOccupancyLevel(selectedLocation).level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${getOccupancyLevel(selectedLocation).color} h-3 rounded-full transition-all`}
                      style={{ width: `${getOccupancyPercentage(selectedLocation)}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedLocation.currentVisitors.toLocaleString()} von {selectedLocation.capacity.toLocaleString()} Besuchern
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {selectedLocation.trend === 'up' && (
                    <>
                      <TrendingUp className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-red-600">Besucherzahl steigt</span>
                    </>
                  )}
                  {selectedLocation.trend === 'down' && (
                    <>
                      <TrendingDown className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-green-600">Besucherzahl sinkt</span>
                    </>
                  )}
                  {selectedLocation.trend === 'stable' && (
                    <>
                      <ThumbsUp className="h-5 w-5 text-blue-500" />
                      <span className="text-sm text-blue-600">Stabile Auslastung</span>
                    </>
                  )}
                </div>

                {getOccupancyPercentage(selectedLocation) >= 70 && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Empfohlene Alternativen:</h4>
                        <ul className="space-y-2">
                          {selectedLocation.alternatives.map((alt, idx) => (
                            <li key={idx} className="flex items-center text-yellow-700">
                              <Navigation className="h-4 w-4 mr-2" />
                              {alt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Route planen
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-500 text-center py-8">
                Klicken Sie auf einen Ort auf der Karte, um Details zu sehen
              </p>
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            {locations.slice(0, 4).map((location) => {
              const { level, color, textColor } = getOccupancyLevel(location)
              return (
                <div
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-sm mb-2">{location.name}</h4>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${color}`}></div>
                    <span className={`text-xs font-medium ${textColor}`}>{level}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
