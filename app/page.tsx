import Link from 'next/link'
import { Bot, MapPin, Navigation, ShoppingBag, ArrowRight, Star, Users, Sparkles } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Bot,
      title: 'KI-Reise-Co-Pilot',
      description: 'Ihr persönlicher digitaler Assistent plant den perfekten Urlaub basierend auf Ihren Interessen.',
      link: '/copilot',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: MapPin,
      title: 'Intelligente Besucherlenkung',
      description: 'Echtzeit-Auslastung und smarte Alternativvorschläge für entspannte Erlebnisse ohne Menschenmassen.',
      link: '/besucherlenkung',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Navigation,
      title: 'Mobility Hub',
      description: 'Alle Transportmittel an einem Ort - Fähren, Busse, E-Bikes und smarte Navigation.',
      link: '/mobility',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: ShoppingBag,
      title: 'Lokale Erlebnisse',
      description: 'Authentische Geheimtipps und direkte Buchung von Touren mit einheimischen Guides.',
      link: '/marktplatz',
      color: 'from-orange-500 to-red-600',
    },
  ]

  const stats = [
    { number: '50+', label: 'Orte am Gardasee' },
    { number: '100+', label: 'Lokale Partner' },
    { number: '10.000+', label: 'Zufriedene Gäste' },
    { number: '4.8', label: 'Durchschnittsbewertung' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">Die digitale Zukunft des Gardasee-Tourismus</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ein See.<br />
              Ein Erlebnis.<br />
              <span className="text-yellow-300">Eine App.</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-100 mb-10 leading-relaxed">
              Entdecken Sie den Gardasee auf intelligente Weise - weniger Stress, mehr Qualität,
              authentische Erlebnisse abseits der Massen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/copilot"
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
              >
                <Bot className="h-6 w-6" />
                <span>KI-Co-Pilot starten</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/besucherlenkung"
                className="inline-flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-400 transition-all border-2 border-white/20"
              >
                <MapPin className="h-6 w-6" />
                <span>Auslastung prüfen</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vier Funktionen. Ein perfektes Erlebnis.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Garda Connect vereint alle wichtigen Aspekte Ihres Urlaubs in einer intelligenten Plattform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  href={feature.link}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              So funktioniert's
            </h2>
            <p className="text-xl text-gray-600">
              Ihr perfekter Urlaub in drei einfachen Schritten
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Profil erstellen</h3>
                <p className="text-gray-600">
                  Teilen Sie uns Ihre Interessen, Ihr Budget und Ihr Reisetempo mit.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">KI-Empfehlungen erhalten</h3>
                <p className="text-gray-600">
                  Unser Co-Pilot erstellt personalisierte Tagespläne und zeigt versteckte Perlen.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Buchen & Erleben</h3>
                <p className="text-gray-600">
                  Mobilität und Erlebnisse direkt in der App buchen - alles aus einer Hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Warum Garda Connect?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Stressfreies Reisen</h3>
                    <p className="text-gray-600">Keine überfüllten Hotspots mehr - entspannte Alternativen in Echtzeit.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Authentische Erlebnisse</h3>
                    <p className="text-gray-600">Entdecken Sie echte Geheimtipps abseits der Touristenpfade.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Navigation className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Nahtlose Mobilität</h3>
                    <p className="text-gray-600">Alle Verkehrsmittel integriert - Auto stehen lassen war nie einfacher.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lokale Unterstützung</h3>
                    <p className="text-gray-600">Direkte Buchung bei einheimischen Anbietern - authentisch und fair.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für Ihren perfekten Gardasee-Urlaub?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Starten Sie jetzt mit unserem KI-Co-Piloten und erleben Sie den Gardasee wie nie zuvor.
          </p>
          <Link
            href="/copilot"
            className="inline-flex items-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
          >
            <Bot className="h-6 w-6" />
            <span>Jetzt loslegen</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
