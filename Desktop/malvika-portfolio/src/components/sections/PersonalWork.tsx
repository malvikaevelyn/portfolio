import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backgrounds from '../../config/backgrounds';

// Images are provided via props (loaded server-side in page getStaticProps)
const PersonalWork: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Non-destructive reorder: if '6' and '10' exist as numeric basenames (e.g. "6.png", "10.png"),
  // move the image named "10" to immediately follow the image named "6". This preserves all other
  // filenames and is safe when those files aren't present.
  const orderedImages = useMemo(() => {
    if (!images || images.length === 0) return images;
    const imgs = [...images];

    const findIndexByBasename = (n: string) =>
      imgs.findIndex((src) => {
        const base = (src || '').split('/').pop() || '';
        const nameOnly = base.replace(/\.[^/.]+$/, '').toLowerCase();
        return nameOnly === n;
      });

    const idx6 = findIndexByBasename('6');
    const idx10 = findIndexByBasename('10');

    if (idx6 !== -1 && idx10 !== -1 && idx10 !== idx6 + 1) {
      const [img10] = imgs.splice(idx10, 1);
      // place after idx6 (note: idx6 could shift if idx10 < idx6)
      const targetIndex = idx10 < idx6 ? idx6 : idx6 + 1;
      imgs.splice(targetIndex, 0, img10);
    }

    return imgs;
  }, [images]);

  return (
    <div className="text-black px-2 py-4 sm:p-8" style={{ backgroundColor: backgrounds.default.color }}>
      <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-center">Personal Work</h1>
      <div className="masonry-grid">
        {orderedImages.length === 0 ? (
          <p className="text-center text-gray-600">No personal work images found. Add images to /public/assets/personal-work</p>
        ) : (
          orderedImages.map((src, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }} className={`masonry-item masonry-item-${(index % 5) + 1}`}>
              <div className="rounded-lg cursor-pointer shadow-lg overflow-hidden">
                <img
                  src={src}
                  alt={`Personal Work ${index + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            </motion.div>
          ))
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>
              <div style={{ position: 'relative' }}>
                <motion.div
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.85 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: 'calc(100vw - 48px)',
                    maxHeight: 'calc(100vh - 48px)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    background: 'transparent',
                  }}
                >
                  <img
                    src={selectedImage as string}
                    alt="Selected Personal Work"
                    style={{
                      maxWidth: 'calc(100vw - 48px)',
                      maxHeight: 'calc(100vh - 48px)',
                      width: 'auto',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </motion.div>

                <button
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    color: 'white',
                    fontSize: '1.25rem',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px 8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.25)'
                  }}
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalWork;
