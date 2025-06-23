import { ChevronDown, Download, Sparkles, Zap, Code, Rocket } from 'lucide-react';

const Hero = () => {
  const downloadResume = () => {
    // Create a dummy resume file download
    const link = document.createElement('a');
    link.href = '/Animesh_Thakur_Resume.pdf'; // Replace with actual resume file path
    link.download = 'Animesh_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-neural-network"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Animated Icons */}
          <div className="flex justify-center gap-8 mb-8 animate-slide-up">
            <div className="p-3 bg-primary/10 rounded-full border border-primary/30 animate-bounce-slow">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="p-3 bg-secondary/10 rounded-full border border-secondary/30 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <div className="p-3 bg-accent/10 rounded-full border border-accent/30 animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <Rocket className="w-8 h-8 text-accent" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none">
              <span className="bg-gradient-to-r from-primary via-electric via-secondary to-neon bg-clip-text text-transparent">
                ANIMESH
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                THAKUR
              </span>
            </h2>
          </div>

          {/* Subtitle with Glitch Effect */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-primary font-bold animate-cyber-glitch">MERN STACK</span>
            <span className="mx-4 text-electric">•</span>
            <span className="text-secondary font-bold">DEVELOPER</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Crafting <span className="text-primary font-semibold">scalable web apps</span> with 
            MERN. And a <span className="text-secondary font-semibold">love for</span> intuitive  
            <span className="text-accent font-semibold"> user experiences</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <button
              onClick={() => scrollToAbout()}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary to-electric text-dark font-bold text-lg rounded-2xl hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-primary/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-3">
                <Sparkles className="w-6 h-6 animate-spin" />
                Explore My Universe
              </div>
            </button>
            
            <button
              onClick={downloadResume}
              className="group relative px-10 py-5 border-2 border-primary text-primary font-bold text-lg rounded-2xl hover:bg-primary hover:text-dark transition-all duration-500 flex items-center gap-3 hover:scale-110 shadow-2xl hover:shadow-primary/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="relative flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Download Resume
              </div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <button 
              onClick={scrollToAbout} 
              className="text-primary hover:text-electric transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium group-hover:text-electric">Scroll to explore</span>
                <ChevronDown className="w-8 h-8 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary text-xs font-mono animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;