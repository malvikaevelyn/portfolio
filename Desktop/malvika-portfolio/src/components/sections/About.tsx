import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import backgrounds from '../../config/backgrounds';

const About: React.FC = () => {
  return (
    <div className="text-black px-2 py-4 sm:p-8" style={{ backgroundColor: backgrounds.default.color }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: image slot */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg rounded overflow-hidden shadow-lg bg-white">
            {/* replace /assets/about.png with the real image */}
            <img src="/assets/about/about.png" alt="About" className="w-full h-80 object-cover rounded-[25px]" />
          </div>
        </div>

        {/* Right: title, description, socials */}
        <div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">About</h1>
          <p className="mb-6 leading-relaxed">
            Hi! I’m Malvika Evelyn, a Compositor and Visual Development artist.
            I recently graduated from the Animation program at Srishti Manipal Institute of Art, Design and
            Technology. I’ve always been inspired by nature and all things green, and you’ll often find those
            influences woven through my work.
            Colour is one of my biggest strengths; I love studying how it behaves in everyday life and using
            it to create mood and emotion in my pieces. Beyond art, I find inspiration in reading and music,
            both of which often feed into my creative process. I also enjoy running, it’s my way of thinking,
            unwinding, and finding new ideas.
          </p>

          <div className="mb-6">
            <p className="font-heading font-semibold">Malvika Evelyn Bhaskar</p>
            <p className="text-sm text-gray-700">Bangalore, India</p>
          </div>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                href="https://www.instagram.com/malvikaevelyn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 text-2xl flex items-center gap-2"
              >
                <FaInstagram />
                <span className="text-sm text-gray-800">@malvikaevelyn</span>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="mailto:malvikaevelyn@gmail.com" className="text-gold text-2xl flex items-center gap-2">
                <FaEnvelope />
                <span className="text-sm text-gray-800">malvikaevelyn@gmail.com</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
