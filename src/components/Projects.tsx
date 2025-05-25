
import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce application built with Flutter, featuring real-time inventory, secure payments, and user analytics. Supports multiple payment gateways and has offline capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Stripe API", "BLoC"],
      githubUrl: "https://github.com/abdelrahman-anany/ecommerce-app",
      liveUrl: "https://play.google.com/store",
      featured: true,
      stats: { downloads: "10K+", rating: "4.8" }
    },
    {
      title: "Task Management System",
      description: "A productivity app with offline capabilities, real-time sync, and collaborative features for team management. Built with clean architecture principles.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Flutter", "SQLite", "Provider", "REST API"],
      githubUrl: "https://github.com/abdelrahman-anany/task-manager",
      liveUrl: "https://taskmanager-demo.web.app",
      featured: true,
      stats: { users: "5K+", rating: "4.6" }
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "OpenWeather API", "Geolocator"],
      githubUrl: "https://github.com/abdelrahman-anany/weather-app",
      liveUrl: "https://weather-flutter-demo.web.app",
      featured: false,
      stats: { downloads: "2K+", rating: "4.4" }
    },
    {
      title: "Fitness Tracking App",
      description: "Health and fitness tracker with workout plans, progress monitoring, and social sharing features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "HealthKit", "Firebase"],
      githubUrl: "https://github.com/abdelrahman-anany/fitness-tracker",
      liveUrl: "https://fitness-app-demo.web.app",
      featured: false,
      stats: { users: "3K+", rating: "4.5" }
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with end-to-end encryption, file sharing, and group chat functionality.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Socket.io", "Node.js"],
      githubUrl: "https://github.com/abdelrahman-anany/chat-app",
      liveUrl: "https://chat-flutter-demo.web.app",
      featured: false,
      stats: { messages: "100K+", rating: "4.7" }
    },
    {
      title: "Food Delivery Platform",
      description: "Complete food delivery solution with restaurant management, order tracking, and payment integration.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Google Maps", "PayPal API"],
      githubUrl: "https://github.com/abdelrahman-anany/food-delivery",
      liveUrl: "https://fooddelivery-demo.web.app",
      featured: false,
      stats: { orders: "50K+", rating: "4.6" }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800 hover:border-yellow-400/30 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    Featured
                  </div>
                )}
                {project.stats && (
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <div className="bg-gray-900/80 px-2 py-1 rounded text-xs text-gray-300">
                      {Object.entries(project.stats)[0][1]} {Object.entries(project.stats)[0][0]}
                    </div>
                    <div className="bg-gray-900/80 px-2 py-1 rounded text-xs text-yellow-400 flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      {project.stats.rating}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs font-medium border border-gray-700"
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
                    className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
