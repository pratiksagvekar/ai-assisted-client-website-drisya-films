import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function WorkPage() {
  return (
    <Section heading="Work" sub="A curated selection across brand, event, and creator.">
      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} href={`/work/${p.slug}`} title={p.title} tag={p.category} />
        ))}
      </div>
    </Section>
  )
}
