'use client'

import { motion } from 'framer-motion'

export function Section({
  children,
  className,
  heading,
  sub,
}: {
  children: React.ReactNode
  className?: string
  heading?: string
  sub?: string
}) {
  return (
    <section className={`py-14 md:py-20 ${className ?? ''}`}>
      <div className="container mx-auto">
        {heading && (
          <div className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold">{heading}</h2>
            {sub && <p className="mt-2 text-zinc-400 max-w-2xl">{sub}</p>}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
