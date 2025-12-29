'use client'


import Link from 'next/link'
import { motion } from 'framer-motion'
import { WA_LINK } from '@/lib/constants'

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const link = href ?? WA_LINK
  const base = 'inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded border transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-gold text-black border-gold hover:bg-transparent hover:text-gold'
      : 'border-gold text-gold hover:bg-gold hover:text-black'

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
      <Link href={link} target="_blank" rel="noopener" className={`${base} ${styles} ${className ?? ''}`}>
        {children}
      </Link>
    </motion.div>
  )
}
