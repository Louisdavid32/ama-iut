
import React from 'react';
import { Book, Network, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-lg shadow-md border border-ama-blue-100 card-hover"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="bg-ama-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
        <Icon className="text-ama-blue-500 w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-ama-blue-500 mb-4 text-center">{title}</h3>
      <p className="text-ama-gray text-center">{description}</p>
    </div>
  );
};

const ValuesSection: React.FC = () => {
  return (
    <section className="py-20 bg-ama-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ama-blue-500 mb-4">Nos Valeurs</h2>
          <p className="text-ama-gray max-w-2xl mx-auto">
            Découvrez ce qui anime notre école et notre engagement envers votre réussite professionnelle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            title="Excellence Académique"
            description="Un programme rigoureux conçu avec des professionnels du secteur pour vous garantir une formation pertinente et à jour."
            icon={Book}
            delay={0}
          />
          
          <ValueCard 
            title="Certification Reconnue"
            description="Obtenez un diplôme valorisé sur le marché du travail et bénéficiez d'une reconnaissance professionnelle."
            icon={FileText}
            delay={200}
          />
          
          <ValueCard 
            title="Réseau Professionnel"
            description="Accédez à notre réseau d'entreprises partenaires et développez votre réseau professionnel dès la formation."
            icon={Network}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
