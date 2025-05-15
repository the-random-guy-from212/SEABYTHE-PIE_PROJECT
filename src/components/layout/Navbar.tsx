import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll events for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "How We Work" },
    { href: "#contact", label: "Contact" }
  ];

  // Simple toggle function without dependencies on complex event handling
  const toggleMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

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
        {/* Logo */}
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

        {/* Simplified Mobile menu button */}
        <button 
          type="button"
          className="block md:hidden text-seaby-silver p-3 rounded-md hover:bg-gray-800/50"
          onClick={toggleMenu}
        >
          {mobileMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Simplified Mobile Menu - Always in DOM, toggled by display property */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <nav className="container py-4 flex flex-col divide-y divide-gray-800/30">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-seaby-silver hover:text-white py-4 text-xl font-medium pl-2"
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
      )}
    </header>
  );
};

export default Navbar;