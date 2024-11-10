import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com" }
  ];

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Hugo Alvarado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}