
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-ama-blue-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ama-blue-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ama-blue-400 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à construire votre avenir professionnel ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez notre formation et accédez à des opportunités de carrière exceptionnelles. 
            Les inscriptions pour la prochaine session sont ouvertes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium text-lg px-8 py-6">
              Postuler maintenant
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-medium text-lg px-8 py-6">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
