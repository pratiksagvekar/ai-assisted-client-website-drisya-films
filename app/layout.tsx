import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Drisya Films — Cinematic Media Production',
  description: 'Premium brand films, reels, and event coverage for brands that demand impact.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
