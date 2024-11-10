import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Enterprise Resource Planning System",
    description: "A comprehensive ERP solution with inventory management, HR, and financial modules built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Power Apps Workflow Automation",
    description: "Custom Power Apps solution for automating approval workflows and document management.",
    image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&q=80",
    tags: ["Power Apps", "Power Automate", "SharePoint", "Azure"],
    liveUrl: "https://example.com"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with real-time inventory, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management system with appointment scheduling and electronic health records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MySQL", "Docker"],
    liveUrl: "https://example.com"
  }
];

export function Projects() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-300 text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
          Explore some of my recent work and successful client projects
        </p>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}