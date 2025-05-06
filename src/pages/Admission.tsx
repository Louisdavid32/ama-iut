
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { Users, Calendar, FileText, Check, ClipboardList } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Admission = () => {
  useAOS();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ama-light to-ama-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-ama-blue-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-ama-gold/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ama-dark mb-6">Processus d'Admission</h1>
            <p className="text-xl text-ama-dark/80 mb-8">
              Découvrez comment rejoindre l'AMA et entamer votre parcours vers une carrière prometteuse.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Comment postuler à l'AMA ?</h2>
              <p className="text-ama-gray">
                Notre processus d'admission est conçu pour identifier les candidats motivés et talentueux
                qui bénéficieront pleinement de notre programme.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-ama-blue-50 p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-white p-4 rounded-full">
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
              
              <div className="bg-ama-blue-50 p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white p-4 rounded-full">
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
              
              <div className="bg-ama-blue-50 p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-white p-4 rounded-full">
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
          </div>
        </div>
      </section>
      
      {/* Requirements Section */}
      <section className="py-16 bg-ama-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Critères d'admission</h2>
              <p className="text-ama-gray max-w-2xl mx-auto">
                Pour intégrer notre programme, les candidats doivent répondre aux critères suivants
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ama-blue-100 p-3 rounded-full">
                      <ClipboardList className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ama-dark">Prérequis académiques</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Baccalauréat ou équivalent</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Bon niveau en anglais (B2 minimum)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Connaissances de base dans le domaine</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white" data-aos="fade-up" data-aos-delay="200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ama-blue-100 p-3 rounded-full">
                      <Users className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ama-dark">Qualités personnelles</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Motivation et engagement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Esprit d'équipe et collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Créativité et résolution de problèmes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white" data-aos="fade-up" data-aos-delay="300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-ama-blue-100 p-3 rounded-full">
                      <Calendar className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ama-dark">Calendrier</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ouverture des candidatures : 15 janvier</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Date limite de dépôt : 30 juin</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Rentrée : septembre</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-right">
                <img 
                  src="/img/15.jpeg" 
                  alt="Étudiants en formation"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div data-aos="fade-left">
                <h2 className="text-3xl font-bold text-ama-blue-600 mb-6">Pourquoi nous rejoindre ?</h2>
                <p className="text-ama-gray mb-4">
                  AMA offre un environnement d'apprentissage stimulant, des enseignants passionnés et 
                  un réseau professionnel étendu pour vous aider à réussir.
                </p>
                <p className="text-ama-gray mb-6">
                  Notre taux d'insertion professionnelle de 92% témoigne de la qualité de notre formation
                  et de sa reconnaissance par les entreprises.
                </p>
                <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium px-6 py-2 text-base">
                  Postuler maintenant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Admission;
