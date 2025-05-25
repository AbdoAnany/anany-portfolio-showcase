
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "GLC Paints",
      period: "2023 - Present",
      description: "Developed and maintained Flutter applications for paint industry solutions, implementing clean architecture and state management.",
      technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
      color: "from-primary to-blue-600"
    },
    {
      title: "Mobile App Developer",
      company: "Miraathcom",
      period: "2022 - 2023",
      description: "Built cross-platform mobile applications for real estate platform, focusing on user experience and performance optimization.",
      technologies: ["Flutter", "REST APIs", "State Management", "UI/UX"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Software Developer",
      company: "Dolato Ice Cream",
      period: "2021 - 2022",
      description: "Created mobile solutions for food industry, implementing features for inventory management and customer engagement.",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "Analytics"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Junior Developer",
      company: "Souqel Goomla",
      period: "2020 - 2021",
      description: "Contributed to e-commerce platform development, learning industry best practices and agile development methodologies.",
      technologies: ["Flutter", "Dart", "Version Control", "Testing"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-slate-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-sm">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${exp.color} text-white shadow-sm`}>
                    {exp.period}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <h4 className="text-primary font-semibold mb-4">{exp.company}</h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm border border-border font-medium"
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
