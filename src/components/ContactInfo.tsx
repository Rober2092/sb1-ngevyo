import React from 'react';
import { Mail, Github, Linkedin, Phone, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

export default function ContactInfo() {
  const socialLinks = [
    {
      icon: <Phone className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "tel:+13233581766",
      label: "(323) 358-1766",
      newTab: false
    },
    {
      icon: <Mail className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "mailto:rober2091@icloud.com",
      label: "rober2091@icloud.com",
      newTab: false
    },
    {
      icon: <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      newTab: true
    },
    {
      icon: <Github className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "https://github.com",
      label: "GitHub",
      newTab: true
    },
    {
      icon: <Twitter className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "https://twitter.com",
      label: "Twitter",
      newTab: true
    },
    {
      icon: <Instagram className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "https://instagram.com",
      label: "Instagram",
      newTab: true
    },
    {
      icon: <Facebook className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "https://facebook.com",
      label: "Facebook",
      newTab: true
    },
    {
      icon: <Youtube className="w-5 h-5 group-hover:scale-110 transition" />,
      href: "https://youtube.com",
      label: "YouTube",
      newTab: true
    }
  ];

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
      <p className="text-gray-300 mb-6">
        Ready to start your next project? Contact me for a free consultation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.newTab ? "_blank" : undefined}
            rel={link.newTab ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition group"
          >
            {link.icon}
            <span className="text-sm">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}