import React from 'react';
import { Code2, Monitor, Laptop, Rocket } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your specific business needs."
  },
  {
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
    title: "Power Apps Development",
    description: "Custom Power Apps solutions to automate workflows, increase productivity, and streamline business processes."
  },
  {
    icon: <Laptop className="w-8 h-8 text-pink-400" />,
    title: "Web Application Development",
    description: "Responsive and dynamic web applications that deliver exceptional user experiences."
  },
  {
    icon: <Rocket className="w-8 h-8 text-green-400" />,
    title: "Technical Consulting",
    description: "Strategic guidance to help you make informed decisions about your technology stack."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Services & Expertise
        </h2>
        <p className="text-gray-300 text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          Delivering comprehensive software solutions that empower businesses to thrive in the digital age
        </p>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}