'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const services = [
  {
    icon: '⚙️',
    title: 'Custom ERP',
    description: 'Complex business processes implemented as configurable enterprise systems for finance, supply-chain, inventory and operations.',
  },
  {
    icon: '🧾',
    title: 'HRM Solutions',
    description: 'Modern HRM for payroll, attendance, onboarding and performance — tailored for your culture and scale.',
  },
  {
    icon: '🤝',
    title: 'CRM & Sales Platforms',
    description: 'Customer lifecycle management, sales automation, and reporting to increase revenue and retention.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile development with performance, security and delightful UX.',
  },
  {
    icon: '🤖',
    title: 'AI & Chatbots',
    description: 'Conversational assistants, recommendation engines and automation systems using modern ML tooling.',
  },
  {
    icon: '🛒',
    title: 'E-commerce Platforms',
    description: 'Scalable storefronts and marketplaces with payment, inventory sync, and analytics.',
  },
  {
    icon: '🧩',
    title: 'Custom Software',
    description: 'Domain-driven solutions built to integrate, adapt and grow with your business needs.',
  },
  {
    icon: '🚀',
    title: 'DevOps & Cloud',
    description: 'Docker, Kubernetes, CI/CD pipelines, monitoring, SRE and cost-aware cloud operations.',
  },
];

export function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const moveY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(101, 84, 192, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(101, 84, 192, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(101, 84, 192, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(101, 84, 192, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="gradient-text">Services</span> for every scale
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            End-to-end product and platform engineering across industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{ y: moveY }}
              className="relative group"
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  hoveredIdx === idx
                    ? 'bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg shadow-primary/50'
                    : 'bg-card/50'
                }`}
              />

              {/* Card Content */}
              <div className="relative p-8 rounded-xl border border-border/50 backdrop-blur-sm h-full flex flex-col">
                <motion.div
                  animate={{ scale: hoveredIdx === idx ? 1.1 : 1 }}
                  className="text-4xl mb-4"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-balance">{service.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-grow">{service.description}</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIdx === idx ? 1 : 0 }}
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm"
                >
                  Learn more <span>→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
