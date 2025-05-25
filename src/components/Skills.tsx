
import React from 'react';
import { Code, Database, Settings, TestTube, Smartphone, Cloud, GitBranch, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Material-UI", "React", "TypeScript"]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Python", "Node.js", "Firebase", "MongoDB", "REST APIs"]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: ["GitHub Actions", "Docker", "AWS", "CI/CD", "Git"]
    },
    {
      title: "Architecture & Testing",
      icon: TestTube,
      skills: ["Clean Architecture", "BLoC Pattern", "Unit Testing", "TDD"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 border border-gray-800 hover:border-yellow-400/20 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                  <category.icon size={24} className="text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="px-3 py-2 bg-gray-800/50 rounded-lg text-gray-300 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
