
import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce application built with Flutter, featuring real-time inventory, secure payments, and user analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Stripe API", "BLoC"],
      githubUrl: "https://github.com/example/ecommerce-app",
      liveUrl: "https://play.google.com/store",
      featured: true
    },
    {
      title: "Task Management System",
      description: "A productivity app with offline capabilities, real-time sync, and collaborative features for team management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Flutter", "SQLite", "Provider", "REST API"],
      githubUrl: "https://github.com/example/task-manager",
      liveUrl: "https://taskmanager-demo.web.app",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "OpenWeather API", "Geolocator", "Charts"],
      githubUrl: "https://github.com/example/weather-app",
      liveUrl: "https://weather-flutter-demo.web.app",
      featured: false
    },
    {
      title: "Fitness Tracking App",
      description: "Health and fitness tracker with workout plans, progress monitoring, and social sharing features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "HealthKit", "Firebase", "ML Kit"],
      githubUrl: "https://github.com/example/fitness-tracker",
      liveUrl: "https://fitness-app-demo.web.app",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with end-to-end encryption, file sharing, and group chat functionality.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Socket.io", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/example/chat-app",
      liveUrl: "https://chat-flutter-demo.web.app",
      featured: false
    },
    {
      title: "Food Delivery Platform",
      description: "Complete food delivery solution with restaurant management, order tracking, and payment integration.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Google Maps", "Firebase", "PayPal API"],
      githubUrl: "https://github.com/example/food-delivery",
      liveUrl: "https://fooddelivery-demo.web.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-600 text-slate-200 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    Live Demo →
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
