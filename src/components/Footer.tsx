
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
      href: "mailto:dev@abdoanany.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Abdelrahman Anany
            </h3>
            <p className="text-muted-foreground">
              Flutter Developer & Software Engineer
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 border border-border"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} Abdelrahman Anany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
