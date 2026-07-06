'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const technologies = [
  '.NET',
  'Python',
  'React',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'Microservices',
  'GraphQL',
  'AWS',
  'Redis',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function TechStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="tech" className="relative overflow-hidden py-26 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[var(--fill-2)] px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-secondary">
            Technology
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">
            We ship on proven stacks for reliability and rapid iteration.
          </p>
        </motion.div>

        {/* Grid of glass tiles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech}
              variants={itemVariants}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
            >
              <div
                className={`flex items-center justify-center rounded-xl border px-4 py-6 text-center transition-all duration-200 ${
                  hovered === idx
                    ? 'glow-cyan border-[#06b6d4]/50 bg-[#06b6d4]/[0.06]'
                    : 'border-[color:var(--hairline)] bg-[var(--fill-1)] hover:border-[color:var(--hairline-strong)]'
                }`}
              >
                <span className="text-sm font-semibold text-foreground/90">{tech}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground"
        >
          Our tech choices are guided by project requirements, team expertise, and
          long-term maintainability. We embrace polyglot development while keeping
          architecture patterns consistent.
        </motion.p>
      </div>
    </section>
  );
}
