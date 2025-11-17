'use client'

import { useState } from 'react'
import { Bot, Send, Sparkles, Users, Wallet, Clock } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Willkommen bei Ihrem persönlichen KI-Reise-Co-Piloten! Ich helfe Ihnen, Ihren perfekten Gardasee-Urlaub zu planen. Erzählen Sie mir von Ihren Interessen und Wünschen.',
    },
  ])
  const [input, setInput] = useState('')
  const [profile, setProfile] = useState({
    interests: '',
    budget: '',
    pace: '',
  })
  const [showProfileSetup, setShowProfileSetup] = useState(true)

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(input)
      setMessages((prev) => [...prev, { role: 'assistant', content: response }])
    }, 1000)

    setInput('')
  }

  const generateResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    if (lowerInput.includes('wein') || lowerInput.includes('wine')) {
      return '🍷 Ausgezeichnete Wahl! Ich empfehle Ihnen eine Tour durch das Weinanbaugebiet Bardolino. Dort können Sie:\n\n1. Weingut Zeni besuchen (mit Weinmuseum)\n2. Eine geführte Verkostung bei Cantina Valpolicella buchen\n3. Durch die malerischen Weinberge wandern\n\nMöchten Sie, dass ich Ihnen die beste Route dorthin zeige?'
    }

    if (lowerInput.includes('familie') || lowerInput.includes('kinder')) {
      return '👨‍👩‍👧‍👦 Perfekt für Familien! Hier sind meine Top-Empfehlungen:\n\n1. Gardaland Themepark (ein Muss!)\n2. Spiaggia Baia delle Sirene - familienfreundlicher Strand\n3. Caneva Aquapark in Lazise\n4. Bootstour mit Zwischenstopp in Limone\n\nWie alt sind Ihre Kinder?'
    }

    if (lowerInput.includes('wandern') || lowerInput.includes('natur')) {
      return '🥾 Großartig! Der Gardasee bietet spektakuläre Wandermöglichkeiten:\n\n1. Monte Baldo - mit Seilbahn erreichbar, atemberaubende Aussicht\n2. Sentiero del Ponale - historischer Panoramaweg\n3. Valle delle Ferriere - verstecktes Naturjuwel\n4. Rocca di Manerba - moderate Wanderung mit Seeblick\n\nWelches Schwierigkeitsniveau bevorzugen Sie?'
    }

    if (lowerInput.includes('restaurant') || lowerInput.includes('essen')) {
      return '🍝 Ich habe großartige kulinarische Tipps für Sie:\n\n1. Trattoria al Pescatore (Sirmione) - frischer Fisch\n2. Osteria Santo Cielo (Bardolino) - authentisch italienisch\n3. Ristorante Vecchia Malcesine - mit Seeblick\n4. Geheimtipp: Locanda al Benaco in Brenzone\n\nMöchten Sie eine Reservierung vornehmen?'
    }

    return 'Das klingt interessant! Basierend auf Ihren Vorlieben erstelle ich einen personalisierten Tagesplan für Sie. Können Sie mir noch etwas mehr über Ihre Erwartungen erzählen? Interessieren Sie sich eher für Kultur, Natur, Sport oder Kulinarik?'
  }

  const handleProfileSubmit = () => {
    setShowProfileSetup(false)
    const profileMessage = `Vielen Dank! Ich habe Ihr Profil gespeichert:\n\n✨ Interessen: ${profile.interests || 'Allgemein'}\n💰 Budget: ${profile.budget || 'Mittel'}\n⏱️ Tempo: ${profile.pace || 'Entspannt'}\n\nBasierend auf diesen Informationen werde ich Ihnen maßgeschneiderte Empfehlungen geben. Was möchten Sie heute unternehmen?`

    setMessages([...messages, { role: 'assistant', content: profileMessage }])
  }

  if (showProfileSetup) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Bot className="h-10 w-10 text-primary-600" />
              <h1 className="text-3xl font-bold">KI-Reise-Co-Pilot</h1>
            </div>

            <p className="text-gray-600 mb-8">
              Lassen Sie uns Ihr persönliches Reiseprofil erstellen, damit ich Ihnen die besten Empfehlungen geben kann.
            </p>

            <div className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Was interessiert Sie am meisten?</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  value={profile.interests}
                  onChange={(e) => setProfile({ ...profile, interests: e.target.value })}
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Kultur & Geschichte">Kultur & Geschichte</option>
                  <option value="Natur & Wandern">Natur & Wandern</option>
                  <option value="Wassersport">Wassersport</option>
                  <option value="Kulinarik & Wein">Kulinarik & Wein</option>
                  <option value="Entspannung">Entspannung</option>
                  <option value="Familie & Kinder">Familie & Kinder</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Wallet className="h-4 w-4" />
                  <span>Ihr Budget</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  value={profile.budget}
                  onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Sparsam">Sparsam (€)</option>
                  <option value="Mittel">Mittel (€€)</option>
                  <option value="Komfortabel">Komfortabel (€€€)</option>
                  <option value="Luxus">Luxus (€€€€)</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Ihr bevorzugtes Reisetempo</span>
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  value={profile.pace}
                  onChange={(e) => setProfile({ ...profile, pace: e.target.value })}
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Entspannt">Entspannt - Zeit zum Genießen</option>
                  <option value="Aktiv">Aktiv - Viel erleben</option>
                  <option value="Intensiv">Intensiv - Jede Minute nutzen</option>
                </select>
              </div>

              <button
                onClick={handleProfileSubmit}
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Profil erstellen & Chat starten
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 12rem)' }}>
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 flex items-center space-x-3">
            <Bot className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">KI-Reise-Co-Pilot</h1>
              <p className="text-sm text-primary-100">Ihr persönlicher Gardasee-Assistent</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-800 shadow'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="h-4 w-4 text-primary-600" />
                      <span className="text-xs font-medium text-primary-600">Co-Pilot</span>
                    </div>
                  )}
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Fragen Sie mich nach Empfehlungen, Routen oder Geheimtipps..."
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Probieren Sie: "Empfehle mir Weintouren" oder "Was kann ich mit Kindern unternehmen?"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
