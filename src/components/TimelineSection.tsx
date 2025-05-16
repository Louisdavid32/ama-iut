import React from 'react';
import { CalendarDays, Briefcase, Users, FileText, ClipboardList, MessageSquare, Settings, Award } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-ama-blue-100 flex flex-col items-center text-center h-full">
      <div className="bg-ama-blue-100 p-3 rounded-full mb-4">
        <Icon className="h-6 w-6 text-ama-blue-500" />
      </div>
      <h3 className="text-xl font-semibold text-ama-blue-500 mb-2">{title}</h3>
      <p className="text-ama-gray">{description}</p>
    </div>
  );
};

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 bg-ama-light">
      <div className="container mx-auto px-4">
        {/* Section Présentation */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ama-blue-600 mb-4">
            Formation Assistant Manager (AMA)
          </h2>
          <p className="text-xl text-ama-gray max-w-4xl mx-auto">
            Une formation complète préparant aux postes de soutien et d'assistance aux managers et directeurs dans tous types d'organisations.
          </p>
        </div>

        {/* Pourquoi choisir AMA */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-ama-blue-600 mb-6 flex items-center">
                <Briefcase className="mr-2 text-ama-gold" />
                POURQUOI CHOISIR LA FILIÈRE AMA ?
              </h3>
              <p className="text-ama-gray mb-6">
                La filière assistant manager offre une variété de tâches, des opportunités de développement des compétences, 
                des possibilités de carrière et des responsabilités.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Environnement dynamique et varié</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Évolution vers des postes de manager ou directeur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ama-gold font-bold mr-2">•</span>
                  <span>Développement de compétences clés en gestion et leadership</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-sm border border-ama-blue-100">
              <h4 className="text-xl font-semibold text-ama-blue-500 mb-4">OBJECTIFS DE LA FORMATION</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-ama-blue-100 p-1 rounded-full mr-3">
                    <Award className="h-4 w-4 text-ama-blue-500" />
                  </div>
                  <span>Développer des compétences en gestion, communication et leadership</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-ama-blue-100 p-1 rounded-full mr-3">
                    <Award className="h-4 w-4 text-ama-blue-500" />
                  </div>
                  <span>Préparer aux postes d'assistant manager dans divers secteurs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-ama-blue-100 p-1 rounded-full mr-3">
                    <Award className="h-4 w-4 text-ama-blue-500" />
                  </div>
                  <span>Fournir des connaissances en administration, GRH et gestion de projets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compétences développées */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-ama-blue-600 mb-8 text-center">
            COMPÉTENCES DÉVELOPPÉES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={FileText}
              title="Gestion administrative"
              description="Gestion des dossiers, planification des réunions, organisation des tâches"
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Communication"
              description="Rédaction professionnelle, communication orale, relations interpersonnelles"
            />
            <FeatureCard 
              icon={Users}
              title="Leadership"
              description="Motivation d'équipes, gestion des collaborateurs, prise d'initiatives"
            />
            <FeatureCard 
              icon={Settings}
              title="Résolution de problèmes"
              description="Analyse des situations, proposition de solutions, prise de décision"
            />
          </div>
        </div>

        {/* Débouchés professionnels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-ama-blue-600 mb-8 text-center">
            DÉBOUCHÉS PROFESSIONNELS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-ama-blue-100">
              <h4 className="text-xl font-semibold text-ama-blue-500 mb-4">POSTES CLÉS</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Assistant de direction",
                  "Responsable administratif",
                  "Coordonnateur de projet",
                  "Gestionnaire RH",
                  "Responsable de communication",
                  "Assistant commercial",
                  "Gestionnaire de projet",
                  "Responsable de service"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-ama-gold w-2 h-2 rounded-full mr-2"></div>
                    <span className="text-ama-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-ama-blue-100">
              <h4 className="text-xl font-semibold text-ama-blue-500 mb-4">SECTEURS D'ACTIVITÉ</h4>
              <div className="space-y-4">
                {[
                  "Entreprises privées (banques, assurances, commerce, industrie)",
                  "Secteur public (administrations, collectivités)",
                  "Associations et ONG",
                  "Secteur de la santé (hôpitaux, cliniques)"
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="bg-ama-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-ama-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-ama-blue-600 mb-8 text-center">
            NOTRE PROGRAMME EN BREF
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FeatureCard 
              icon={CalendarDays}
              title="Durée: 2 ans"
              description="Formation intensive avec un programme adapté au marché"
            />
            <FeatureCard 
              icon={ClipboardList}
              title="Stage de 6 mois"
              description="Immersion professionnelle en entreprise"
            />
            <FeatureCard 
              icon={Briefcase}
              title="Projets réels"
              description="Cas concrets d'entreprise"
            />
            <FeatureCard 
              icon={Award}
              title="Certification"
              description="Diplôme reconnu par l'État"
            />
          </div>
        </div>

        {/* Citation */}
        <div className="bg-ama-blue-50 p-8 rounded-lg border border-ama-blue-200 max-w-3xl mx-auto">
          <p className="text-ama-blue-600 italic text-lg mb-4 text-center">
            "Notre formation est mise à jour chaque année pour répondre aux besoins des entreprises 
            et aux évolutions du marché professionnel."
          </p>
          <p className="text-right text-ama-gray font-medium">— Direction Pédagogique AMA</p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;