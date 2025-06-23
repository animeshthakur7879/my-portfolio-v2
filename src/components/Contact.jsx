import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Zap, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "animeshthakur7648@example.com",
      link: "mailto:animeshthakur7648@example.com",
      color: "from-primary to-electric"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9111733077",
      link: "tel:+919111733077",
      color: "from-secondary to-neon"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Indore, India",
      link: "#",
      color: "from-accent to-primary"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/animeshthakur7879",
      color: "hover:text-gray-300",
      bgColor: "from-gray-600 to-gray-800"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/animesh-thakur-linked/",
      color: "hover:text-blue-400",
      bgColor: "from-blue-500 to-blue-700"
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-electric to-secondary bg-clip-text text-transparent animate-gradient">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's create something extraordinary together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's <span className="text-primary">Connect</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  I'm always excited about new opportunities and innovative projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-center gap-4 p-6 bg-gradient-to-r from-dark-card to-dark-light rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-dark">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-medium">{info.title}</div>
                      <div className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-6">Follow My Journey</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-4 bg-gradient-to-r ${social.bgColor} rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2 animate-pulse-glow" />
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20">
                  <Star className="w-8 h-8 text-secondary mx-auto mb-2 animate-pulse-glow" />
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-dark-card to-dark-light rounded-3xl p-8 border border-gray-800 hover:border-primary/30 transition-all duration-300 backdrop-blur-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 hover:border-gray-600"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 hover:border-gray-600"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 hover:border-gray-600"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-all duration-300 resize-none hover:border-gray-600"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-electric text-dark font-bold rounded-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;