import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maci Ames",
    role: "Founder, Women's Embrace",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
    content: "Hugo's expertise in web development helped bring Women's Embrace to life. His attention to detail and understanding of our mission created a beautiful, user-friendly platform that perfectly represents our brand.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "Hugo transformed our business with a custom ERP solution that streamlined our operations. His technical expertise and attention to detail are outstanding.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content: "The web application Hugo developed exceeded our expectations. His ability to understand our needs and deliver a user-friendly solution was impressive.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Operations, HealthTech Inc",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    content: "Working with Hugo was a game-changer for our healthcare platform. His expertise in secure, HIPAA-compliant solutions was exactly what we needed.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Client Testimonials
        </h2>
        <p className="text-gray-300 text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          Don't just take my word for it - hear what my clients have to say
        </p>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex gap-1 mb-2 justify-center sm:justify-start">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base text-center sm:text-left">{testimonial.content}</p>
                  <div className="text-center sm:text-left">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}