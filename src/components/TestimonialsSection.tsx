
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Diplômée 2023",
    image: "https://i.pravatar.cc/150?img=5",
    content: "La formation AMA a complètement transformé ma vision du secteur. J'ai aujourd'hui un poste à responsabilité dans une entreprise leader de l'industrie.",
    company: "TechVision Inc."
  },
  {
    id: 2,
    name: "Alexandre Dupont",
    role: "Diplômé 2022",
    image: "https://i.pravatar.cc/150?img=12",
    content: "L'approche pratique et les intervenants de qualité m'ont permis d'acquérir des compétences directement applicables en entreprise.",
    company: "DataSphere"
  },
  {
    id: 3,
    name: "Emma Bernard",
    role: "Étudiante en 2ème année",
    image: "https://i.pravatar.cc/150?img=9",
    content: "Les projets réels et l'accompagnement personnalisé font toute la différence. Je me sens déjà prête pour le monde professionnel.",
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ama-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ama-dark mb-4" data-aos="fade-in">Ils ont choisi l'<span className="text-ama-gold">AMA</span></h2>
          <p className="text-lg text-ama-gray max-w-2xl mx-auto" data-aos="fade-in" data-aos-delay="100">
            Découvrez les témoignages de nos étudiants et diplômés qui partagent leur expérience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-xl shadow-lg border border-ama-blue-100 transform hover:-translate-y-2 transition-transform" 
              data-aos="fade-in" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex items-center mb-6">
                <Avatar className="h-14 w-14 border-2 border-ama-gold">
                  <img src={testimonial.image} alt={testimonial.name} className="object-cover" />
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-bold text-ama-dark">{testimonial.name}</h3>
                  <p className="text-sm text-ama-gray">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-xs text-ama-gold font-medium">{testimonial.company}</p>
                  )}
                </div>
              </div>
              <p className="text-ama-gray italic">" {testimonial.content} "</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-ama-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-in">
          <div className="p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto border-l-4 border-ama-gold">
            <p className="text-xl text-ama-dark font-medium italic">
              "L'AMA forme des experts reconnus dans le secteur. Nous recrutons régulièrement leurs diplômés pour leur expertise et leur capacité d'adaptation."
            </p>
            <div className="mt-4">
              <p className="font-bold">Marc Lejeune</p>
              <p className="text-sm text-ama-gray">Directeur des Ressources Humaines, Innovative Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
