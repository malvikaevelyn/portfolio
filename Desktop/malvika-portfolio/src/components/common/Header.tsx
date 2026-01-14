import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const MotionHeader = motion.header;

const Header: React.FC = () => {
  const controls = useAnimation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // subtle blue glow values used during motion
  const blueGlow = 'drop-shadow(0px 10px 24px rgba(64,158,255,0.14))';
  const blueGlowStrong = 'drop-shadow(0px 14px 34px rgba(64,158,255,0.22))';

  // hover wiggle sequence
  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    controls.start({
      rotate: [0, -8, 6, -4, 0],
      filter: ['none', blueGlow, blueGlow, 'none', 'none'],
      transition: { duration: 0.9 },
    });
  };

  // clear glow when leaving or blurring
  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    controls.start({ filter: 'none', transition: { duration: 0.25 } });
  };

  // click twirl (slightly slower for smoother appearance) with stronger glow
  const handleClick = () => {
    if (prefersReducedMotion) return;
    controls
      .start({ rotate: 360, scale: [1, 1.06, 1], filter: [blueGlowStrong, blueGlowStrong, 'none'], transition: { duration: 1.1, ease: 'easeInOut' } })
      .then(() => controls.set({ rotate: 0, filter: 'none' }));
  };

  return (
    <MotionHeader
      className="bg-black sticky top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 font-heading" style={{ minHeight: 80 }}>
        <Link
          href="/"
          className="text-xl font-bold text-gold hover:scale-105 transition-transform duration-300 pb-0"
        >
          Malvika&apos;s Portfolio
        </Link>
        {/* Hamburger menu for mobile only */}
        <div className="sm:hidden flex items-center">
          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block w-6 h-0.5 bg-gold mb-1"></span>
            <span className="block w-6 h-0.5 bg-gold mb-1"></span>
            <span className="block w-6 h-0.5 bg-gold"></span>
          </button>
        </div>
        {/* Nav links: always row on desktop, vertical toggle only on mobile */}
        <div
          className={`hidden sm:flex flex-row items-center space-x-6 pb-0 ml-6`}
        >
          <Link href="/demo-reel" className="text-gold hover:scale-105 transition-transform duration-300">
            Demo Reel
          </Link>
          <Link href="/commercial-work" className="text-gold hover:scale-105 transition-transform duration-300">
            Commercial Work
          </Link>
          <Link href="/story-portfolio" className="text-gold hover:scale-105 transition-transform duration-300">
            Films
          </Link>
          <Link href="/personal-work" className="text-gold hover:scale-105 transition-transform duration-300">
            Personal Work
          </Link>
          <Link href="/about" className="text-gold hover:scale-105 transition-transform duration-300">
            About
          </Link>
          <motion.img
            src="/assets/header-cat.png"
            alt="cat"
            className="h-16 w-auto object-contain ml-6 cursor-pointer origin-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-opacity-40"
            role="button"
            tabIndex={0}
            aria-label="Header mascot"
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onFocus={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onBlur={handleMouseLeave}
            onClick={handleClick}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } }}
          />
        </div>
        {/* Mobile nav links: vertical, toggled by hamburger */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start space-y-2 px-6 py-4 sm:hidden z-50 shadow-lg">
            <Link href="/demo-reel" className="text-gold py-1" onClick={() => setMenuOpen(false)}>
              Demo Reel
            </Link>
            <Link href="/commercial-work" className="text-gold py-1" onClick={() => setMenuOpen(false)}>
              Commercial Work
            </Link>
            <Link href="/story-portfolio" className="text-gold py-1" onClick={() => setMenuOpen(false)}>
              Films
            </Link>
            <Link href="/personal-work" className="text-gold py-1" onClick={() => setMenuOpen(false)}>
              Personal Work
            </Link>
            <Link href="/about" className="text-gold py-1" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <motion.img
              src="/assets/header-cat.png"
              alt="cat"
              className="h-14 w-auto object-contain mt-2 cursor-pointer origin-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-opacity-40"
              role="button"
              tabIndex={0}
              aria-label="Header mascot"
              animate={controls}
              onMouseEnter={handleMouseEnter}
              onFocus={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onBlur={handleMouseLeave}
              onClick={handleClick}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } }}
            />
          </div>
        )}
      </nav>
    </MotionHeader>
  );
};

export default Header;
