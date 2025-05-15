
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-black to-[#080808]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="section-heading">About SEABYTHE</h2>
            
            <p className="text-seaby-silver mb-6">
              SEABYTHE is a 100% Moroccan tech company founded with a mission to democratize access to cutting-edge technology for local businesses. We believe that digital transformation should be accessible to all companies, regardless of size or budget.
            </p>
            
            <p className="text-seaby-silver mb-6">
              Our team of expert engineers and consultants specializes in leveraging open-source technologies to build robust, scalable, and cost-effective digital solutions tailored to the unique needs of Moroccan businesses.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-seaby-gray pl-4">
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-seaby-silver">To empower small businesses through accessible technology and open innovation.</p>
              </div>
              
              <div className="border-l-2 border-seaby-gray pl-4">
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-seaby-silver">To lead Morocco's digital transformation by making technology accessible to all.</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-[400px] shadow-2xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-seaby-gray opacity-20"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-black/60">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-exo gradient-text">100% Moroccan</h3>
              <p className="text-seaby-silver mb-8">Proudly founded and operated in Morocco, with a deep understanding of local market needs.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <p className="text-sm text-seaby-silver">Years Experience</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <p className="text-sm text-seaby-silver">Projects Completed</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                  <p className="text-sm text-seaby-silver">Tech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
