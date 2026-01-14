import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import backgrounds from '../../config/backgrounds';

const MotionDiv = motion(forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div ref={ref} {...props} />
)));

const MotionButton = motion(forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => (
  <button ref={ref} {...props} />
)));

const Landing: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleExploreClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      router.push('/demo-reel?explore=1');
    }, 1000); // 1-second fade duration
  };

  return (
    <MotionDiv
      style={{ backgroundImage: `url('/assets/landing/landing-bg.png')`, backgroundColor: backgrounds.landing.color, opacity: isClicked ? 0 : 1 }}
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden px-2 sm:px-0"
      initial={{ opacity: 1 }}
      animate={{ opacity: isClicked ? 0 : 1 }}
      transition={{ duration: 1 }} // Faster 1-second fade
    >
      {/* slight dim overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold uppercase tracking-wide text-white">
          MALVIKA EVELYN
        </h1>
        <div className="mt-8 sm:mt-10">
          <MotionButton
            onClick={handleExploreClick}
            className="px-6 sm:px-8 py-2 sm:py-3 border border-white text-white bg-transparent font-bold rounded-lg hover:bg-white/10 transition duration-200 text-base sm:text-lg"
            whileTap={{ scale: 0.98 }}
          >
            Explore
          </MotionButton>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Landing;
