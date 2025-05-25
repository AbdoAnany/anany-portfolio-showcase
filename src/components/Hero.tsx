
import React from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="text-yellow-400">Abdelrahman</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            <p className="mb-4">
              Flutter Developer & Software Engineer
            </p>
            <p className="text-lg leading-relaxed">
              Passionate about creating beautiful, high-performance mobile applications
              with cutting-edge technology and clean architecture principles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Hire Me
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-10 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
