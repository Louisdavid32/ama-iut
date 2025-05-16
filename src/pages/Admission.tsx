import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { Users, Calendar, FileText, Check, ClipboardList, Briefcase, MessageSquare, Settings, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Admission = () => {
  useAOS();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/5.jpeg')" }}>
        <div className="absolute inset-0 bg-ama-blue-900/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Devenez Assistant Manager avec l'AMA</h1>
            <p className="text-xl mb-8">
              Une formation complète pour maîtriser l'organisation administrative et le soutien managérial
            </p>
            <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium px-8 py-4 text-lg">
              Postuler maintenant
            </Button>
          </div>
        </div>
      </section>
      
      {/* Program Presentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">PRÉSENTATION DE LA FILIÈRE AMA</h2>
              <p className="text-ama-gray text-lg">
                La filière Assistant Manager prépare les étudiants à occuper des postes de soutien et d'assistance 
                aux managers et directeurs dans les entreprises et organisations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-ama-blue-50 border-none" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                      <Briefcase className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ama-dark">POURQUOI CHOISIR AMA ?</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Variété de tâches et responsabilités</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Environnement dynamique et varié</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Opportunités d'évolution de carrière</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ama-blue-50 border-none" data-aos="fade-up" data-aos-delay="200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                      <Award className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ama-dark">OBJECTIFS</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Développer des compétences en gestion et leadership</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Préparer aux postes d'assistant manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Fournir des connaissances en administration et GRH</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ama-blue-50 border-none" data-aos="fade-up" data-aos-delay="300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                      <Settings className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ama-dark">COMPÉTENCES</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Gestion administrative avancée</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Communication professionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Résolution de problèmes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-ama-light">
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
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-ama-blue-100 p-4 rounded-full">
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
              
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-ama-blue-100 p-4 rounded-full">
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
              
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-ama-blue-100 p-4 rounded-full">
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
      
      {/* Career Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Débouchés Professionnels</h2>
              <p className="text-ama-gray max-w-2xl mx-auto">
                La filière AMA ouvre les portes à des carrières variées dans divers secteurs d'activité
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div data-aos="fade-right">
                <h3 className="text-xl font-bold text-ama-dark mb-4">Métiers possibles :</h3>
                <ul className="space-y-3 bg-ama-blue-50 p-6 rounded-lg">
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Assistant de direction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Responsable administratif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Coordonnateur de projet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Gestionnaire de ressources humaines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Responsable de communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Assistant commercial</span>
                  </li>
                </ul>
              </div>
              
              <div data-aos="fade-left">
                <h3 className="text-xl font-bold text-ama-dark mb-4">Secteurs d'activité :</h3>
                <ul className="space-y-3 bg-ama-blue-50 p-6 rounded-lg">
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Entreprises privées (banques, assurances, commerce, industrie)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Secteur public (administrations, collectivités locales)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Associations et ONG</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Secteur de la santé (hôpitaux, cliniques)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Entreprises multinationales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ama-gold font-bold mr-2">•</span>
                    <span>Startups et PME innovantes</span>
                  </li>
                </ul>
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
                      <span>Connaissances de base en gestion</span>
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
                      <span>Ouverture des candidatures : Juin</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Concours : Août</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-ama-gold w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Rentrée : Septembre</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ama-blue-600 to-ama-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Prêt à rejoindre l'AMA ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Lancez-vous dans une carrière passionnante en tant qu'assistant manager
          </p>
          <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium px-8 py-4 text-lg" data-aos="fade-up" data-aos-delay="200">
            Postuler maintenant
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Admission;