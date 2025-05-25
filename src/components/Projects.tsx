
import React from 'react';
import { Github, ExternalLink, Star, Zap, Users, Download } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A comprehensive e-commerce solution built with Flutter, featuring real-time inventory management, secure payment processing, and advanced user analytics. Includes offline capabilities and multi-platform support.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Firebase", "Stripe API", "BLoC", "REST API"],
      githubUrl: "https://github.com/abdelrahman-anany/ecommerce-app",
      liveUrl: "https://play.google.com/store",
      featured: true,
      stats: { downloads: "10K+", rating: "4.8", users: "5K+" },
      category: "Mobile App"
    },
    {
      title: "Task Management Platform",
      description: "A powerful productivity application with offline-first architecture, real-time collaboration features, and advanced project management tools. Built with clean architecture principles.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Flutter", "SQLite", "Provider", "REST API", "WebSocket"],
      githubUrl: "https://github.com/abdelrahman-anany/task-manager",
      liveUrl: "https://taskmanager-demo.web.app",
      featured: true,
      stats: { users: "3K+", rating: "4.6", downloads: "8K+" },
      category: "Productivity"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive weather maps, severe weather alerts, and detailed meteorological data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "OpenWeather API", "Geolocator", "Charts"],
      githubUrl: "https://github.com/abdelrahman-anany/weather-app",
      liveUrl: "https://weather-flutter-demo.web.app",
      featured: false,
      stats: { downloads: "6K+", rating: "4.4", users: "2K+" },
      category: "Utility"
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive health and fitness tracker with personalized workout plans, progress monitoring, social sharing features, and integration with wearable devices.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "HealthKit", "Firebase", "ML Kit"],
      githubUrl: "https://github.com/abdelrahman-anany/fitness-tracker",
      liveUrl: "https://fitness-app-demo.web.app",
      featured: false,
      stats: { users: "4K+", rating: "4.5", downloads: "7K+" },
      category: "Health"
    },
    {
      title: "Real-time Chat Application",
      description: "Secure messaging platform with end-to-end encryption, file sharing capabilities, group chat functionality, and advanced notification system.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Socket.io", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/abdelrahman-anany/chat-app",
      liveUrl: "https://chat-flutter-demo.web.app",
      featured: false,
      stats: { messages: "100K+", rating: "4.7", users: "5K+" },
      category: "Communication"
    },
    {
      title: "Food Delivery Platform",
      description: "Complete food delivery ecosystem with restaurant management dashboard, real-time order tracking, payment integration, and delivery optimization algorithms.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Google Maps", "PayPal API", "Firebase"],
      githubUrl: "https://github.com/abdelrahman-anany/food-delivery",
      liveUrl: "https://fooddelivery-demo.web.app",
      featured: false,
      stats: { orders: "25K+", rating: "4.6", restaurants: "150+" },
      category: "E-commerce"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <Zap size={16} className="mr-2" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in mobile development and problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10 border border-white/10 hover:border-yellow-400/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10">
                  {project.category}
                </div>
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
                
                {/* Quick stats overlay */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-white/20">
                      {key === 'rating' && <Star size={10} fill="currentColor" className="inline mr-1 text-yellow-400" />}
                      {key === 'downloads' && <Download size={10} className="inline mr-1 text-blue-400" />}
                      {key === 'users' && <Users size={10} className="inline mr-1 text-green-400" />}
                      {value}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10 hover:border-yellow-400/30 hover:text-yellow-400 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group/link"
                  >
                    <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                    Source Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-sm font-medium group/link"
                  >
                    <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="https://github.com/abdelrahman-anany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
