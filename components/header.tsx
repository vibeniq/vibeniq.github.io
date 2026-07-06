'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeSwitcher } from './theme-switcher';

const navItems = ['Home', 'Services', 'About', 'Tech', 'Contact'];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor light splash (cyan) */}
      <motion.div
        className="pointer-events-none fixed z-30 h-72 w-72 rounded-full bg-[#06b6d4]/10 blur-3xl"
        animate={{ x: mousePosition.x - 144, y: mousePosition.y - 144 }}
        transition={{ type: 'spring', stiffness: 80, damping: 25, mass: 0.8 }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[color:var(--hairline)] bg-background/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="#home" className="flex items-center gap-2">
                {/* light mode: dark wordmark; dark mode: light wordmark */}
                <Image
                  src="/logos/logo-light.png"
                  alt="Vibeniq"
                  width={120}
                  height={40}
                  priority
                  className="h-9 w-auto dark:hidden"
                />
                <Image
                  src="/logos/logo-dark.png"
                  alt="Vibeniq"
                  width={120}
                  height={40}
                  priority
                  className="hidden h-9 w-auto dark:block"
                />
              </Link>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden items-center gap-8 md:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {item}
                </Link>
              ))}
            </motion.nav>

            {/* Theme toggle + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2"
            >
              <ThemeSwitcher />
              <a href="#contact" className="btn-primary px-4 py-2 text-[13px]">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
}
