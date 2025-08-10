import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Пластичний хірург | Візитна картка',
  description: 'Професійний пластичний хірург - консультації та операції',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className + " relative min-h-screen"} style={{ minHeight: '100vh' }}>
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/BigBort5.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100vw',
          }}
          aria-hidden="true"
        />
        <main className="min-h-screen bg-white/70 dark:bg-black/60">
          {children}
        </main>
      </body>
    </html>
  )
}