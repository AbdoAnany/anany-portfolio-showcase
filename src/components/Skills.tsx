
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Dart", level: 95 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Material-UI", level: 90 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
      ]
    },
    {
      title: "Testing & Architecture",
      skills: [
        { name: "Unit Testing", level: 90 },
        { name: "Clean Architecture", level: 85 },
        { name: "BLoC Pattern", level: 90 },
        { name: "TDD", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-yellow-400">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-yellow-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
