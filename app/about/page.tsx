import { Section } from '@/components/Section'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Section
      heading="About"
      sub="Cinematic storytelling for brands that value craft."
    >
      <div className="container mx-auto grid gap-10 md:grid-cols-[1.2fr,0.8fr] items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-xl font-medium">About Drisya Films</h3>

          <p className="mt-4 text-zinc-300">
            We create cinematic films for brands, founders, and events that need clarity,
            credibility, and visual authority — not just content.
          </p>

          <ul className="mt-4 text-zinc-300 list-disc list-inside space-y-2">
            <li>Brand films with strong narrative intent</li>
            <li>Corporate launches and event aftermovies</li>
            <li>Editorial visuals built for long-term brand value</li>
          </ul>

          <p className="mt-4 text-zinc-300">
            Every project is approached with a strong editorial eye, thoughtful direction,
            and detail-first post-production — resulting in work that feels premium and built to last.
          </p>

          <h3 className="mt-10 text-xl font-medium">
            Founder / Creative Direction
          </h3>

          <p className="mt-4 text-zinc-300">
            Drisya Films is led by a filmmaker deeply involved in every stage of the process —
            from pre-production to final delivery.
          </p>

          <p className="mt-4 text-zinc-300">
            The focus is simple: observe first, shoot with purpose, and edit with restraint.
            The goal is not volume, but meaningful work with a clear cinematic identity.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border border-subtle">
            <Image
              src="/images/founder.png"
              alt="Founder of Drisya Films"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </Section>
  )
}
