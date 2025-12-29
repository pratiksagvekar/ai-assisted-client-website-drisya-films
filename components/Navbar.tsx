'use client'

import Link from 'next/link'
import { CTAButton } from './CTAButton'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-subtle">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-wide">Drisya Films</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="hover:text-gold" href="/work">Work</Link>
          <Link className="hover:text-gold" href="/services">Services</Link>
          <Link className="hover:text-gold" href="/about">About</Link>
          <Link className="hover:text-gold" href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:block"><CTAButton>WhatsApp</CTAButton></div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <Link href="/contact" className="text-sm hover:text-gold">Menu</Link>
    </div>
  )
}
