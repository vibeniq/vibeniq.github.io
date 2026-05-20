'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary"
        animate={{
          x: scrollY * 0.5,
          y: scrollY * 0.3,
        }}
      />

      <motion.div
        className="absolute bottom-32 left-10 w-80 h-80 rounded-full blur-3xl opacity-20 bg-accent"
        animate={{
          x: -scrollY * 0.3,
          y: scrollY * 0.5,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="glass-effect px-4 py-2 rounded-full">
              <p className="text-sm font-medium text-primary">Building the future of technology</p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-foreground">
              Enterprise applications, mobile apps and AI systems{' '}
              <span className="text-primary">engineered for scale</span>.
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto text-balance"
          >
            We build reliable digital platforms engineered for scale with modern microservices, cloud-native solutions, and proven engineering practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Our Services
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              Who We Are
            </motion.a>
          </motion.div>

          {/* Feature List */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center pt-12 max-w-3xl mx-auto"
          >
            {[
              'Production-ready Microservices & CI/CD',
              'Cross-platform Mobile Apps',
              'AI & Automation for Business',
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 text-sm md:text-base"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-primary rounded-full" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
}
