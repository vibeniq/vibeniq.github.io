'use client';

import React from 'react';
import { motion, type Transition } from 'framer-motion';
import { Rocket, Target, Lightbulb, Zap, TrendingUp, Handshake } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const pillars = [
  {
    Icon: Rocket,
    title: 'Our Story',
    body: 'Founded by engineers and product builders who believe enterprise software can be elegant and reliable. We help companies modernize their digital platforms with conviction and care.',
  },
  {
    Icon: Target,
    title: 'Our Mission',
    body: 'Deliver secure, maintainable, and scalable solutions using best-of-breed technologies and pragmatic engineering — measured by the reliability of what we ship together.',
  },
  {
    Icon: Lightbulb,
    title: 'Core Expertise',
    body: 'Deep experience across scalable backends, cloud-native architectures, AI integration, and DevOps & SRE — the engineering foundations that keep production systems fast, secure, and resilient at scale.',
  },
];

type ValueItem = {
  Icon: React.ElementType;
  title: string;
  description: string;
  idleAnimate: Record<string, number[]>;
  idleTransition: Transition;
};

const valueItems: ValueItem[] = [
  {
    Icon: Zap,
    title: 'Reliability',
    description:
      'Systems engineered for consistency and high availability under demanding conditions.',
    idleAnimate: { scale: [1, 1.15, 1], opacity: [1, 0.7, 1] },
    idleTransition: { duration: 2, repeat: Infinity, delay: 0 },
  },
  {
    Icon: TrendingUp,
    title: 'Scalability',
    description:
      'Architectures built to grow with your business, handling 10x traffic without redesign.',
    idleAnimate: { y: [0, -6, 0] },
    idleTransition: { duration: 3, repeat: Infinity, delay: 0.4 },
  },
  {
    Icon: Handshake,
    title: 'Partnership',
    description:
      'Long-term collaboration built on trust, transparency, and shared success metrics.',
    idleAnimate: { rotate: [-5, 5, -5] },
    idleTransition: { duration: 3, repeat: Infinity, delay: 0.8 },
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-26 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[var(--fill-2)] px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-secondary">
            About
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
            About <span className="gradient-text">Vibeniq</span>
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">
            We combine engineering discipline with product sensibility to build systems
            that scale.
          </p>
        </motion.div>

        {/* Story / Mission / Expertise */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {pillars.map(({ Icon, title, body }) => (
            <motion.div key={title} variants={itemVariants} className="group">
              <div className="shell h-full transition-transform duration-200 group-hover:-translate-y-1">
                <div className="shell-inner shell-glass h-full p-7">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#34d399]/10">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </span>
                  <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-semibold tracking-[-0.025em] md:text-4xl"
        >
          Our Core <span className="gradient-text">Values</span>
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {valueItems.map(({ Icon, title, description, idleAnimate, idleTransition }) => (
            <motion.div key={title} variants={itemVariants} className="group">
              <div className="shell h-full transition-transform duration-200 group-hover:-translate-y-1">
                <div className="shell-inner shell-glass relative h-full overflow-hidden p-8">
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#34d399]/10"
                    animate={idleAnimate}
                    transition={idleTransition}
                  >
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="mb-3 text-xl font-semibold">{title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
