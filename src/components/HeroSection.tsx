
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { GalleryHorizontal, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.opacity = "1";
      textRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-ama-dark flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-ama-blue-800 via-ama-dark to-ama-blue-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-ama-blue-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-ama-gold/30 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="wave-divider z-10"></div>
      
      <div className="container mx-auto px-4 pt-16 z-10 flex flex-col lg:flex-row items-center gap-8">
        <div ref={textRef} className="max-w-2xl" style={{ opacity: "0", transition: "opacity 0.5s ease-out" }}>
          <div className="p-2 px-4 bg-white/10 backdrop-blur-sm inline-flex items-center gap-2 rounded-full mb-6 border border-white/20">
            <span className="bg-ama-gold text-ama-dark text-xs font-bold px-2 py-1 rounded-full">NOUVEAU</span>
            <span className="text-white text-sm">Formation 2025-2026 ouverte aux inscriptions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Formez-vous à l'<span className="text-ama-gold">AMA</span>, une expertise d'avenir
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Développez des compétences recherchées et bâtissez votre carrière avec notre formation de pointe.
            Notre école combine enseignement de qualité et approche pratique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium text-lg px-8 py-6 group">
              Découvrir la formation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="/image.png" download>
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-medium text-lg px-8 py-6">
                <GalleryHorizontal className="mr-2" /> Demander une brochure
              </Button>
            </a>
          </div>
        </div>
        
        <div className="lg:flex-1 mt-8 lg:mt-0 relative" data-aos="fade-in" data-aos-delay="300">
          <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/img/1.jpeg" 
              alt="Étudiants AMA" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ama-dark/80 to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <p className="text-ama-dark font-bold">+500 diplômés</p>
            <p className="text-ama-gray text-sm">Taux d'embauche de 94%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
