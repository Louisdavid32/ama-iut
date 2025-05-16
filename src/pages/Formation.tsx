import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileText, BookOpen, ClipboardCheck, Users, Calculator, Globe, Briefcase, Calendar, Layers } from 'lucide-react';

const Formation = () => {
  useAOS();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/6.jpeg')" }}>
      <div className="absolute inset-0 bg-ama-blue-900/50"></div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-ama-blue-900/50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-ama-gold/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Formation en Organisation et Méthodes Administratives</h1>
            <p className="text-xl text-white/80 mb-8">
              Un programme complet conçu pour former des professionnels compétents en gestion administrative, 
              organisation d'entreprise et méthodes de travail efficaces.
            </p>
            <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium px-8 py-4 text-lg">
              Découvrir le programme
            </Button>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Programme Pédagogique AMA</h2>
              <p className="text-ama-gray">
                Notre formation en Organisation et Méthodes Administratives combine théorie et pratique 
                pour vous préparer aux défis du monde professionnel administratif et managérial.
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
                  La première année établit les bases essentielles de l'administration et des méthodes de travail.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Organisation et méthodes administratives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Technique d'expression anglaise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Mathématique commerciale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Gestion des ressources humaines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Relation professionnelle</span>
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
                  La deuxième année approfondit les compétences avec des modules spécialisés 
                  et une immersion professionnelle.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Technique de base de l'assistant manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Organisation de l'action administrative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Commerce et classement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Économie générale</span>
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
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Détails des Modules</h2>
              <p className="text-ama-gray max-w-2xl mx-auto">
                Explorez le contenu approfondi de nos principaux modules de formation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <BookOpen className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Organisation et Méthodes Administratives</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Fondements des techniques d'organisation administrative et optimisation des processus.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Méthodes de rationalisation des tâches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Analyse et amélioration des processus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Outils de gestion administrative</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Études de cas organisationnels</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <Users className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Gestion des Ressources Humaines</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Acquisition des compétences essentielles en management des équipes et gestion du personnel.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Recrutement et intégration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Gestion des carrières</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Droit du travail appliqué</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Communication managériale</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <Calculator className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Mathématique Commerciale</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Outils mathématiques appliqués à la gestion commerciale et administrative.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Calculs commerciaux</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Statistiques appliquées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Analyse financière de base</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Tableaux et représentations graphiques</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <Globe className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Technique d'Expression Anglaise</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Maîtrise de l'anglais professionnel pour les contextes administratifs et managériaux.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Rédaction administrative</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Communication professionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Terminologie spécifique</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Présentations professionnelles</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <Briefcase className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Technique de l'Assistant Manager</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Compétences clés pour assister efficacement la direction et gérer les tâches administratives complexes.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Gestion de l'agenda et des priorités</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Organisation des réunions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Prise de notes et comptes-rendus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Gestion des relations avec les collaborateurs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ama-blue-100 p-3 rounded-full">
                    <Calendar className="text-ama-blue-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-ama-dark">Organisation d'Événements</h3>
                </div>
                <p className="text-ama-gray mb-4">
                  Méthodologie pour planifier, organiser et gérer des événements professionnels.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Logistique événementielle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Gestion des budgets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Communication événementielle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-ama-blue-400 font-bold mr-2">→</span>
                      <span>Évaluation post-événement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-ama-dark mb-6">Vous souhaitez découvrir l'intégralité du programme?</h3>
              <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium px-8 py-6 text-lg">
                Télécharger le programme détaillé
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Débouchés Professionnels</h2>
              <p className="text-ama-gray max-w-2xl mx-auto">
                Les compétences acquises ouvrent les portes à des carrières variées dans le domaine administratif et managérial
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-ama-blue-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-bold text-ama-dark mb-3">Assistant Manager</h3>
                <p className="text-ama-gray">
                  Gestion des activités administratives, organisation des réunions, coordination des équipes.
                </p>
              </div>
              
              <div className="bg-ama-blue-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold text-ama-dark mb-3">Responsable Administratif</h3>
                <p className="text-ama-gray">
                  Supervision des services administratifs, optimisation des processus, gestion des ressources.
                </p>
              </div>
              
              <div className="bg-ama-blue-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-bold text-ama-dark mb-3">Chargé de Méthodes</h3>
                <p className="text-ama-gray">
                  Analyse et amélioration des procédures administratives, mise en place de solutions organisationnelles.
                </p>
              </div>
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
                <h2 className="text-3xl font-bold text-ama-blue-600 mb-6">Une formation professionnalisante</h2>
                <p className="text-ama-gray mb-6">
                  Notre programme en Organisation et Méthodes Administratives combine apprentissage théorique 
                  et mise en pratique concrète à travers des études de cas, des simulations et un stage obligatoire.
                </p>
                <p className="text-ama-gray">
                  Les étudiants bénéficient d'un environnement moderne avec des salles équipées, des outils 
                  professionnels et un accompagnement personnalisé pour leur insertion professionnelle.
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-left">
                <img 
                  src="/img/13.jpeg"
                  alt="Étudiants en formation administrative"
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