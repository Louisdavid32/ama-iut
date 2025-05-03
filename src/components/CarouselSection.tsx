
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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      buttonText: "Visiter le campus",
      buttonLink: "/contact"
    },
    {
      id: 2,
      title: "Formation professionnalisante",
      description: "Notre programme est conçu pour répondre aux besoins actuels du marché du travail et vous préparer à une carrière réussie.",
      image: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      buttonText: "Voir le programme",
      buttonLink: "/formation"
    },
    {
      id: 3,
      title: "Rejoignez notre communauté",
      description: "Intégrez un réseau dynamique d'étudiants, d'enseignants et de professionnels qui vous soutiendront tout au long de votre parcours.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      buttonText: "Postuler maintenant",
      buttonLink: "/admission"
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
