import Link from 'next/link'
import { Section } from '@/components/Section'
import { CTAButton } from '@/components/CTAButton'
import { ProjectCard } from '@/components/ProjectCard'
import { WA_LINK } from '@/lib/constants'

const selected = [
  { slug: 'luxe-brand-film', title: 'Luxury Apparel Film', category: 'Brand' },
  { slug: 'founder-profile', title: 'Founder Profile Reel', category: 'Creator' },
  { slug: 'grand-opening', title: 'Corporate Launch Film', category: 'Event' },
  { slug: 'product-spotlight', title: 'Fashion Product Spotlight', category: 'Brand' },
]

export default function HomePage() {
  return (
    <>
      <Section className="pt-20">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Cinematic Videos That Make Brands Look Premium
            </h1>
            <p className="mt-5 text-lg text-zinc-300">
              Brand Films • Reels • Event Coverage
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton>
                Get a Free Consultation
              </CTAButton>
              <CTAButton variant="secondary" href="/work">
                View Our Work
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section heading="Selected Work" sub="A few recent highlights.">
        <div className="container mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {selected.map((p) => (
              <ProjectCard key={p.slug} href={`/work/${p.slug}`} title={p.title} tag={p.category} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/work" className="text-zinc-300 hover:text-gold">Explore all projects →</Link>
          </div>
        </div>
      </Section>

      <Section heading="What We Do" sub="Content built to impress and convert.">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <ServiceCard title="Brand Content" desc="Polished visuals that elevate perception and trust." />
          <ServiceCard title="Event Coverage" desc="Cinematic storytelling that captures moments and scale." />
          <ServiceCard title="Creator Visuals" desc="Thumb-stopping edits designed for growth." />
        </div>
      </Section>

      <Section heading="Our Process" sub="Clear. Efficient. Reliable.">
        <div className="container mx-auto grid gap-4 md:grid-cols-5">
          {['Discovery','Plan','Shoot','Edit','Deliver'].map((step, i) => (
            <div key={step} className="p-5 border border-subtle bg-muted/40 rounded">
              <div className="text-gold text-sm">{String(i+1).padStart(2,'0')}</div>
              <div className="mt-1 text-lg font-medium">{step}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="container mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to make your brand look premium?</h3>
          <p className="mt-3 text-zinc-300">Talk to us on WhatsApp. Fast replies.</p>
          <div className="mt-6 flex justify-center"><CTAButton>Start on WhatsApp</CTAButton></div>
        </div>
      </Section>
    </>
  )
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border border-subtle rounded bg-muted/40">
      <h4 className="text-xl font-medium">{title}</h4>
      <p className="mt-2 text-zinc-300">{desc}</p>
    </div>
  )
}
