
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "GLC Paints",
      period: "2023 - Present",
      description: "Developed and maintained Flutter applications for paint industry solutions, implementing clean architecture and state management.",
      technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Mobile App Developer",
      company: "Miraathcom",
      period: "2022 - 2023",
      description: "Built cross-platform mobile applications for real estate platform, focusing on user experience and performance optimization.",
      technologies: ["Flutter", "REST APIs", "State Management", "UI/UX"],
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Software Developer",
      company: "Dolato Ice Cream",
      period: "2021 - 2022",
      description: "Created mobile solutions for food industry, implementing features for inventory management and customer engagement.",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "Analytics"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Junior Developer",
      company: "Souqel Goomla",
      period: "2020 - 2021",
      description: "Contributed to e-commerce platform development, learning industry best practices and agile development methodologies.",
      technologies: ["Flutter", "Dart", "Version Control", "Testing"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-bl from-gray-900 via-gray-850 to-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Professional Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400 to-blue-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-gray-700/30 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 border border-gray-600/20">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${exp.color} text-white`}>
                    {exp.period}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-yellow-400 font-semibold mb-3">{exp.company}</h4>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-600/50 text-slate-200 rounded-full text-sm border border-gray-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
