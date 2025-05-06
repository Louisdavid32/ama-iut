
import React from 'react';
import { CalendarDays, ChartBar, Computer, CalendarCheck } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-ama-blue-500 p-4 mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="h-0.5 w-full bg-ama-blue-200 hidden md:block"></div>
      <div className="px-4 pt-4 text-center">
        <h3 className="text-xl font-semibold text-ama-blue-500 mb-2">{title}</h3>
        <p className="text-ama-gray">{description}</p>
      </div>
    </div>
  );
};

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-ama-blue-500">{name}</span>
        <span className="text-sm text-ama-gray">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-ama-blue-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
          data-aos="slide-right"
          data-aos-duration="1000"
        ></div>
      </div>
    </div>
  );
};

const TimelineSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ama-blue-500 mb-4">
            Formation AMA en Bref
          </h2>
          <p className="text-ama-gray max-w-2xl mx-auto">
            Une formation complète de deux ans qui vous prépare aux défis du monde professionnel moderne
          </p>
        </div>

        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TimelineItem 
              title="Durée: 2 ans"
              description="Formation intensive avec un programme adapté au marché"
              icon={CalendarDays}
            />
            <TimelineItem 
              title="Stage de 6 mois"
              description="Expérience pratique en entreprise"
              icon={CalendarCheck}
            />
            <TimelineItem 
              title="Projets réels"
              description="Travaillez sur des cas concrets d'entreprise"
              icon={Computer}
            />
            <TimelineItem 
              title="Certification"
              description="Diplôme reconnu par l'État"
              icon={ChartBar}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-ama-blue-500 mb-6">Compétences acquises</h3>
            <SkillBar name="Assistant de direction " percentage={90} />
            <SkillBar name="Management de projet" percentage={85} />
            <SkillBar name="Assistant commercial" percentage={80} />
            <SkillBar name="Assistant marketing" percentage={75} />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-ama-blue-50 p-8 rounded-lg border border-ama-blue-100">
              <h4 className="text-xl font-semibold text-ama-blue-500 mb-3">Débouchés professionnels</h4>
              <ul className="space-y-2 text-ama-gray">
                <li className="flex items-center">
                  <div className="bg-ama-blue-500 w-2 h-2 rounded-full mr-2"></div>
                  Postes d'assistance administrative
                </li>
                <li className="flex items-center">
                  <div className="bg-ama-blue-500 w-2 h-2 rounded-full mr-2"></div>
                  Ressources humaines
                </li>
                <li className="flex items-center">
                  <div className="bg-ama-blue-500 w-2 h-2 rounded-full mr-2"></div>
                  Secteur commercial et marketing
                </li>
                <li className="flex items-center">
                  <div className="bg-ama-blue-500 w-2 h-2 rounded-full mr-2"></div>
                  Assistant administratif
                </li>
              </ul>
            </div>
            
            <div className="bg-ama-gold/10 p-8 rounded-lg border border-ama-gold/30">
              <p className="text-ama-dark font-semibold italic">
                "Notre programme est mis à jour chaque année pour répondre aux besoins des entreprises et aux évolutions technologiques du marché."
              </p>
              <p className="mt-4 text-right text-ama-gray">— Direction pédagogique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

