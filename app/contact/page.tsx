import { Section } from '@/components/Section'
import { CTAButton } from '@/components/CTAButton'

export default function ContactPage() {
  return (
    <Section>
      <div className="container mx-auto text-center max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-semibold">Have a project in mind?</h1>
        <p className="mt-4 text-zinc-300">Tell us what you need. We’ll reply fast on WhatsApp.</p>
        <div className="mt-8 flex justify-center">
          <CTAButton>Open WhatsApp</CTAButton>
        </div>
      </div>
    </Section>
  )
}
