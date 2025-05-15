
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "card group h-full",
      className
    )}>
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-seaby-darkgray to-black p-3 flex items-center justify-center mb-6 text-seaby-silver group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
        {title}
      </h3>
      <p className="text-seaby-silver">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#050505]">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4 gradient-text inline-block">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-seaby-gray to-seaby-silver mx-auto mb-6"></div>
          <p className="text-seaby-silver max-w-2xl mx-auto">
            We provide end-to-end digital solutions designed specifically for small businesses in Morocco, leveraging the power of open-source technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          <ServiceCard
            title="Infrastructure Deployment"
            description="Custom deployment of scalable IT infrastructure using proven open-source solutions that grow with your business."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            }
          />
          
          <ServiceCard
            title="Open Source Consulting"
            description="Expert guidance on selecting, integrating, and optimizing open-source technologies for your specific business needs."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
          
          <ServiceCard
            title="Business Automation"
            description="Streamline your operations with custom automation solutions that eliminate repetitive tasks and boost productivity."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          
          <ServiceCard
            title="Cloud Solutions & Hosting"
            description="Secure, scalable cloud infrastructure and hosting services optimized for performance and cost-efficiency."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            }
          />
          
          <ServiceCard
            title="Technical Support & Training"
            description="Comprehensive technical support and training programs to ensure your team gets the most from your technology investments."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          />
          
          <ServiceCard
            title="Digital Transformation"
            description="End-to-end digital transformation services to help traditional businesses adapt and thrive in the digital economy."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
