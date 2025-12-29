'use client'

import { CTAButton } from './CTAButton'

export function Footer() {
  return (
    <footer className="border-t border-subtle bg-background">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-400">© {new Date().getFullYear()} Drisya Films</div>
        <CTAButton>Chat on WhatsApp</CTAButton>
      </div>
    </footer>
  )
}
