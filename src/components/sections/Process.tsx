import React, { useEffect } from 'react';

const ProcessStep = ({ number, title, description, isLast = false, icon }) => {
  return (
    <div className="flex relative group">
      {/* Step number and connector */}
      <div className="flex flex-col items-center mr-6 md:mr-8">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-seaby-blue/50 flex items-center justify-center bg-black/70 text-seaby-blue font-bold transition-all duration-500 ease-in-out group-hover:border-seaby-blue group-hover:bg-seaby-blue/20 group-hover:scale-110 group-hover:shadow-glow">
          {number}
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-gradient-to-b from-seaby-blue/30 to-transparent my-2 transition-all duration-500 group-hover:from-seaby-blue"></div>
        )}
      </div>
      
      {/* Step content */}
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-3">
          {icon && <div className="text-seaby-blue transition-transform duration-500 group-hover:scale-125">{icon}</div>}
          <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-seaby-blue group-hover:to-white transition-all duration-500">{title}</h3>
        </div>
        <p className="text-seaby-silver leading-relaxed max-w-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500">{description}</p>
      </div>
    </div>
  );
};

// Creating a floating element component for reusability
const FloatingElement = ({ text, position, delay, size = "normal" }) => {
  const sizeClasses = {
    small: "p-2 text-xs",
    normal: "p-3 text-sm",
    large: "p-4 text-base"
  };
  
  return (
    <div 
      className={`absolute ${position} ${sizeClasses[size]} bg-black/80 backdrop-blur-md border border-seaby-blue/20 rounded-lg animate-float shadow-glow-sm hover:shadow-glow hover:border-seaby-blue/50 transition-all duration-300`} 
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-seaby-silver">{text}</p>
    </div>
  );
};

const Process = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const processSteps = document.querySelectorAll('.process-step');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Delayed animation for each step
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, 200 * index);
        }
      });
    }, { threshold: 0.1 });
    
    processSteps.forEach(step => observer.observe(step));
    
    return () => {
      processSteps.forEach(step => observer.unobserve(step));
    };
  }, []);

  return (
    <section id="process" className="py-20 lg:py-32 bg-gradient-to-b from-black via-[#030303] to-black relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-seaby-blue/5 via-transparent to-transparent opacity-70"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-seaby-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Grid overlay for tech feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block text-seaby-blue text-sm font-mono tracking-wider mb-3 opacity-80">// 01 // METHODOLOGY</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-exo mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-seaby-blue/80">
            How We Work
          </h1>
          <p className="text-seaby-silver text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Our proven process for delivering exceptional results that transform businesses
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-seaby-blue to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Process steps with enhanced animations */}
          <div className="space-y-2 md:space-y-4">
            <div className="process-step opacity-0 transform translate-y-10 transition-all duration-700 ease-out">
              <ProcessStep 
                number="01"
                title="Discovery & Analysis"
                description="We begin with a comprehensive analysis of your business ecosystem, identifying challenges, opportunities, and defining clear objectives to create a strategic technology roadmap."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
              />
            </div>
            
            <div className="process-step opacity-0 transform translate-y-10 transition-all duration-700 ease-out">
              <ProcessStep 
                number="02"
                title="Strategic Design"
                description="Our expert architects design scalable, future-proof solutions leveraging cutting-edge open-source technologies tailored to your specific business requirements and growth trajectory."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                }
              />
            </div>
            
            <div className="process-step opacity-0 transform translate-y-10 transition-all duration-700 ease-out">
              <ProcessStep 
                number="03"
                title="Agile Development"
                description="We implement your solution with rigorous quality standards, using agile methodologies that ensure security, scalability, and rapid adaptation to changing requirements."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
              />
            </div>
            
            <div className="process-step opacity-0 transform translate-y-10 transition-all duration-700 ease-out">
              <ProcessStep 
                number="04"
                title="Continuous Evolution"
                description="Beyond deployment, we provide ongoing support, performance monitoring, and strategic optimization to ensure your technology evolves with your business and maintains competitive advantage."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
                isLast={true}
              />
            </div>
          </div>
          
          {/* Enhanced visual illustration */}
          <div className="hidden lg:block relative h-[600px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-black/90 via-seaby-darkgray/10 to-black border border-seaby-blue/20 shadow-glow-lg transform transition-transform duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
              
              {/* Animated elements */}
              <div className="absolute w-full h-full">
                {/* Glowing rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-72 h-72 md:w-80 md:h-80 relative">
                    <div className="absolute w-full h-full rounded-full border border-seaby-blue/10 animate-pulse-slow"></div>
                    <div className="absolute w-[85%] h-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-seaby-blue/20 animate-pulse-slow" style={{ animationDelay: "0.7s" }}></div>
                    <div className="absolute w-[70%] h-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-seaby-blue/30 animate-pulse-slow" style={{ animationDelay: "1.4s" }}></div>
                    <div className="absolute w-[55%] h-[55%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-seaby-blue/40 animate-pulse-slow" style={{ animationDelay: "2.1s" }}></div>
                    
                    {/* Logo and glow effect */}
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 rounded-full backdrop-blur-sm flex items-center justify-center border border-seaby-blue/30 shadow-glow">
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-white mb-1">SEABYTHE</p>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-seaby-blue to-transparent mx-auto mb-1"></div>
                        <p className="text-xs text-seaby-silver font-light">INNOVATION PARTNERS</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Data flow lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M150,150 Q250,250 350,150" 
                    stroke="rgba(64, 192, 255, 0.2)" 
                    strokeWidth="1" 
                    fill="none" 
                    strokeDasharray="5,5" 
                    className="animate-dash-slow"
                  />
                  <path 
                    d="M450,150 Q350,250 250,350" 
                    stroke="rgba(64, 192, 255, 0.15)" 
                    strokeWidth="1" 
                    fill="none" 
                    strokeDasharray="5,5" 
                    className="animate-dash-slow"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <path 
                    d="M150,450 Q250,350 350,450" 
                    stroke="rgba(64, 192, 255, 0.25)" 
                    strokeWidth="1" 
                    fill="none" 
                    strokeDasharray="5,5" 
                    className="animate-dash-slow"
                    style={{ animationDelay: "1s" }}
                  />
                  <path 
                    d="M150,300 Q300,300 450,300" 
                    stroke="rgba(64, 192, 255, 0.2)" 
                    strokeWidth="1" 
                    fill="none" 
                    strokeDasharray="5,5" 
                    className="animate-dash-slow"
                    style={{ animationDelay: "1.5s" }}
                  />
                </svg>
                
                {/* Floating elements with enhanced positioning and styling */}
                <FloatingElement 
                  text="Enterprise Architecture" 
                  position="top-[12%] left-[12%]" 
                  delay={0.5} 
                  size="normal"
                />
                
                <FloatingElement 
                  text="Open Source Integration" 
                  position="top-[20%] right-[10%]" 
                  delay={1.2} 
                  size="normal"
                />
                
                <FloatingElement 
                  text="Cloud Optimization" 
                  position="bottom-[18%] right-[15%]" 
                  delay={0.8} 
                  size="normal"
                />
                
                <FloatingElement 
                  text="Business Automation" 
                  position="bottom-[22%] left-[10%]" 
                  delay={1.5} 
                  size="normal"
                />
                
                <FloatingElement 
                  text="Data Analytics" 
                  position="top-[40%] left-[8%]" 
                  delay={2.0} 
                  size="small"
                />
                
                <FloatingElement 
                  text="Security Solutions" 
                  position="bottom-[40%] right-[8%]" 
                  delay={1.8} 
                  size="small"
                />
                
                {/* Animated particles */}
                <div className="particle-container absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-seaby-blue/50 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float-random ${5 + Math.random() * 10}s infinite linear`,
                        animationDelay: `${Math.random() * 5}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block transform transition-transform duration-300 hover:scale-105">
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-seaby-blue/80 to-seaby-blue/30 hover:from-seaby-blue hover:to-seaby-blue/50 rounded-full text-white font-medium shadow-glow-sm hover:shadow-glow transition-all duration-300">
              Start Your Digital Transformation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(-5px, 15px); }
          75% { transform: translate(-10px, 5px); }
        }
        
        .revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(64, 192, 255, 0.3);
        }
        
        .shadow-glow-sm {
          box-shadow: 0 0 10px rgba(64, 192, 255, 0.2);
        }
        
        .shadow-glow-lg {
          box-shadow: 0 0 30px rgba(64, 192, 255, 0.15);
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-dash-slow {
          animation: dash 15s linear infinite;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 500;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;