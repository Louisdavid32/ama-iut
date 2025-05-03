
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
      <div className="wave-divider"></div>
      <div className="container mx-auto px-4 pt-16">
        <div ref={textRef} className="max-w-3xl opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Formez-vous à l'<span className="text-ama-gold">AMA</span>, une expertise d'avenir
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Développez des compétences recherchées et bâtissez votre carrière avec notre formation de pointe.
            Notre école combine enseignement de qualité et approche pratique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium text-lg px-8 py-6">
              Découvrir la formation
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-medium text-lg px-8 py-6">
              Demander une brochure
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes in the background */}
      <div className="absolute top-1/4 right-[-5%] w-96 h-96 bg-ama-blue-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-ama-gold/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
