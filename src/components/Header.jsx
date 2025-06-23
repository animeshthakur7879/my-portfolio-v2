import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-dark/80 backdrop-blur-xl border-b border-primary/30 shadow-lg shadow-primary/10' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="relative">
              <Zap className="w-8 h-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full animate-ping"></div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-electric to-secondary bg-clip-text text-transparent animate-gradient">
              ANIMESH
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'photoSection' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className="relative text-gray-300 hover:text-primary transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary transition-all duration-300 relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            {isMobileMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary/20 backdrop-blur-xl bg-dark/90 rounded-lg animate-slide-up">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'photoSection' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-300 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;