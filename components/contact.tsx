'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';

const socials = [
  {
    title: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    title: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z',
  },
  {
    title: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const inputClass =
  'w-full rounded-md border border-[color:var(--hairline)] bg-[var(--fill-1)] px-4 py-3 text-sm text-foreground transition-colors duration-150 placeholder:text-muted-foreground/50 focus:border-[#06b6d4]/50 focus:outline-none focus:ring-1 focus:ring-[#06b6d4]/40';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-26 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[var(--fill-2)] px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-secondary">
              Contact
            </span>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
              Let&apos;s <span className="gradient-text">discuss</span> your project
            </h2>
            <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">
              Whether you&apos;re just getting started or scaling an existing platform,
              we&apos;re here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Info column */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5">
              {[
                {
                  Icon: MapPin,
                  title: 'Head Office',
                  body: 'Dhaka, Bangladesh — remote-first, and we travel for customers.',
                },
                {
                  Icon: Mail,
                  title: 'Get in Touch',
                  body: 'Email us or use the form. We respond within 24 hours for customers.',
                },
                {
                  Icon: Clock,
                  title: 'Working Hours',
                  body: 'Sun–Thu, 9:00–18:00 (GMT+6). Async collaboration across time zones.',
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="shell">
                  <div className="shell-inner shell-glass flex items-start gap-4 p-5">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#34d399]/10">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-1">
                {socials.map((s) => (
                  <motion.a
                    key={s.title}
                    href="#"
                    whileHover={{ y: -3 }}
                    title={s.title}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--hairline)] bg-[var(--fill-1)] text-muted-foreground transition-colors duration-150 hover:border-[#06b6d4]/50 hover:text-secondary"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form column — accent shell */}
            <motion.div variants={itemVariants}>
              <div className="shell shell-accent glow-deep h-full">
                <form
                  onSubmit={handleSubmit}
                  className="shell-inner shell-glass flex h-full flex-col gap-5 p-7 md:p-9"
                >
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium">Your name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium">Email address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium">Message</label>
                    <textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="btn-primary mt-auto w-full py-3.5 text-sm"
                  >
                    {submitted ? 'Message Sent ✓' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
