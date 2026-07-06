'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building2, Smartphone, Brain } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const capabilities = [
  { Icon: Building2, label: 'Enterprise Systems', tag: 'ERP · CRM · HRM' },
  { Icon: Smartphone, label: 'Mobile Application', tag: 'iOS · Android' },
  { Icon: Brain, label: 'AI & Automation', tag: 'GenAI · Chatbots' },
];

const expertise = [
  { label: 'Backend & APIs', level: 99 },
  { label: 'UI/UX', level: 95 },
  { label: 'AI & Data', level: 95 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-7"
        >
          <motion.div variants={itemVariants}>
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
              <span className="text-[12px] font-medium text-muted-foreground">
                Enterprise engineering, built to scale
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.025em] text-foreground md:text-6xl lg:text-[64px]"
          >
            Enterprise apps, mobile &amp; AI systems{' '}
            <span className="gradient-text">engineered for scale</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Vibeniq designs, builds, and operates production-ready platforms — ERP,
            CRM, HRM, mobile, AI, and cloud-native systems — with modern microservices
            and pragmatic engineering.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#services"
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href="#about" className="btn-secondary px-5 py-3 text-sm">
              Who We Are
            </a>
          </motion.div>
        </motion.div>

        {/* Right — gradient-shell preview panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="shell shell-accent glow-deep">
            <div className="shell-inner shell-glass p-5">
              {/* window chrome */}
              <div className="mb-5 flex items-center justify-between border-b border-[color:var(--hairline)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#06b6d4]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                </div>
                <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                  vibeniq · what we build
                </span>
              </div>

              <div className="space-y-2.5">
                {capabilities.map(({ Icon, label, tag }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.12 }}
                    className="flex items-center justify-between rounded-lg border border-[color:var(--hairline)] bg-[var(--fill-1)] px-3.5 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#34d399]/10">
                        <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                      </span>
                      <span className="text-[13px] font-medium text-foreground/90">{label}</span>
                    </div>
                    <span className="rounded-full bg-[#06b6d4]/10 px-2.5 py-1 text-[11px] font-medium text-secondary">
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* expertise breakdown */}
              <div className="mt-5 rounded-lg border border-[color:var(--hairline)] bg-[var(--fill-1)] p-4">
                <div className="mb-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Core expertise
                </div>
                <div className="space-y-3">
                  {expertise.map(({ label, level }, i) => (
                    <div key={label}>
                      <div className="mb-1.5 flex items-center justify-between text-[12px]">
                        <span className="text-foreground/80">{label}</span>
                        <span className="text-primary">{level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--fill-2)]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 0.8, delay: 0.9 + i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-[#06b6d4] to-[#34d399]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* floating brand badge — links to contact */}
          <a
            href="#contact"
            aria-label="Start a project with Vibeniq"
            title="Start a project"
            className="animate-float glow-cyan group absolute -bottom-14 -left-6 hidden h-20 w-20 flex-col items-center justify-center gap-0.5 rounded-2xl border border-[color:var(--hairline)] bg-background/90 backdrop-blur-xl transition-colors duration-150 hover:border-[#06b6d4]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4]/60 sm:flex"
          >
            <span className="gradient-text text-xl font-semibold leading-none">V</span>
            <span className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground transition-colors duration-150 group-hover:text-secondary">
              Let&apos;s talk
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
