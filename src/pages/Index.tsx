
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ValuesSection from '../components/ValuesSection';
import CarouselSection from '../components/CarouselSection';
import TimelineSection from '../components/TimelineSection';
import CampusSection from '../components/CampusSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import useAOS from '../hooks/useAOS';

const Index = () => {
  useAOS();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValuesSection />
      <CarouselSection />
      <CampusSection />
      <TimelineSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
