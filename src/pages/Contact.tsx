
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Clock, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  useAOS();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ama-light to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-ama-gold/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ama-dark mb-6">Contactez-nous</h1>
            <p className="text-xl text-ama-dark/80 mb-8">
              Nous sommes à votre disposition pour répondre à vos questions et vous accompagner
              dans votre projet de formation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-ama-blue-600 mb-8">Nos Coordonnées</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-ama-blue-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <MapPin className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ama-dark mb-2">Adresse</h3>
                      <p className="text-ama-gray">
                        123 Avenue de la Formation<br />
                        75001 Paris<br />
                        France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-ama-blue-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Phone className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ama-dark mb-2">Téléphone</h3>
                      <p className="text-ama-gray">+33 (0)1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-ama-blue-50 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Mail className="text-ama-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ama-dark mb-2">Email</h3>
                      <p className="text-ama-gray">contact@ama-formation.fr</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-ama-blue-50 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="text-ama-blue-500 w-6 h-6" />
                    <h3 className="text-xl font-bold text-ama-dark">Horaires d'ouverture</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-ama-gray">Lundi - Vendredi</span>
                      <span className="font-medium">9h00 - 18h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-ama-gray">Samedi</span>
                      <span className="font-medium">9h00 - 12h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-ama-gray">Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100" data-aos="fade-left">
                <h2 className="text-2xl font-bold text-ama-blue-600 mb-6">Envoyez-nous un message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ama-dark mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ama-dark mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
                      placeholder="Votre email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ama-dark mb-1">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ama-dark mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-ama-gold hover:bg-amber-400 text-ama-dark font-medium py-3">
                    Envoyer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-ama-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Nous localiser</h2>
              <p className="text-ama-gray max-w-2xl mx-auto">
                Notre campus est idéalement situé au cœur de Paris, facilement accessible en transports en commun
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md h-[400px]" data-aos="fade-up">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081893!2d2.292292615509614!3d48.85836397928678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1629462115485!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Carte du campus"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-ama-blue-600 mb-4">Notre équipe</h2>
              <p className="text-ama-gray max-w-2xl mx-auto">
                Rencontrez les personnes qui vous accompagneront tout au long de votre parcours
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                    alt="Sophie Martin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-ama-dark">Sophie Martin</h3>
                <p className="text-ama-blue-500">Directrice des admissions</p>
                <Separator className="my-3 bg-gray-200" />
                <p className="text-ama-gray">sophie.martin@ama-formation.fr</p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Thomas Dupont"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-ama-dark">Thomas Dupont</h3>
                <p className="text-ama-blue-500">Responsable pédagogique</p>
                <Separator className="my-3 bg-gray-200" />
                <p className="text-ama-gray">thomas.dupont@ama-formation.fr</p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Marie Leclerc"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-ama-dark">Marie Leclerc</h3>
                <p className="text-ama-blue-500">Conseillère orientation</p>
                <Separator className="my-3 bg-gray-200" />
                <p className="text-ama-gray">marie.leclerc@ama-formation.fr</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
