'use client';

import { motion } from 'framer-motion';
import { Building2, Brain, Smartphone, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    Icon: Building2,
    title: 'Enterprise Applications',
    description:
      'Comprehensive ERP, CRM, HRM, and E-commerce solutions for streamlined business operations.',
    features: ['ERP Systems', 'CRM Platforms', 'HRM Solutions', 'E-commerce Stores'],
  },
  {
    Icon: Brain,
    title: 'AI Applications',
    description:
      'Intelligent AI solutions and conversational chatbots powered by cutting-edge machine learning.',
    features: ['Machine Learning', 'AI Chatbots', 'Predictive Analytics', 'Neural Networks'],
  },
  {
    Icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile applications with native performance and seamless user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Progressive Web Apps'],
  },
  {
    Icon: Users,
    title: 'Technical Consultancies',
    description:
      'Expert technology consulting services to guide your digital transformation journey.',
    features: [
      'Architecture Design',
      'Technology Strategy',
      'Digital Transformation',
      'Performance Optimization',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Services() {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            <span className="gradient-text">Services</span> for every scale
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            End-to-end product and platform engineering across industries.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map(({ Icon, title, description, features }, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="group relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-8 flex flex-col gap-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8 + idx * 0.3, repeat: Infinity, delay: idx * 0.45 }}
                variants={{ hover: { scale: 1.18, y: -8 } }}
              >
                <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-2">
                {features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <div className="mt-auto pt-2">
                <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
