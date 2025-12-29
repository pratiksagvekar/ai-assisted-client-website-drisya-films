'use client'

import Link from 'next/link'
import { getProjectBySlug } from '@/lib/projects'

type Props = {
  href: string
  title: string
  tag: string
}

export function ProjectCard({ href, title, tag }: Props) {
  const slug = href.split('/').filter(Boolean).pop()
  const youtubeId = slug ? getProjectBySlug(slug)?.youtubeId : undefined
  const thumb = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : undefined
  return (
    <Link href={href} className="group block">
      {/* Card */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-subtle bg-black/40">
        {thumb && (
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${thumb})` }}
          />
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-gold">
            <div className="ml-1 h-0 w-0 border-y-[7px] border-y-transparent border-l-[12px] border-l-white group-hover:border-l-gold transition-colors" />
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 transition-all duration-300 group-hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.35)]" />
      </div>

      {/* Text */}
      <div className="mt-3 flex items-center justify-between">
        <div className="font-medium transition-colors group-hover:text-gold">
          {title}
        </div>
        <div className="rounded border border-subtle px-2 py-0.5 text-xs text-zinc-400">
          {tag}
        </div>
      </div>
    </Link>
  )
}
