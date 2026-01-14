import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import backgrounds from '../../config/backgrounds';

const DemoReel: React.FC = () => {
  // YouTube link provided by user
  const youtube = 'https://www.youtube.com/watch?v=VwNWJK_wNGA';
  const [showWithFade, setShowWithFade] = useState(false);

  useEffect(() => {
    // Detect query param ?explore=1 to show fade when coming from landing Explore
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('explore') === '1') setShowWithFade(true);
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <motion.div
      className="text-black px-2 py-4 sm:p-8 flex items-center justify-center"
      initial={showWithFade ? { opacity: 0 } : undefined}
      animate={showWithFade ? { opacity: 1 } : undefined}
      transition={showWithFade ? { duration: 1 } : undefined}
      style={{ backgroundColor: backgrounds.default.color, minHeight: '100vh' }}
    >
      <div className="w-full max-w-full sm:max-w-[90vw]">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold mb-2 sm:mb-4 text-center">Demo Reel</h1>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-700 max-w-full sm:max-w-3xl mx-auto text-center">
          A short compilation of my composited and animated work over the past year. Featuring shots from my
          student films  No Saints Left and Raincheck  and a commercial I made for Smash Guys Burger Kitchen in
          Bangalore.
        </p>
        <div className="flex flex-col items-center">
          <div className="w-full" style={{ aspectRatio: '16/9', maxHeight: '60vh' }}>
            <iframe
              title="Demo Reel"
              src={youtube.replace('watch?v=', 'embed/') + '?rel=0&showinfo=0'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DemoReel;
