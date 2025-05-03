
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { Users, Calendar, FileText } from 'lucide-react';

const Admission = () => {
  useAOS();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-ama-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-ama-blue-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-ama-gold/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Processus d'Admission</h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez comment rejoindre l'AMA et entamer votre parcours vers une carrière prometteuse.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-ama-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-ama-blue-500 mb-8 text-center" data-aos="fade-up">
              Comment postuler à l'AMA ?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-ama-blue-50 p-4 rounded-full">
                  <FileText className="text-ama-blue-500 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ama-dark mb-4">1. Dépôt du dossier</h3>
                  <p className="text-ama-gray mb-4">
                    Complétez votre dossier de candidature en ligne avec vos informations personnelles,
                    votre parcours académique et professionnelle, ainsi que votre lettre de motivation.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-ama-gold font-bold mr-2">•</span>
                      <span>CV détaillé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-gold font-bold mr-2">•</span>
                      <span>Relevés de notes des deux dernières années</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-gold font-bold mr-2">•</span>
                      <span>Lettre de motivation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-ama-blue-50 p-4 rounded-full">
                  <Calendar className="text-ama-blue-500 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ama-dark mb-4">2. Entretien de motivation</h3>
                  <p className="text-ama-gray mb-4">
                    Les candidats présélectionnés sont invités à un entretien de motivation
                    pour discuter de leur projet professionnel et de leur adéquation avec la formation.
                  </p>
                  <p className="text-ama-gray">
                    L'entretien peut se dérouler en présentiel ou en visioconférence selon
                    votre localisation géographique.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-ama-blue-50 p-4 rounded-full">
                  <Users className="text-ama-blue-500 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ama-dark mb-4">3. Décision d'admission</h3>
                  <p className="text-ama-gray mb-4">
                    Après étude de votre dossier et de votre entretien, la commission d'admission
                    vous communique sa décision par email dans un délai de deux semaines.
                  </p>
                  <p className="text-ama-gray">
                    En cas d'admission, vous recevrez les informations nécessaires pour
                    finaliser votre inscription et préparer votre rentrée.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium text-lg px-8 py-6">
                Postuler maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Admission;
