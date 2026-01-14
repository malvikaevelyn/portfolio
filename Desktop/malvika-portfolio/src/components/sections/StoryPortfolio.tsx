import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backgrounds from '../../config/backgrounds';
import { Project } from '../../lib/projects';

const StoryPortfolio: React.FC<{ projects: Project[] }> = ({ projects }) => {
  // Helper to normalize various YouTube URL formats into an embed URL
  const getYouTubeEmbed = (url?: string) => {
    if (!url) return '';
    const u = url.trim();
    try {
      // If already an embed URL, return as-is
      if (/youtube\.com\/embed\//.test(u)) return u;

      // Try URL parsing to handle youtu.be and youtube.com with search params
      const parsed = new URL(u);
      const host = parsed.hostname.toLowerCase();

      // youtu.be short link -> pathname is '/VIDEOID'
      if (host.includes('youtu.be')) {
        const id = parsed.pathname.replace(/^\//, '');
        if (id) return `https://www.youtube.com/embed/${id}`;
      }

      // youtube.com with v= query param
      if (host.includes('youtube.com')) {
        const v = parsed.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}`;
      }
    } catch (e) {
      // fall through to regex fallback
    }

    // Regex fallback for various patterns
    const match = u.match(/(?:v=|\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{7,20})/);
    if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}`;

    // If nothing matched, return the original string (may fail to embed but preserves value)
    return u;
  };

  return (
    <div
      className="text-black px-2 py-4 sm:p-8"
      style={{ backgroundColor: backgrounds.default.color }}
    >
      <h1 className="text-2xl sm:text-4xl font-heading font-bold mb-4 sm:mb-6">Films</h1>
      {projects.filter(p => p.id !== 'smash-guys-reel').map((project) => (
        <section key={project.id} className="mb-12 sm:mb-20 md:mb-32">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-heading font-bold mb-2 sm:mb-3 text-center">{project.title}</h2>
          <div className="max-w-full sm:max-w-6xl mx-auto text-center">
            <p className="text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg">{project.description}</p>
            {/* Media block: prefer local video, then Instagram embed, then YouTube, then uploaded video/audio */}
            <div className="mb-4">
              {('video' in project && project.video) ? (
                <div className="w-full sm:max-w-6xl mx-auto">
                  <div className="overflow-hidden w-full rounded bg-black" style={{ aspectRatio: '16/9', maxHeight: '50vh' }}>
                    <video
                      controls
                      src={(project as any).video}
                      className="w-full h-full object-contain"
                      playsInline
                    />
                  </div>
                  {project.instagram && (
                    <div className="mt-3 flex justify-center">
                      <a
                        href={project.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-gold px-3 py-2 sm:px-4 sm:py-2 rounded shadow hover:opacity-90 text-sm sm:text-base"
                      >
                        Open in Instagram
                      </a>
                    </div>
                  )}
                </div>
              ) : project.instagram ? (
                <div className="w-full sm:max-w-6xl mx-auto">
                  <div className="overflow-hidden w-full rounded" style={{ aspectRatio: '16/9', maxHeight: '50vh' }}>
                    <iframe
                      title={`${project.title} instagram`}
                      src={project.instagram.replace(/\/$/, '') + 'embed/'}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded"
                    />
                  </div>
                </div>
              ) : project.youtube ? (
                <div className="w-full sm:max-w-6xl mx-auto">
                  <div className="overflow-hidden w-full rounded" style={{ aspectRatio: '16/9', maxHeight: '50vh' }}>
                    <iframe
                      title={`${project.title} video`}
                      src={
                        (project as any).id === 'raincheck' && typeof project.youtube === 'string' && project.youtube.includes('AfG-sr6l6lw')
                          ? 'https://www.youtube-nocookie.com/embed/AfG-sr6l6lw'
                          : getYouTubeEmbed(project.youtube)
                      }
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded"
                    />
                  </div>
                </div>
              ) : ('video' in project && (project as any).video) ? (
                <div className="w-full sm:max-w-6xl mx-auto">
                  <div className="overflow-hidden w-full rounded" style={{ aspectRatio: '16/9', maxHeight: '50vh' }}>
                    <video controls src={(project as any).video} className="w-full h-full" />
                  </div>
                </div>
              ) : project.audio ? (
                <audio controls src={project.audio} className="w-full sm:max-w-4xl mx-auto" />
              ) : null}
            </div>
            {/* Slide deck / animatic */}
            <div className="relative w-full rounded-lg shadow-soft flex items-center justify-center">
              {project.slides ? (
                <Carousel images={project.slides} />
              ) : (
                <div className="relative w-full bg-gray-100 rounded-lg shadow-soft flex items-center justify-center">
                  <p className="text-gray-500 text-xs sm:text-base">Slide deck / animatic placeholder — UI to be implemented.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="overflow-hidden w-full rounded" style={{ aspectRatio: '16/9', maxHeight: '80vh' }}>
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain rounded"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:scale-105 transition-transform"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 shadow-md hover:scale-105 transition-transform"
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="flex items-center justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-gold' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryPortfolio;
