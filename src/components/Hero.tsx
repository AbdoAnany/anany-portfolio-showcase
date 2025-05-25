
import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-muted border border-border rounded-full text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Abdelrahman
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto">
            <p className="font-semibold text-2xl md:text-3xl mb-4 text-foreground">
              Flutter Developer & Software Engineer
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Crafting beautiful, high-performance mobile applications with cutting-edge technology and clean architecture principles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={scrollToContact}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-lg"
            >
              <Mail size={20} />
              Let's Work Together
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="group border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary hover:bg-muted transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Download size={20} />
              Download CV
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Technologies</div>
          </div>
          <div className="text-center p-4 bg-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
