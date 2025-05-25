
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/abdelrahman-anany",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/abdelrahman-anany",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:eng.abdelrahman.anany@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              Abdelrahman Anany
            </h3>
            <p className="text-slate-400">
              Flutter Developer & Software Engineer
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:bg-slate-600 transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © {currentYear} Abdelrahman Anany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
