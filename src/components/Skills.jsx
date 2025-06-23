import { useState } from 'react';
import { Code, Database, Palette, Wrench, Zap, Star } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary to-electric",
      bgColor: "from-primary/20 to-electric/20",
      borderColor: "border-primary/30",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "Next.js", level: 70, icon: "▲" },
        { name: "Redux", level: 80, icon: "🔄" }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      color: "from-secondary to-neon",
      bgColor: "from-secondary/20 to-neon/20",
      borderColor: "border-secondary/30",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-accent to-primary",
      bgColor: "from-accent/20 to-primary/20",
      borderColor: "border-accent/30",
      skills: [
        { name: "Git/GitHub", level: 80, icon: "🐙" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Postman", level: 85, icon: "📮" },
      ]
    },
   
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-electric to-secondary bg-clip-text text-transparent animate-gradient">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mastering the art of full-stack development with cutting-edge technologies
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-dark shadow-lg`
                    : 'bg-dark-card text-gray-400 hover:text-white border border-gray-700 hover:border-primary/30'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="animate-scale-in">
            <div className={`p-8 bg-gradient-to-br ${skillCategories[activeCategory].bgColor} rounded-3xl border ${skillCategories[activeCategory].borderColor} backdrop-blur-xl`}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group p-6 bg-dark-card/50 rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-500 hover:scale-105 backdrop-blur-xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Proficiency</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out rounded-full relative`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tech Stack Universe
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "React", color: "from-blue-400 to-blue-600" },
                { name: "Node.js", color: "from-green-400 to-green-600" },
                { name: "MongoDB", color: "from-green-500 to-green-700" },
                { name: "Express", color: "from-gray-400 to-gray-600" },
                { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                { name: "Tailwind", color: "from-cyan-400 to-cyan-600" },
                { name: "Next.js", color: "from-gray-800 to-black" },
                { name: "Redux", color: "from-purple-400 to-purple-600" },
                { name: "Docker", color: "from-blue-400 to-blue-500" },
                { name: "Git", color: "from-red-400 to-red-600" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className={`group px-6 py-3 bg-gradient-to-r ${tech.color} rounded-2xl text-white font-semibold hover:scale-110 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative z-10">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Optimized performance and blazing-fast load times",
                color: "from-primary to-electric"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Best Practices",
                description: "Following industry standards and clean code principles",
                color: "from-secondary to-neon"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Modern Stack",
                description: "Latest technologies and cutting-edge frameworks",
                color: "from-accent to-primary"
              }
            ].map((highlight, index) => (
              <div 
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-dark-card to-dark-light rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-500 hover:scale-105"
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${highlight.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-dark">
                    {highlight.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;