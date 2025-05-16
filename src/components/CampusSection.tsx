
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CampusSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ama-dark mb-4" data-aos="fade-in">Notre <span className="text-ama-blue-500">Campus</span></h2>
          <p className="text-lg text-ama-gray max-w-2xl mx-auto" data-aos="fade-in" data-aos-delay="100">
            Un environnement moderne et inspirant pour développer votre potentiel dans des conditions optimales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-in" data-aos-delay="200">
            <div className="bg-ama-blue-50 p-6 rounded-xl border border-ama-blue-100">
              <h3 className="text-xl font-bold text-ama-blue-600 mb-2">Équipements de pointe</h3>
              <p className="text-ama-gray">Nos salles sont équipées des dernières technologies pour vous offrir une expérience d'apprentissage optimale.</p>
            </div>
            
            <div className="bg-ama-blue-50 p-6 rounded-xl border border-ama-blue-100">
              <h3 className="text-xl font-bold text-ama-blue-600 mb-2">Espaces collaboratifs</h3>
              <p className="text-ama-gray">Des zones dédiées au travail d'équipe et à l'innovation pour développer vos projets.</p>
            </div>
            
            <div className="bg-ama-blue-50 p-6 rounded-xl border border-ama-blue-100">
              <h3 className="text-xl font-bold text-ama-blue-600 mb-2">Environnement stimulant</h3>
              <p className="text-ama-gray">Un cadre inspirant qui favorise la concentration et la créativité.</p>
            </div>
            
            <Button className="bg-ama-blue-500 hover:bg-ama-blue-600">
              Visiter le campus <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4" data-aos="fade-in" data-aos-delay="300">
            <div className="rounded-xl overflow-hidden h-64 transform hover:scale-105 transition-transform">
              <img 
                src="/1.jpeg"
                alt="Campus AMA" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64 mt-8 transform hover:scale-105 transition-transform">
              <img 
                src="/2.jpeg"
                alt="Équipements AMA" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64 transform hover:scale-105 transition-transform">
              <img 
                src="/3.jpeg"
                alt="Technologie AMA" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-64 mt-8 transform hover:scale-105 transition-transform">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="/4.jpeg"
            >
              <source src="/img/WhatsApp Video 2025-05-05 at 20.03.46.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
