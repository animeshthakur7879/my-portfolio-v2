import { Code2, Rocket, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable code that stands the test of time",
      color: "from-primary to-electric"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Optimizer",
      description: "Crafting lightning-fast applications with optimal user experience",
      color: "from-secondary to-neon"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Driver",
      description: "Constantly exploring new technologies and methodologies",
      color: "from-accent to-primary"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Solution Architect",
      description: "Designing robust systems that solve real-world problems",
      color: "from-neon to-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-light via-dark to-dark-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-electric to-secondary bg-clip-text text-transparent animate-gradient">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Section */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  My <span className="text-primary">Journey</span>
                </h3>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-primary font-semibold">MERN Stack Developer</span> with 
                    an insatiable curiosity for creating exceptional digital experiences. My journey began with 
                    a simple question: "How can technology make life better?"
                  </p>
                  <p>
                    This curiosity evolved into a deep passion for building <span className="text-secondary font-semibold">scalable, 
                    modern web applications</span> that not only meet technical requirements but also deliver 
                    outstanding user experiences.
                  </p>
                  <p>
                    I specialize in the <span className="text-accent font-semibold">MERN stack</span> and love 
                    the challenge of transforming complex problems into elegant, simple solutions. Every project 
                    is an opportunity to push boundaries and create something extraordinary.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 backdrop-blur-xl">
                <h4 className="text-xl font-semibold text-white mb-3">My Philosophy</h4>
                <p className="text-gray-300 italic">
                  "Great code is not just about functionality—it's about creating experiences that inspire, 
                  solutions that scale, and innovations that matter."
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-right">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-br from-dark-card to-dark-light rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${achievement.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-dark">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
            {[
              { number: "50+", label: "Projects Completed", color: "primary" },
              { number: "3+", label: "Years Experience", color: "secondary" },
              { number: "100%", label: "Client Satisfaction", color: "accent" },
              { number: "24/7", label: "Support Available", color: "neon" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-dark-card to-dark-light rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;