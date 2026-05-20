'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from './theme-switcher';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor light splash */}
      <motion.div
        className="pointer-events-none fixed w-72 h-72 rounded-full bg-primary/10 blur-3xl z-30"
        animate={{
          x: mousePosition.x - 144,
          y: mousePosition.y - 144,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 25, mass: 0.8 }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              {mounted && (
                <Link href="#" className="flex items-center gap-2">
                  <Image
                    src={currentTheme === 'dark' ? '/logos/logo-dark.png' : '/logos/logo-light.png'}
                    alt="Vibeniq Logo"
                    width={120}
                    height={40}
                    priority
                    className="h-10 w-auto"
                  />
                </Link>
              )}
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden md:flex items-center gap-8"
            >
              {['Home', 'Services', 'About', 'Tech', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-primary transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </motion.nav>

            {/* Theme Switcher and CTA Button */}
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="px-6 py-2 rounded-lg bg-primary text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
