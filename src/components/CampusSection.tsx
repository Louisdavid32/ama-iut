import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const mediaItems = [
  { type: 'image', src: '/1.jpeg', alt: 'Campus AMA' },
  { type: 'image', src: '/2.jpeg', alt: 'Équipements AMA' },
  { type: 'image', src: '/3.jpeg', alt: 'Technologie AMA' },
  { type: 'video', src: '/img/WhatsApp Video 2025-05-05 at 20.03.46.mp4', poster: '/4.jpeg', alt: 'Vidéo Campus' },
  { type: 'image', src: '/5.jpeg', alt: 'Salle de classe' },
  { type: 'image', src: '/6.jpeg', alt: 'Espace détente' },
  { type: 'image', src: '/campus/1.png', alt: 'Espace détente' },
  { type: 'image', src: '/campus/2.png', alt: 'Espace détente' },
  { type: 'image', src: '/campus/3.png', alt: 'Espace détente' },
  { type: 'image', src: '/campus/4.png', alt: 'Espace détente' },

];

const CampusSection: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  };

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-ama-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre <span className="text-ama-blue-500">Campus</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-ama-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Un environnement moderne et inspirant pour développer votre potentiel dans des conditions optimales
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.div 
              className="bg-ama-blue-50 p-6 rounded-xl border border-ama-blue-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-ama-blue-600 mb-2">Équipements de pointe</h3>
              <p className="text-ama-gray">Nos salles sont équipées des dernières technologies pour vous offrir une expérience d'apprentissage optimale.</p>
            </motion.div>
            
            <motion.div 
              className="bg-ama-blue-50 p-6 rounded-xl border border-ama-blue-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-ama-blue-600 mb-2">Espaces collaboratifs</h3>
              <p className="text-ama-gray">Des zones dédiées au travail d'équipe et à l'innovation pour développer vos projets.</p>
            </motion.div>
            
            <motion.div 
              className="bg-ama-blue-50 p-6 rounded-xl border border-ama-blue-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-ama-blue-600 mb-2">Environnement stimulant</h3>
              <p className="text-ama-gray">Un cadre inspirant qui favorise la concentration et la créativité.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="bg-ama-blue-500 hover:bg-ama-blue-600 group">
                Visiter le campus 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                }
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.campus-next',
                prevEl: '.campus-prev',
              }}
              pagination={{
                clickable: true,
                el: '.campus-pagination',
              }}
              loop
              centeredSlides={true}
              slideToClickedSlide={false}
              preventClicksPropagation={true}
              preventInteractionOnTransition={true}
              className="!overflow-visible !px-2"
              onSlideChange={() => {
                // Pause all videos when slide changes
                videoRefs.current.forEach(video => {
                  if (video) video.pause();
                });
              }}
            >
              {mediaItems.map((item, index) => (
                <SwiperSlide key={index} className="h-full !flex justify-center">
                  <div className="rounded-xl overflow-hidden h-64 md:h-80 w-full max-w-[400px] relative group mx-auto">
                    {item.type === 'image' ? (
                      <img 
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <>
                        <video 
                          ref={el => videoRefs.current[index] = el}
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          poster={item.poster}
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <div className="absolute bottom-4 left-4 flex space-x-2">
                          <button 
                            onClick={() => togglePlay(index)}
                            className="bg-black/50 text-white p-2 z-50 rounded-full hover:bg-black/70 transition"
                          >
                            {videoRefs.current[index]?.paused ? (
                              <Play size={16} className="fill-current" />
                            ) : (
                              <Pause size={16} className="fill-current" />
                            )}
                          </button>
                          <button 
                            onClick={() => toggleMute(index)}
                            className="bg-black/50 text-white p-2 z-50 rounded-full hover:bg-black/70 transition"
                          >
                            {videoRefs.current[index]?.muted ? (
                              <VolumeX size={16} className="fill-current" />
                            ) : (
                              <Volume2 size={16} className="fill-current" />
                            )}
                          </button>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">{item.alt}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <button className="campus-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md -translate-x-2 hidden md:block">
              <ChevronLeft className="text-ama-blue-600" size={24} />
            </button>
            <button className="campus-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md translate-x-2 hidden md:block">
              <ChevronRight className="text-ama-blue-600" size={24} />
            </button>
            
            <div className="campus-pagination flex justify-center mt-4 space-x-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;