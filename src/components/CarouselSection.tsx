
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarouselSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Découvrez notre campus moderne",
      description: "Des installations à la pointe de la technologie pour favoriser votre apprentissage et votre développement professionnel.",
      image: "/img/1.jpeg",
      buttonText: "Visiter le campus",
      buttonLink: "/contact"
    },
    {
      id: 2,
      title: "Formation professionnalisante",
      description: "Notre programme est conçu pour répondre aux besoins actuels du marché du travail et vous préparer à une carrière réussie.",
      image: "/img/2.jpeg",
      buttonText: "Voir le programme",
      buttonLink: "/formation"
    },
    {
      id: 3,
      title: "Rejoignez notre communauté",
      description: "Intégrez un réseau dynamique d'étudiants, d'enseignants et de professionnels qui vous soutiendront tout au long de votre parcours.",
      image: "/img/3.jpeg",
      buttonText: "Postuler maintenant",
      buttonLink: "/admission"
    },
    {
      id: 4,
      title: "Participez à nos ateliers pratiques",
      description: "Mettez en application vos connaissances grâce à des projets concrets encadrés par des professionnels du secteur.",
      image: "/img/4.jpeg",
      buttonText: "Découvrir les ateliers",
      buttonLink: "/ateliers"
    },
    {
      id: 5,
      title: "Accompagnement personnalisé",
      description: "Bénéficiez d’un suivi académique et professionnel tout au long de votre formation pour maximiser votre réussite.",
      image: "/img/5.jpeg",
      buttonText: "En savoir plus",
      buttonLink: "/accompagnement"
    },
    {
      id: 6,
      title: "Événements étudiants",
      description: "Vivez une vie étudiante dynamique grâce à nos clubs, compétitions et événements culturels tout au long de l’année.",
      image: "/img/6.jpeg",
      buttonText: "Explorer les événements",
      buttonLink: "/vie-etudiante"
    },
    {
      id: 7,
      title: "Stages et opportunités",
      description: "Accédez à un réseau de partenaires pour des stages enrichissants et des débouchés professionnels concrets.",
      image: "/img/7.jpeg",
      buttonText: "Consulter les offres",
      buttonLink: "/stages"
    },
    {
      id: 8,
      title: "Technologies émergentes",
      description: "Formez-vous sur les dernières innovations comme l'IA, la cybersécurité ou la blockchain grâce à des modules spécialisés.",
      image: "/img/8.jpeg",
      buttonText: "Voir les modules",
      buttonLink: "/technologies"
    },
    {
      id: 9,
      title: "Ouverture à l'international",
      description: "Profitez de nos accords avec des universités partenaires pour vivre une expérience d’apprentissage à l’étranger.",
      image: "/img/9.jpeg",
      buttonText: "Voir les partenariats",
      buttonLink: "/international"
    },
    {
      id: 10,
      title: "Équipe pédagogique experte",
      description: "Apprenez auprès d'enseignants et intervenants reconnus pour leur expertise et leur passion de transmettre.",
      image: "/img/10.jpeg",
      buttonText: "Rencontrer l’équipe",
      buttonLink: "/equipe"
    },
    {
      id: 11,
      title: "Projets collaboratifs",
      description: "Travaillez en équipe sur des projets transversaux pour développer vos compétences en gestion et en communication.",
      image: "/img/11.jpeg",
      buttonText: "Voir des exemples",
      buttonLink: "/projets"
    },
    {
      id: 12,
      title: "Bibliothèque et ressources numériques",
      description: "Accédez à un large catalogue de ressources pédagogiques en ligne pour enrichir vos apprentissages.",
      image: "/img/12.jpeg",
      buttonText: "Accéder aux ressources",
      buttonLink: "/bibliotheque"
    },
    {
      id: 13,
      title: "Témoignages d'anciens élèves",
      description: "Découvrez les parcours inspirants de nos diplômés et comment ils ont atteint leurs objectifs professionnels.",
      image: "/img/13.jpeg",
      buttonText: "Lire les témoignages",
      buttonLink: "/temoignages"
    },
    {
      id: 14,
      title: "Certifications professionnelles",
      description: "Obtenez des certifications reconnues qui valorisent votre profil sur le marché du travail.",
      image: "/img/14.jpeg",
      buttonText: "Consulter les certifications",
      buttonLink: "/certifications"
    },
    {
      id: 15,
      title: "Innovation pédagogique",
      description: "Profitez de méthodes d’enseignement modernes, interactives et orientées projets pour une meilleure compréhension.",
      image: "/img/15.jpeg",
      buttonText: "Découvrir notre pédagogie",
      buttonLink: "/pedagogie"
    },
    {
      id: 16,
      title: "Hackathons et compétitions",
      description: "Mesurez-vous à d’autres étudiants lors d’événements innovants pour développer vos compétences et votre réseau.",
      image: "/img/16.jpeg",
      buttonText: "Voir les événements",
      buttonLink: "/evenements"
    },
    {
      id: 17,
      title: "Campus connecté",
      description: "Notre campus intelligent facilite l’accès aux services, à l'information et à la vie universitaire.",
      image: "/img/17.jpeg",
      buttonText: "Explorer les services",
      buttonLink: "/services"
    },
    {
      id: 18,
      title: "Entrepreneuriat étudiant",
      description: "Lancez vos idées grâce à notre incubateur et à un accompagnement dédié pour les jeunes entrepreneurs.",
      image: "/img/18.jpeg",
      buttonText: "Rejoindre l’incubateur",
      buttonLink: "/incubateur"
    },
    {
      id: 19,
      title: "Égalité des chances",
      description: "Nous œuvrons pour une éducation accessible à toutes et tous, quels que soient les parcours.",
      image: "/img/19.jpeg",
      buttonText: "Nos engagements",
      buttonLink: "/egalite"
    },
    {
      id: 20,
      title: "Sécurité et bien-être",
      description: "Des dispositifs sont mis en place pour garantir un environnement sain, sécurisé et bienveillant pour chacun.",
      image: "/img/20.jpeg",
      buttonText: "En savoir plus",
      buttonLink: "/securite"
    },
    {
      id: 21,
      title: "Bourses et aides financières",
      description: "Accédez à différentes aides pour financer vos études, sous conditions ou sur critères sociaux.",
      image: "/img/21.jpeg",
      buttonText: "Voir les dispositifs",
      buttonLink: "/bourses"
    },
    {
      id: 22,
      title: "Activités sportives",
      description: "Le sport fait partie intégrante de notre formation : compétitions, clubs et infrastructures dédiées.",
      image: "/img/22.jpeg",
      buttonText: "Découvrir le sport",
      buttonLink: "/sport"
    },
    {
      id: 23,
      title: "Culture et expression",
      description: "Exprimez vos talents artistiques à travers nos ateliers théâtre, photo, musique ou écriture.",
      image: "/img/23.jpeg",
      buttonText: "S’inscrire à un atelier",
      buttonLink: "/culture"
    },
    {
      id: 24,
      title: "Orientation et insertion",
      description: "Bénéficiez de notre service d’orientation pour construire un projet d’avenir clair et cohérent.",
      image: "/img/24.jpeg",
      buttonText: "Contacter un conseiller",
      buttonLink: "/orientation"
    },
    {
      id: 25,
      title: "Partenaires institutionnels",
      description: "Notre école collabore avec de nombreux acteurs publics et privés pour garantir la qualité de l’enseignement.",
      image: "/img/25.jpeg",
      buttonText: "Voir nos partenaires",
      buttonLink: "/partenaires"
    }
  ];
  

  return (
    <section className="py-20 bg-ama-light relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-ama-blue-500 mb-4">Découvrir l'AMA</h2>
          <p className="text-ama-gray max-w-2xl mx-auto">
            Explorez notre campus, nos formations et notre communauté à travers ces quelques images
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <Carousel className="relative">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-bold text-white mb-3">{slide.title}</h3>
                      <p className="text-white/90 mb-6 max-w-lg">
                        {slide.description}
                      </p>
                      <Link to={slide.buttonLink}>
                        <Button className="bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium inline-flex items-center">
                          {slide.buttonText}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-none text-ama-dark h-10 w-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-none text-ama-dark h-10 w-10" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((slide) => (
              <span 
                key={slide.id} 
                className="block h-2 w-8 rounded-full bg-ama-blue-200 opacity-50 hover:opacity-100 cursor-pointer transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
