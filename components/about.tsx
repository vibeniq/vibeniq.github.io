'use client';

import React from 'react';
import { motion, type Transition } from 'framer-motion';
import { Rocket, Target, Lightbulb, Zap, TrendingUp, Handshake } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

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
    description: 'Systems engineered for consistency and high availability under demanding conditions.',
    idleAnimate: { scale: [1, 1.2, 0.95, 1], opacity: [1, 0.55, 1, 1] },
    idleTransition: { duration: 1.6, repeat: Infinity, delay: 0 },
  },
  {
    Icon: TrendingUp,
    title: 'Scalability',
    description: 'Architectures built to grow with your business, handling 10x traffic without redesign.',
    idleAnimate: { y: [0, -6, 0] },
    idleTransition: { duration: 2.6, repeat: Infinity, delay: 0.4 },
  },
  {
    Icon: Handshake,
    title: 'Partnership',
    description: 'Long-term collaboration built on trust, transparency, and shared success metrics.',
    idleAnimate: { rotate: [-6, 6, -6] },
    idleTransition: { duration: 2, repeat: Infinity, delay: 0.8 },
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-balance mb-6">
            About <span className="text-primary">Vibeniq</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
            We combine engineering discipline with product sensibility to build systems that scale.
          </p>
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
              whileHover="hover"
              className="h-full p-8 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm transition-all duration-300"
              style={{ boxShadow: undefined }}
              variants={{ hover: { y: -8, boxShadow: '0 20px 40px rgba(32, 180, 160, 0.15)' } }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                variants={{ hover: { scale: 1.18 } }}
              >
                <Rocket className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-foreground/70 leading-relaxed">
                Founded by engineers and product builders who believe enterprise software can be
                elegant and reliable. We help companies modernize their digital platforms with
                conviction and care.
              </p>
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover="hover"
              className="h-full p-8 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm transition-all duration-300"
              variants={{ hover: { y: -8, boxShadow: '0 20px 40px rgba(32, 180, 160, 0.15)' } }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                variants={{ hover: { scale: 1.18, rotate: 180 } }}
              >
                <Target className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                Be the trusted engineering partner for enterprises transforming digitally. We measure
                success by the reliability and impact of systems we build together.
              </p>
            </motion.div>
          </motion.div>

          {/* Expertise Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover="hover"
              className="h-full p-8 rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm transition-all duration-300"
              variants={{ hover: { y: -8, boxShadow: '0 20px 40px rgba(32, 180, 160, 0.15)' } }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                variants={{ hover: { scale: 1.18, opacity: 1 } }}
              >
                <Lightbulb className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Core Expertise</h3>
              <ul className="space-y-3">
                {['Scalable backends', 'Cloud architectures', 'AI integration', 'DevOps & SRE'].map(
                  (item, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 8 }}
                      className="text-foreground/70 flex items-center gap-3 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
            {valueItems.map(({ Icon, title, description, idleAnimate, idleTransition }, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative p-10 rounded-2xl border border-primary/40 bg-card/80 backdrop-blur-sm h-full">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                    animate={idleAnimate}
                    transition={idleTransition}
                    variants={{ hover: { scale: 1.18 } }}
                  >
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-3">{title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{description}</p>

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
        </div>
      </div>
    </section>
  );
}
