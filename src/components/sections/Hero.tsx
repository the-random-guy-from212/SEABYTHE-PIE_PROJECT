import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // For parallax scrolling effect
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Video reference and loading state
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // For animated gradient text
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  
  // Throttle function for mouse move to improve performance
  const throttle = (callback, delay) => {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      callback(...args);
    };
  };
  
  // Handle video loading and playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleCanPlay = () => {
      video.play().catch(error => {
        console.error("Video play failed:", error);
      });
    };
    
    const handleLoadedData = () => {
      setVideoLoaded(true);
      video.play().catch(error => {
        console.error("Video play failed:", error);
      });
    };
    
    // Try to play video as soon as possible
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    
    // Force play attempt (for Safari)
    const safariPlayTimeout = setTimeout(() => {
      if (video.paused) {
        video.play().catch(e => console.error("Delayed play failed:", e));
      }
    }, 1000);
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      clearTimeout(safariPlayTimeout);
    };
  }, []);
  
  // Mouse tracking for interactive elements with throttling
  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      // Calculate relative position for gradient movement
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGradientPosition({ x, y });
    }, 50); // 50ms throttle
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants for staggered animations
  const animations = useMemo(() => ({
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        }
      }
    },
    itemVariants: {
      hidden: { y: 20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
          duration: 0.7, 
          ease: [0.6, 0.05, -0.01, 0.9] 
        } 
      }
    }
  }), []);

  // Dynamic gradient based on mouse position - memoized to prevent unnecessary recalculations
  const dynamicGradient = useMemo(() => ({
    backgroundImage: `linear-gradient(120deg, rgba(79,141,253,0.9) ${gradientPosition.x}%, rgba(255,255,255,0.8) ${gradientPosition.x + 30}%, rgba(79,141,253,0.9) ${gradientPosition.x + 60}%)`,
    backgroundSize: '200% auto',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textShadow: '0 4px 30px rgba(0,0,0,0.7)',
    WebkitTextFillColor: 'white',
  }), [gradientPosition.x]);

  // Tech stack items
  const techStack = useMemo(() => ['React', 'Node.js', 'Cloud', 'AI'], []);

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden px-4 z-10"
      id="hero"
      aria-label="Hero Section"
    >
      {/* Video Background with fallback */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Only render video if not reduced motion preference */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ minWidth: '100%', minHeight: '100%' }}
          onLoadedData={() => setVideoLoaded(true)}
          aria-hidden="true"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>

      {/* Hero content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center py-16 md:py-24"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtle highlight marker above heading */}
        <motion.div 
          className="w-24 h-1 bg-seaby-blue rounded-full mb-10 overflow-hidden"
          variants={animations.itemVariants}
        >
          <motion.div 
            className="w-full h-full bg-white"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Company tag */}
        <motion.span
          variants={animations.itemVariants}
          className="uppercase tracking-widest text-seaby-blue font-semibold text-sm md:text-base mb-6 flex items-center"
        >
          <span className="w-2 h-2 rounded-full bg-seaby-blue mr-2" aria-hidden="true"></span>
          100% Moroccan Tech Company
          <span className="w-2 h-2 rounded-full bg-seaby-blue ml-2" aria-hidden="true"></span>
        </motion.span>
        
        {/* Main heading */}
        <motion.h1
          variants={animations.itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-exo mb-8 leading-tight"
          style={dynamicGradient}
        >
          Empowering Small
          <span className="block mt-1">Businesses Through</span>
          <span className="relative">
            Open Innovation
            <motion.svg 
              width="100%" 
              height="15" 
              viewBox="0 0 300 15" 
              className="absolute bottom-0 left-0"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <motion.path
                d="M8,9 C20,2 50,2 70,9 90,16 120,16 140,9 160,2 190,2 210,9 230,16 260,16 292,9"
                fill="none"
                stroke="rgba(79, 141, 253, 0.6)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h1>
        
        {/* Subheading */}
        <motion.p
          variants={animations.itemVariants}
          className="text-seaby-silver text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We build affordable, scalable digital infrastructure for local businesses using open-source technologies.
        </motion.p>
        
        {/* CTA buttons with accessibility improvements */}
        <motion.div
          variants={animations.itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.a
            href="#contact"
            className="btn-primary text-lg px-10 py-4 rounded-lg shadow-lg font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            role="button"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-seaby-blue to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            <span className="absolute inset-0 bg-seaby-blue" aria-hidden="true" />
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" />
              </svg>
              Start Your Project
            </span>
          </motion.a>
          
          <motion.a
            href="#services"
            className="px-10 py-4 border border-seaby-blue/60 text-seaby-silver rounded-lg font-medium transition-all duration-300 text-lg relative overflow-hidden group flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            role="button"
          >
            <span className="absolute inset-0 bg-seaby-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            <span className="relative z-10 flex items-center">
              Explore Services
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </motion.a>
        </motion.div>
        
        {/* Tech stack indicators */}
        <motion.div
          variants={animations.itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-6 max-w-lg mx-auto"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              className="px-4 py-1.5 bg-black/30 backdrop-blur-sm border border-seaby-blue/20 rounded-full text-sm text-seaby-silver/80 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + (index * 0.1), duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-seaby-blue mr-2" aria-hidden="true"></span>
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator with keyboard control support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-seaby-blue/70 focus:ring-offset-2 focus:ring-offset-black/50 rounded-full p-2"
          aria-label="Scroll down to services section"
        >
          <span className="text-seaby-silver/60 text-sm mb-2 tracking-wider group-hover:text-seaby-silver transition-colors duration-300">SCROLL</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-seaby-blue group-hover:text-white transition-colors duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;