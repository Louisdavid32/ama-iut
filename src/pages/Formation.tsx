
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText } from 'lucide-react';

const Formation = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Notre Formation</h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez notre programme pédagogique complet, conçu pour développer vos compétences
              et vous préparer à une carrière réussie.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-ama-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-ama-blue-500 mb-8" data-aos="fade-up">Programme Pédagogique</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-ama-blue-50 p-3 rounded-full">
                  <GraduationCap className="text-ama-blue-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-ama-dark">Première Année</h3>
              </div>
              <p className="text-ama-gray mb-6">
                Notre programme de première année se concentre sur l'acquisition des fondamentaux
                nécessaires à votre réussite. Vous développerez des compétences essentielles
                à travers des cours théoriques et des projets pratiques.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Module 1: Introduction aux principes fondamentaux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Module 2: Développement des compétences techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Module 3: Applications pratiques et études de cas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-ama-blue-50 p-3 rounded-full">
                  <FileText className="text-ama-blue-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-ama-dark">Deuxième Année</h3>
              </div>
              <p className="text-ama-gray mb-6">
                La deuxième année approfondit vos connaissances avec des modules spécialisés
                et un stage professionnel. Vous serez préparé à intégrer le marché du travail
                avec confiance et expertise.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Module 4: Spécialisations avancées</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Module 5: Projets d'équipe et développement du leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Module 6: Stage professionnel (4 à 6 mois)</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium text-lg px-8 py-6">
                Télécharger la brochure complète
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Formation;
