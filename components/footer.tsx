'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Enterprise Systems', href: '#services' },
      { label: 'AI & Automation', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Cloud Native', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Technology', href: '#tech' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[color:var(--hairline)] bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-10 md:grid-cols-4"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logos/logo-light.png"
              alt="Vibeniq"
              width={120}
              height={40}
              className="h-9 w-auto dark:hidden"
            />
            <Image
              src="/logos/logo-dark.png"
              alt="Vibeniq"
              width={120}
              height={40}
              className="hidden h-9 w-auto dark:block"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building reliable digital platforms for enterprises at scale.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Vibeniq. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.title}
                href="#"
                whileHover={{ y: -2 }}
                title={s.title}
                className="text-muted-foreground transition-colors duration-150 hover:text-secondary"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
