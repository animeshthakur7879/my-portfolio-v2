import { Camera, Sparkles, Zap, Star } from 'lucide-react';

const PhotoSection = () => {
  return (
    <section id="photoSection" className="py-20 bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-electric to-secondary bg-clip-text text-transparent animate-gradient">
                Meet The Developer
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Behind every great code is a passionate developer ready to turn your vision into reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Section */}
            <div className="relative animate-slide-in-left">
              <div className="relative group">
                {/* Main Photo Container */}
                <div className="relative w-full max-w-md mx-auto">
                  {/* Holographic Frame */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-electric to-secondary p-1 rounded-3xl animate-rotate-slow">
                    <div className="w-full h-full bg-dark rounded-3xl"></div>
                  </div>
                  
                  {/* Photo Container */}
                  <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-3xl backdrop-blur-xl border border-primary/30">
                    <div className="aspect-square bg-gradient-to-br from-dark-light to-dark-card rounded-2xl flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                      {/* Placeholder for your photo */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative">
                        <img className='w-full h-full object-contain absolute' src='/public/animesh-photo-final.jpg'/>
                        
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-8 animate-bounce-slow opacity-50"></div>
                      </div>
                      
                      {/* Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 p-3 bg-primary/20 rounded-full border border-primary/50 animate-bounce-slow backdrop-blur-xl">
                    <Sparkles className="w-6 h-6 text-primary animate-spin" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-3 bg-secondary/20 rounded-full border border-secondary/50 animate-bounce-slow backdrop-blur-xl" style={{ animationDelay: '1s' }}>
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="absolute top-1/2 -right-8 p-2 bg-neon/20 rounded-full border border-neon/50 animate-bounce-slow backdrop-blur-xl" style={{ animationDelay: '2s' }}>
                    <Star className="w-4 h-4 text-neon animate-pulse" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl animate-pulse-glow -z-10"></div>
                </div>

                {/* Status Indicators */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full border border-accent/50 backdrop-blur-xl">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-accent text-xs font-medium">Available</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full border border-primary/50 backdrop-blur-xl">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary text-xs font-medium">Remote</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Passionate <span className="text-primary">Creator</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                 
About
Hi! I'm Animesh Thakur, a passionate MERN stack developer currently pursuing my computer science degree at Medi-Caps University. With a solid foundation in programming languages like Java, C, and C++, I specialize in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js.
My interest in technology drives me to create impactful solutions that enhance user experiences and streamline processes. I'm continuously expanding my skills through various development projects .
I thrive on collaboration and innovation, and I'm always eager to learn new technologies and techniques to elevate my work. Let’s connect and explore how we can create something amazing together!
                </p>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-gray-400 text-sm">Projects Delivered</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-gray-400 text-sm">Availability</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-neon/10 to-neon/5 rounded-2xl border border-neon/20 hover:border-neon/40 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-neon mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
              </div> */}

              {/* Specialties */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Current Focus</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Full Stack Development',
                    'System Architecture',
                    'UI/UX Design',
                    'Performance Optimization',
                    
                  ].map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;