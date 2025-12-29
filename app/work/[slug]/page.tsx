import { Section } from '@/components/Section'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CTAButton } from '@/components/CTAButton'
import { getProjectBySlug, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  const { title, category, youtubeId, description } = project

  return (
    <Section>
      <div className="container mx-auto max-w-4xl">
        <Link href="/work" className="text-zinc-400 hover:text-gold">← Back to Work</Link>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold">{title}</h1>
        <div className="mt-2 inline-block text-xs text-zinc-400 border border-subtle px-2 py-0.5 rounded">{category}</div>

        <div className="mt-6 rounded border border-subtle overflow-hidden">
          <iframe
            className="w-full aspect-video bg-black"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`}
            title={title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <p className="mt-6 text-zinc-300">{description}</p>

        <div className="mt-8">
          <CTAButton>Chat on WhatsApp</CTAButton>
        </div>
      </div>
    </Section>
  )
}
