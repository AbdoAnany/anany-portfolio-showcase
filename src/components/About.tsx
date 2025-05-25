
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Flutter developer with a strong background in computer science 
              and a love for creating innovative mobile applications. With experience across 
              multiple industries, I specialize in building scalable, user-friendly apps that 
              solve real-world problems.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in software development has taken me through various exciting projects, 
              from e-commerce platforms to logistics solutions. I'm always eager to learn new 
              technologies and apply best practices in clean architecture and testing.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">3+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">10+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
