import React, { useRef, useState } from 'react';
import { CalendarDays, BookOpen, Users, FileText, ClipboardList, MessageSquare, Settings, Award, ChevronRight, Briefcase, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Set to true to match autoPlay

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl border-2 border-ama-blue-300">
      <div className="aspect-w-16 aspect-h-9 bg-black relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover max-h-[400px]"
          poster="/1.jpeg"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/spot.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5
        </video>
        <button
          onClick={togglePlay}
          className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'} transition-opacity`}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all">
            {isPlaying ? (
              <Pause className="text-white" size={32} fill="currentColor" />
            ) : (
              <Play className="text-white" size={32} fill="currentColor" />
            )}
          </div>
        </button>
      </div>
      <div className="bg-white p-4 text-center border-t-2 border-ama-blue-300">
        <h3 className="font-bold text-ama-blue-600">Découvrez notre formation en vidéo</h3>
        <p className="text-sm text-ama-gray">Témoignages d'étudiants et visite des installations</p>
      </div>
    </div>
  );
};

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-ama-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Vidéo + Présentation */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-ama-blue-600 mb-4">
              Formation <span className="text-ama-gold">Assistant Manager</span>
            </h2>
            <p className="text-xl text-ama-gray mb-6">
              Un parcours complet en 2 ans avec des matières professionnelles et générales pour une insertion optimale.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-ama-blue-600 mb-3 flex items-center">
                <Award className="mr-2 text-ama-gold" />
                Après l'obtention du BTS :
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-ama-gold-200 shadow-sm">
                  <h4 className="font-bold text-ama-gold flex items-center">
                    <ChevronRight className="mr-1" size={18} /> GRH
                  </h4>
                  <p className="text-sm text-ama-gray">Gestion des Ressources Humaines</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-ama-green-200 shadow-sm">
                  <h4 className="font-bold text-ama-green-600 flex items-center">
                    <ChevronRight className="mr-1" size={18} /> OGA
                  </h4>
                  <p className="text-sm text-ama-gray">Organisation et Gestion Administrative</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-ama-gold hover:bg-ama-gold-600 text-white shadow-md">
              Télécharger le programme complet
            </Button>
          </div>
          
          {/* Conteneur Vidéo */}
          <VideoPlayer />
        </div>

        {/* Programme des 2 années */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-ama-blue-600 mb-12 text-center">
            PROGRAMME DÉTAILLÉ SUR <span className="text-ama-gold">2 ANS</span>
          </h3>
          
          <div className="relative">
            {/* Barre de timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-ama-blue-400 to-ama-gold z-0 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Première Année */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-ama-blue-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-ama-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl">1</div>
                  <h4 className="text-2xl font-bold text-ama-blue-600">PREMIÈRE ANNÉE</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <FileText className="text-ama-blue-500" />, title: "Comptabilité" },
                    { icon: <Settings className="text-ama-blue-500" />, title: "Technique professionnelle" },
                    { icon: <Users className="text-ama-blue-500" />, title: "Relation professionnelle" },
                    { icon: <ClipboardList className="text-ama-blue-500" />, title: "Organisation de l'action" },
                    { icon: <MessageSquare className="text-ama-blue-500" />, title: "Communication" },
                    { icon: <BookOpen className="text-ama-blue-500" />, title: "Informatique" },
                    { icon: <BookOpen className="text-ama-blue-500" />, title: "Mathématiques générales" },
                    { icon: <BookOpen className="text-ama-blue-500" />, title: "Mathématiques financières" },
                    { icon: <BookOpen className="text-ama-blue-500" />, title: "Statistiques" },
                    { icon: <MessageSquare className="text-ama-blue-500" />, title: "Anglais" },
                    { icon: <MessageSquare className="text-ama-blue-500" />, title: "Français" },
                    { icon: <BookOpen className="text-ama-blue-500" />, title: "Économie générale" },
                    { icon: <BookOpen className="text-ama-blue-500" />, title: "Économie financière" },
                    { icon: <ClipboardList className="text-ama-blue-500" />, title: "Méthodologie de l'action" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-ama-blue-50 p-3 rounded-lg">
                      <span className="mr-3 mt-1">{item.icon}</span>
                      <span className="text-ama-gray font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Deuxième Année */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-ama-gold-300 mt-10 md:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-ama-gold text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl">2</div>
                  <h4 className="text-2xl font-bold text-ama-gold">DEUXIÈME ANNÉE</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <ClipboardList className="text-ama-gold" />, title: "Organisation et méthodes administratives" },
                    { icon: <MessageSquare className="text-ama-gold" />, title: "Technique d'expression anglaise" },
                    { icon: <BookOpen className="text-ama-gold" />, title: "Mathématique commerciale" },
                    { icon: <Users className="text-ama-gold" />, title: "Gestion des ressources humaines" },
                    { icon: <Users className="text-ama-gold" />, title: "Relation professionnelle" },
                    { icon: <Settings className="text-ama-gold" />, title: "Technique de base de l'assistant manager" },
                    { icon: <ClipboardList className="text-ama-gold" />, title: "Organisation de l'action" },
                    { icon: <FileText className="text-ama-gold" />, title: "Commerce et classement" },
                    { icon: <BookOpen className="text-ama-gold" />, title: "Économie générale" },
                    { icon: <ClipboardList className="text-ama-gold" />, title: "Organisation d'un événement" },
                    { icon: <Settings className="text-ama-gold" />, title: "Création et organisation des entreprises" },
                    { icon: <FileText className="text-ama-gold" />, title: "Comptabilité" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-ama-gold-50 p-3 rounded-lg">
                      <span className="mr-3 mt-1">{item.icon}</span>
                      <span className="text-ama-gray font-medium">{item.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Poursuites d'études */}
        <div className="bg-gradient-to-r from-ama-blue-50 to-ama-gold-50 p-8 rounded-2xl border-2 border-ama-blue-300 mb-20">
          <h3 className="text-2xl font-bold text-ama-blue-600 mb-8 text-center">
            PERSPECTIVES APRÈS LE <span className="text-ama-gold">BTS AMA</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-2 border-ama-gold-300 hover:border-ama-gold-400 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-ama-gold mr-3" />
                <h4 className="text-xl font-bold text-ama-gold">GRH</h4>
              </div>
              <p className="text-ama-gray mb-4">
                Spécialisation en Gestion des Ressources Humaines avec des modules avancés en :
              </p>
              <ul className="space-y-2">
                {["Droit du travail", "GPEC", "Recrutement", "Formation", "Paie"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-ama-gold-100 p-1 rounded-full mr-3">
                      <ChevronRight className="h-3 w-3 text-ama-gold" />
                    </div>
                    <span className="text-ama-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-2 border-ama-green-300 hover:border-ama-green-400 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-ama-green-600 mr-3" />
                <h4 className="text-xl font-bold text-ama-green-600">OGA</h4>
              </div>
              <p className="text-ama-gray mb-4">
                Expertise en Organisation et Gestion Administrative avec des compétences en :
              </p>
              <ul className="space-y-2">
                {["Process métiers", "Gestion documentaire", "Qualité", "Audit", "Organisation"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-ama-green-100 p-1 rounded-full mr-3">
                      <ChevronRight className="h-3 w-3 text-ama-green-600" />
                    </div>
                    <span className="text-ama-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md border-2 border-ama-blue-300 hover:border-ama-blue-400 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-ama-blue-500 mr-3" />
                <h4 className="text-xl font-bold text-ama-blue-500">Autres parcours</h4>
              </div>
              <p className="text-ama-gray mb-4">
                Nos étudiants poursuivent également vers :
              </p>
              <ul className="space-y-2">
                {["Licences professionnelles", "Écoles de commerce", "Formations spécialisées", "Bachelor", "Entrée directe en entreprise"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-ama-blue-100 p-1 rounded-full mr-3">
                      <ChevronRight className="h-3 w-3 text-ama-blue-500" />
                    </div>
                    <span className="text-ama-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Citation finale */}
        <motion.div 
          className="bg-gradient-to-r from-ama-blue-600 to-ama-gold p-8 rounded-2xl shadow-2xl text-center text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Award className="h-10 w-10" />
          </div>
          <blockquote className="text-xl font-medium mb-4 italic">
            "La formation AMA offre un équilibre parfait entre théorie et pratique, avec des enseignants issus du monde professionnel et des projets concrets en entreprise."
          </blockquote>
          <p className="font-light">— Responsable pédagogique</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;