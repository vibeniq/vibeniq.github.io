'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Brain,
  Smartphone,
  ShoppingCart,
  Cloud,
  Users,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    Icon: Building2,
    title: 'Enterprise Systems',
    description:
      'Configurable ERP, CRM, and HRM platforms for finance, supply chain, payroll, and operations.',
    features: ['ERP & Finance', 'CRM & Sales', 'HRM & Payroll'],
  },
  {
    Icon: Brain,
    title: 'AI & Automation',
    description:
      'Conversational assistants, recommendation engines, and business process automation.',
    features: ['AI Chatbots', 'Recommendation Engines', 'Process Automation'],
  },
  {
    Icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native and cross-platform apps for Android and iOS with production-grade performance.',
    features: ['iOS & Android', 'React Native', 'Progressive Web Apps'],
  },
  {
    Icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Scalable storefronts and marketplaces built to convert and to grow with demand.',
    features: ['Storefronts', 'Marketplaces', 'Payments & Checkout'],
  },
  {
    Icon: Cloud,
    title: 'DevOps & Cloud Native',
    description:
      'Docker, Kubernetes, CI/CD, monitoring, and cloud operations for reliable delivery.',
    features: ['Kubernetes & CI/CD', 'Observability', 'Cloud Operations'],
  },
  {
    Icon: Users,
    title: 'On-demand Software',
    description:
      'Bespoke solutions tailored to your business — from architecture to long-term operation.',
    features: ['Custom Software', 'Architecture Design', 'Technical Consulting'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-26 md:py-32">
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
            What we do
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
            <span className="gradient-text">Services</span> for every scale
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">
            End-to-end product and platform engineering — from first line of code to
            production operations.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ Icon, title, description, features }) => (
            <motion.div key={title} variants={cardVariants} className="group">
              <div className="shell h-full transition-transform duration-200 group-hover:-translate-y-1">
                <div className="shell-inner shell-glass flex h-full flex-col gap-5 p-6 transition-colors duration-200 group-hover:bg-background/40">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#34d399]/10 transition-colors duration-200 group-hover:bg-[#34d399]/15">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <ul className="mt-auto flex flex-col gap-2 border-t border-[color:var(--hairline)] pt-4">
                    {features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2.5 text-[13px] text-foreground/80"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
