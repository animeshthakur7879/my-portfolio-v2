import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-dark-light to-dark border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and Brand */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-electric rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-dark">AT</span>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ANIMESH THAKUR
              </div>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Crafting exceptional digital experiences with passion, precision, and cutting-edge technology.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-5 h-5 text-primary animate-bounce" />
            <span>and lots of</span>
            <Coffee className="w-5 h-5 text-amber-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((link, index) => (
              <button
                key={link.name}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div>
              © {new Date().getFullYear()} Animesh Thakur. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Built with React & Tailwind CSS</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 left-4 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;