
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  useAOS();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-ama-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-ama-blue-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-ama-gold/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
            <p className="text-xl text-white/90 mb-8">
              Nous sommes à votre disposition pour répondre à vos questions et vous accompagner
              dans votre projet de formation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-ama-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-ama-blue-500 mb-8">Nos Coordonnées</h2>
                
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
                
                <div className="mt-10 p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-ama-dark mb-4">Horaires d'ouverture</h3>
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
              
              <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-left">
                <h2 className="text-2xl font-bold text-ama-blue-500 mb-6">Envoyez-nous un message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ama-dark mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ama-dark mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
                      placeholder="Votre email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ama-dark mb-1">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ama-dark mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ama-blue-300 focus:border-ama-blue-300"
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
      
      <Footer />
    </div>
  );
};

export default Contact;
