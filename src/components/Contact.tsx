import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-purple-600/5" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-gray-700/50">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Let's Work Together</h3>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}