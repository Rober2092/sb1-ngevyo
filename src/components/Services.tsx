import React from 'react';
import { Code2, Monitor, Laptop, Rocket } from 'lucide-react';

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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-4">Services & Expertise</h3>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Delivering comprehensive software solutions that empower businesses to thrive in the digital age
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} 
              className="group bg-gray-800/50 p-8 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 border border-gray-700/50">
              <div className="bg-gray-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}