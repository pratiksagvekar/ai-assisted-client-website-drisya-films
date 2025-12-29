import { Section } from '@/components/Section'
import { CTAButton } from '@/components/CTAButton'
import { getProjectBySlug } from '@/lib/projects'

export default function ServicesPage() {
  const brandId = getProjectBySlug('luxe-brand-film')?.youtubeId
  const productId = getProjectBySlug('product-spotlight')?.youtubeId
  const corporateId = getProjectBySlug('grand-opening')?.youtubeId
  const eventId = getProjectBySlug('summit-recap')?.youtubeId
  const founderId = getProjectBySlug('founder-profile')?.youtubeId
  return (
    <>
      <Section heading="Brand Films">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded border border-subtle overflow-hidden">
            <iframe
              className="w-full aspect-video bg-black"
              src={`https://www.youtube.com/embed/${brandId}?rel=0&modestbranding=1&playsinline=1`}
              title="Brand Films"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <div className="text-sm text-gold">Starting from ₹45,000</div>
            <p className="mt-3 text-zinc-300">
              Cinematic brand films, product showcases, and campaign visuals designed to build trust and elevate brand perception.
            </p>
            <div className="mt-6"><CTAButton>Discuss your brand film → WhatsApp</CTAButton></div>
          </div>
        </div>
      </Section>

      <Section heading="Product & Fashion Films">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded border border-subtle overflow-hidden">
            <iframe
              className="w-full aspect-video bg-black"
              src={`https://www.youtube.com/embed/${productId}?rel=0&modestbranding=1&playsinline=1`}
              title="Product & Fashion Films"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <div className="text-sm text-gold">Starting from ₹30,000</div>
            <p className="mt-3 text-zinc-300">
              Product-focused visual storytelling for fashion, lifestyle, and consumer brands, crafted for social and web platforms.
            </p>
            <div className="mt-6"><CTAButton>Plan a product shoot → WhatsApp</CTAButton></div>
          </div>
        </div>
      </Section>

      <Section heading="Corporate & Business Films">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded border border-subtle overflow-hidden">
            <iframe
              className="w-full aspect-video bg-black"
              src={`https://www.youtube.com/embed/${corporateId}?rel=0&modestbranding=1&playsinline=1`}
              title="Corporate & Business Films"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <div className="text-sm text-gold">Starting from ₹60,000</div>
            <p className="mt-3 text-zinc-300">
              Polished corporate films for launches, presentations, and internal or external communications, built for credibility and clarity.
            </p>
            <div className="mt-6"><CTAButton>Request a corporate quote → WhatsApp</CTAButton></div>
          </div>
        </div>
      </Section>

      <Section heading="Event Aftermovies">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded border border-subtle overflow-hidden">
            <iframe
              className="w-full aspect-video bg-black"
              src={`https://www.youtube.com/embed/${eventId}?rel=0&modestbranding=1&playsinline=1`}
              title="Event Aftermovies"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <div className="text-sm text-gold">Starting from ₹25,000</div>
            <p className="mt-3 text-zinc-300">
              High-energy event aftermovies capturing atmosphere, scale, and emotion — from launches to community and sports events.
            </p>
            <div className="mt-6"><CTAButton>Book event coverage → WhatsApp</CTAButton></div>
          </div>
        </div>
      </Section>

      <Section heading="Founder / Personal Brand Reels">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded border border-subtle overflow-hidden">
            <iframe
              className="w-full aspect-video bg-black"
              src={`https://www.youtube.com/embed/${founderId}?rel=0&modestbranding=1&playsinline=1`}
              title="Founder / Personal Brand Reels"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <div className="text-sm text-gold">Starting from ₹18,000</div>
            <p className="mt-3 text-zinc-300">
              Personal brand and founder reels focused on presence, storytelling, and visual authority for digital platforms.
            </p>
            <div className="mt-6"><CTAButton>Create your founder reel → WhatsApp</CTAButton></div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto text-center text-xs text-zinc-400">
          “Starting prices are indicative. Final pricing depends on scope, shoot days, locations, and creative requirements.”
        </div>
      </Section>
    </>
  )
}
