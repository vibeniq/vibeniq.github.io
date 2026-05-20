'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const valueItems = [
    {
      title: 'Reliability',
      icon: '⚡',
      description: 'Systems engineered for consistency and high availability under demanding conditions.',
    },
    {
      title: 'Scalability',
      icon: '📈',
      description: 'Architectures built to grow with your business, handling 10x traffic without redesign.',
    },
    {
      title: 'Partnership',
      icon: '🤝',
      description: 'Long-term collaboration built on trust, transparency, and shared success metrics.',
    },
  ];

  return (
    <section id="about" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(32, 180, 160, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(32, 180, 160, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(32, 180, 160, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Scroll Animation */}
        <motion.div
          style={{ opacity, scale, rotateZ }}
          className="text-center mb-24"
        >
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-6xl md:text-7xl font-bold text-balance mb-6"
          >
            About <span className="text-primary">Vibeniq</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance"
          >
            We combine engineering discipline with product sensibility to build systems that scale.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
        >
          {/* Story Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(32, 180, 160, 0.15)' }}
              className="h-full p-8 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-5xl mb-6"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-foreground/70 leading-relaxed">
                Founded by engineers and product builders who believe enterprise software can be elegant and reliable. We help companies modernize their digital platforms with conviction and care.
              </p>
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(32, 180, 160, 0.15)' }}
              className="h-full p-8 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                className="text-5xl mb-6"
              >
                🎯
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                Be the trusted engineering partner for enterprises transforming digitally. We measure success by the reliability and impact of systems we build together.
              </p>
            </motion.div>
          </motion.div>

          {/* Expertise Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(32, 180, 160, 0.15)' }}
              className="h-full p-8 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                className="text-5xl mb-6"
              >
                💡
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Core Expertise</h3>
              <ul className="space-y-3">
                {[
                  'Scalable backends',
                  'Cloud architectures',
                  'AI integration',
                  'DevOps & SRE',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 8 }}
                    className="text-foreground/70 flex items-center gap-3 font-medium"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                      className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          >
            Our Core <span className="text-primary">Values</span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {valueItems.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="relative group"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId={`value-bg-${idx}`}
                />

                {/* Card Content */}
                <div className="relative p-10 rounded-2xl border border-primary/40 bg-white/50 backdrop-blur-sm h-full">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                    className="text-6xl mb-6"
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>

                  {/* Animated Bottom Border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
