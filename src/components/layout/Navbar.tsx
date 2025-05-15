import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!isScrolled && window.scrollY > 20) {
      setIsScrolled(true);
    } else if (isScrolled && window.scrollY <= 20) {
      setIsScrolled(false);
    }
  }, [isScrolled]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Close mobile menu when ESC key is pressed
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleScroll, mobileMenuOpen]);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "How We Work" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-black/90 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a 
          href="#" 
          className="flex items-center transition-transform hover:scale-105"
          aria-label="SEABYTHE Home"
        >
          <img 
            src="/assets/logo.png" 
            alt="SEABYTHE Logo" 
            className="h-16 md:h-20" 
            width="auto"
            height="auto"
            loading="eager"
          />
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-seaby-silver hover:text-white relative font-medium text-lg transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-seaby-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary px-6 py-3 rounded-lg font-medium text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-seaby-silver p-2 focus:outline-none menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div 
        className={cn(
          "md:hidden fixed top-[60px] left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 transform mobile-menu",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="container py-6 flex flex-col divide-y divide-gray-800/30">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-seaby-silver hover:text-white transition-colors py-4 text-xl font-medium pl-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center mt-2 py-4 px-6 w-full rounded-lg font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Your Project
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;