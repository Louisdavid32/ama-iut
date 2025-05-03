
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText, BookOpen, ClipboardCheck } from 'lucide-react';

const Formation = () => {
  useAOS();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ama-blue-100 to-ama-blue-300 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-ama-blue-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-ama-gold/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ama-dark mb-6">Notre Formation</h1>
            <p className="text-xl text-ama-dark/80 mb-8">
              Découvrez notre programme pédagogique complet, conçu pour développer vos compétences
              et vous préparer à une carrière réussie.
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Programme Pédagogique</h2>
              <p className="text-ama-gray">
                Notre formation est structurée pour vous offrir à la fois des fondamentaux solides et une spécialisation
                adaptée aux besoins actuels du marché.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-ama-blue-50 p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full">
                    <GraduationCap className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-ama-dark">Première Année</h3>
                </div>
                <p className="text-ama-gray mb-6">
                  Notre programme de première année se concentre sur l'acquisition des fondamentaux
                  nécessaires à votre réussite.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Introduction aux principes fondamentaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Développement des compétences techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Applications pratiques et études de cas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-ama-blue-50 p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-3 rounded-full">
                    <FileText className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-ama-dark">Deuxième Année</h3>
                </div>
                <p className="text-ama-gray mb-6">
                  La deuxième année approfondit vos connaissances avec des modules spécialisés
                  et un stage professionnel.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Spécialisations avancées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Projets d'équipe et développement du leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Stage professionnel (4 à 6 mois)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Details Section */}
      <section className="py-16 bg-ama-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Contenu des Cours</h2>
              <p className="text-ama-gray max-w-2xl mx-auto">
                Explorez le contenu détaillé de nos principaux modules d'enseignement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <BookOpen className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Fondamentaux Techniques</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Ce module couvre les principes essentiels nécessaires pour maîtriser les fondamentaux
                  de notre domaine d'expertise.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Introduction à la méthodologie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Techniques fondamentales d'analyse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Ateliers pratiques dirigés</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <ClipboardCheck className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Gestion de Projet</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Apprenez à gérer efficacement des projets complexes en équipe, en respectant
                  les délais et les objectifs fixés.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Méthodologies agiles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Outils de gestion de projet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Études de cas réels</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <BookOpen className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Spécialisation Technique</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Ce module avancé vous permet d'acquérir des compétences spécialisées dans
                  votre domaine de prédilection.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Technologies avancées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Projets de spécialisation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Interventions de professionnels</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <ClipboardCheck className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Préparation Professionnelle</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Ce module vous prépare à intégrer le monde professionnel avec confiance et
                  les compétences nécessaires pour réussir.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Préparation aux entretiens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Construction de portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Réseautage professionnel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-ama-dark mb-6">Vous souhaitez en savoir plus?</h3>
              <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium px-8 py-6 text-lg">
                Télécharger la brochure complète
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center" data-aos="fade-right">
                <h2 className="text-3xl font-bold text-ama-blue-600 mb-6">Un environnement optimal pour apprendre</h2>
                <p className="text-ama-gray mb-6">
                  Notre campus offre un cadre d'apprentissage exceptionnel avec des salles modernes, 
                  des laboratoires équipés et des espaces de collaboration pour favoriser votre réussite.
                </p>
                <p className="text-ama-gray">
                  Les étudiants ont accès à des ressources pédagogiques de qualité et bénéficient
                  d'un accompagnement personnalisé tout au long de leur parcours.
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-left">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Campus moderne"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Formation;
