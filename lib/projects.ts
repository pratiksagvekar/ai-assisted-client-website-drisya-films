export type Project = {
  slug: string
  title: string
  category: 'Brand' | 'Event' | 'Creator'
  youtubeId: string
  thumbnail: string
  description: string
}

export const projects: Project[] = [
  {
    slug: 'luxe-brand-film',
    title: 'Luxury Apparel Film',
    category: 'Brand',
    youtubeId: 'f5pCFTT5q4Q',
    thumbnail: 'https://img.youtube.com/vi/f5pCFTT5q4Q/maxresdefault.jpg',
    description: 'A cinematic fashion film crafted for a luxury apparel brand.',
  },
  {
    slug: 'grand-opening',
    title: 'Corporate Launch Film',
    category: 'Event',
    youtubeId: 'wSP-RVXdrCc',
    thumbnail: 'https://img.youtube.com/vi/wSP-RVXdrCc/maxresdefault.jpg',
    description: 'A polished corporate launch edit designed for brand credibility.',
  },
  {
    slug: 'editorial-reel',
    title: 'Cocktail Bar Editorial',
    category: 'Creator',
    youtubeId: 'DhFmtng3jOY',
    thumbnail: 'https://img.youtube.com/vi/DhFmtng3jOY/maxresdefault.jpg',
    description: 'Editorial-style visuals capturing the vibe and atmosphere of a cocktail bar.',
  },
  {
    slug: 'product-spotlight',
    title: 'Fashion Product Spotlight',
    category: 'Brand',
    youtubeId: 'ydeMI8ss4mo',
    thumbnail: 'https://img.youtube.com/vi/ydeMI8ss4mo/maxresdefault.jpg',
    description: 'Product-focused visuals highlighting design, texture, and detailing.',
  },
  {
    slug: 'summit-recap',
    title: 'Padel Project Aftermovie',
    category: 'Event',
    youtubeId: 'wSP-RVXdrCc',
    thumbnail: 'https://img.youtube.com/vi/wSP-RVXdrCc/maxresdefault.jpg',
    description: 'High-energy aftermovie covering the Padel Project event at Powai.',
  },
  {
    slug: 'founder-profile',
    title: 'Founder Profile Reel',
    category: 'Creator',
    youtubeId: 'tBkVQh9AsvM',
    thumbnail: 'https://img.youtube.com/vi/tBkVQh9AsvM/maxresdefault.jpg',
    description: 'Personal brand reel highlighting the founder’s presence and vision.',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
