import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="font-serif text-2xl font-bold text-ama-blue-500">
            IUT-<span className="text-ama-gold">AMA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="link-underline font-medium hover:text-ama-blue-500 transition-colors">
            Accueil
          </Link>
          <Link to="/formation" className="link-underline font-medium hover:text-ama-blue-500 transition-colors">
            Formation
          </Link>
          <Link to="/admission" className="link-underline font-medium hover:text-ama-blue-500 transition-colors">
            Admission
          </Link>
          <Link to="/contact" className="link-underline font-medium hover:text-ama-blue-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/*<Button className="hidden md:block bg-ama-blue-500 hover:bg-ama-blue-600 text-white">
          S'inscrire
        </Button>*/}

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-ama-blue-500" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 space-y-4 flex flex-col">
            <Link to="/" className="px-2 py-2 hover:bg-ama-blue-50 rounded">
              Accueil
            </Link>
            <Link to="/formation" className="px-2 py-2 hover:bg-ama-blue-50 rounded">
              Formation
            </Link>
            <Link to="/admission" className="px-2 py-2 hover:bg-ama-blue-50 rounded">
              Admission
            </Link>
            <Link to="/contact" className="px-2 py-2 hover:bg-ama-blue-50 rounded">
              Contact
            </Link>
            {/*<Button className="bg-ama-blue-500 hover:bg-ama-blue-600 text-white">
              S'inscrire
            </Button>*/}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
