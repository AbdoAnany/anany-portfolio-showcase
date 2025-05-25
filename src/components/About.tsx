
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Flutter developer with a strong background in computer science 
              and a love for creating innovative mobile applications. With experience across 
              multiple industries, I specialize in building scalable, user-friendly apps that 
              solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development has taken me through various exciting projects, 
              from e-commerce platforms to logistics solutions. I'm always eager to learn new 
              technologies and apply best practices in clean architecture and testing.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="w-72 h-72 bg-card rounded-2xl flex items-center justify-center shadow-inner">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
