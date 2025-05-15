
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Log for debugging purposes
    console.log("Index component mounted, setting up animations");
    
    // Improved scroll animations with better performance
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Section entering viewport:", entry.target.id || "unnamed section");
          // Use a slight delay for a cascading effect
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            // Cast to HTMLElement to access style property
            (entry.target as HTMLElement).style.opacity = '1';
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add a small delay to ensure DOM is fully ready
    setTimeout(() => {
      // Setup sections for animation
      const sections = document.querySelectorAll('section');
      console.log(`Found ${sections.length} sections to animate`);
      
      sections.forEach((section, index) => {
        // Add ID if missing for better debugging
        if (!section.id) {
          section.id = `section-${index}`;
        }
        // Cast to HTMLElement to access style property
        (section as HTMLElement).style.opacity = '0';
        observer.observe(section);
      });
    }, 100);

    return () => {
      console.log("Index component unmounting, cleaning up observers");
      const sections = document.querySelectorAll('section');
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
