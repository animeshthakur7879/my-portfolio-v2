import { useState } from 'react';
import { ExternalLink, Github, Play, Star, Zap, Code } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Wheelie - Car Rental Platform",
      description: "This full-stack MERN car rental app features admin and user dashboards. Admins can manage car listings, rentals, and customer reviews, while users can browse, book, and manage car reservations. It includes authentication, role-based access, and a responsive UI",
      image: "/public/Wheelie.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Redux"],
      github: "https://github.com/animeshthakur7879/Wheelie-Car-Rental",
      live: "https://wheelie-frontend.onrender.com/",
      category: "fullstack",
      featured: true,
      status: "Live"
    },
    {
      title: "DevPractice – Online Code Playground",
      description: "A code playground inspired by CodePen and JSFiddle, featuring live HTML, CSS, and JS editing with real-time preview. Integrated the Monaco Editor to provide a VS Code–like experience. Implemented Firebase Authentication for secure login ",
      image: "/public/DevPractice.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Redux"],
      github: "https://github.com/animeshthakur7879/DevPractice.git",
      live: "https://dev-practice-v1.onrender.com/",
      category: "fullstack",
      featured: true,
      status: "Live"
    },
    {
      title: "TradeX - Crypto Trading Platform ",
      description: "Designed and developed a crypto trading platform that lets users explore trending cryptocurrencies and view real-time insights. It offers a simulated trading experience where users can add coins to a cart for mock purchases",
      image: "/public/tradeX.png",
      tech: ["React", "Redux", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/animeshthakur7879/TradeX-Crypto-app",
      live: "https://tradex-crypto.netlify.app/",
      category: "frontend",
      featured: true,
      status: "Live"
    },
    {
      title: "KAL-TAK New App",
      description: "A News App that fetches real-time headlines from NewsAPI.org and presents them through a clean, user-friendly interface. The app includes a light/dark theme toggle, a search bar for finding specific news topics, and a weather display showing current conditions for any selected location",
      image: "/public/News APP.png",
      tech: ["React", "News API", "Weather API", "Redux" , "Tailwind CSS"],
      github: "https://github.com/animeshthakur7879/news-app-tailwind",
      live: "https://github.com/animeshthakur7879/news-app-tailwind",
      category: "frontend",
      featured: false,
      status: ""
    },
    {
      title: "My To-Do App",
      description: "Built a React-based ToDo App with Tailwind CSS, supporting full CRUD operations.Includes a clean, responsive UI with dark and light theme toggle.Easily add, edit, delete, and manage tasks in real-time.",
      image: "/public/todo.png",
      tech: ["React", "Tailwind CSS", "Context", "Reducers"],
      github: "https://github.com/animeshthakur7879/Tailwind-Todo-App.git",
      live: "https://todo-app-v3-tailwind.netlify.app/",
      category: "frontend",
      featured: false,
      status: "Live"
    },
    {
      title: "Websites Clones",
      description: "Here are few websites that I have cloned using HTML & CSS , feel free to check them out !!",
      image: "/public/websites.png",
      tech: ["html", "css", "js"],
      github: "https://websites-clones.netlify.app/",
      live: "https://websites-clones.netlify.app/",
      category: "clone",
      featured: false,
      status: "Live"
    } , 
    {
      title: "UI Clones",
      description: "Here are some UI designs / dashboards that I have created using HTML , CSS , bootstrap . Feel free to check them out !!",
      image: "/public/ui.png",
      tech: ["html", "css", "js"],
      github: "https://ui-design-showcase.netlify.app/",
      live: "https://ui-design-showcase.netlify.app/",
      category: "clone",
      featured: false,
      status: "Live"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: <Star className="w-4 h-4" /> },
    { id: 'featured', name: 'Featured', icon: <Zap className="w-4 h-4" /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Code className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Play className="w-4 h-4" /> }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'from-accent to-green-400';
      case 'Beta': return 'from-primary to-blue-400';
      case 'Development': return 'from-secondary to-purple-400';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-light via-dark to-dark-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-electric to-secondary bg-clip-text text-transparent animate-gradient">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative solutions and cutting-edge applications
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary to-electric text-dark shadow-lg'
                    : 'bg-dark-card text-gray-400 hover:text-white border border-gray-700 hover:border-primary/30'
                }`}
              >
                {filter.icon}
                {filter.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-dark-card to-dark-light rounded-3xl overflow-hidden border border-gray-800 hover:border-primary/30 transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white rounded-full shadow-lg`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.github}
                      className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.live}
                      className="p-3 bg-gradient-to-r from-primary to-electric text-dark rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 rounded-full hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-primary to-electric text-dark font-semibold rounded-lg hover:scale-105 transition-all duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border border-primary/20 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Let's collaborate and create the next groundbreaking project together. 
                I'm always excited to work on innovative ideas and challenging problems.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-primary to-electric text-dark font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;