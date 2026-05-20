'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const technologies = [
  '.NET',
  'Python',
  'React',
  'MongoDB',
  'MySQL',
  'Docker',
  'Kubernetes',
  'Microservices',
  'GraphQL',
  'AWS',
  'PostgreSQL',
  'Redis',
];

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="tech" className="relative py-24 px-6 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(101, 84, 192, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(101, 84, 192, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(101, 84, 192, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-lg text-foreground/70">
            We ship using proven stacks for reliability and rapid iteration.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => setHoveredTech(idx)}
              onMouseLeave={() => setHoveredTech(null)}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative group"
            >
              <div
                className={`p-6 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                  hoveredTech === idx
                    ? 'bg-gradient-to-br from-primary/30 to-accent/30 border-primary/70 shadow-lg shadow-primary/50'
                    : 'bg-card/50 border-border/50 hover:border-primary/50'
                }`}
              >
                <p className="font-semibold text-lg text-center">{tech}</p>
              </div>

              {/* Glow Effect on Hover */}
              {hoveredTech === idx && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl -z-10"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-foreground/70 text-lg max-w-2xl mx-auto"
        >
          Our tech choices are guided by project requirements, team expertise, and long-term maintainability. We
          embrace polyglot development but maintain consistency in architecture patterns.
        </motion.p>
      </div>
    </section>
  );
}
