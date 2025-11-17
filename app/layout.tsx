import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Garda Connect - Ein See. Ein Erlebnis. Eine App.',
  description: 'Die digitale Zukunft des Gardasee-Tourismus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © 2024 Garda Connect. Ein See. Ein Erlebnis. Eine App.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
