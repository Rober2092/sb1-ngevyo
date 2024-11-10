import React from 'react';
import { ChevronRight, Code, Laptop, Server } from 'lucide-react';
import CodeAnimation from './CodeAnimation';

export default function Hero() {
  return (
    <header className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-gray-900/80 border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold animate-gradient">Hugo Alvarado</h1>
            <div className="flex gap-6 text-sm sm:text-base">
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center mt-24 lg:mt-0">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-gradient leading-tight">
              Transforming Ideas into<br />Digital Excellence
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Crafting innovative software solutions that drive business growth and digital transformation.
              From concept to deployment, I deliver robust and scalable applications.
            </p>

            {/* Tech stack icons */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-full bg-blue-500/10 animate-float">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-sm text-gray-400">Frontend</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-full bg-purple-500/10 animate-float" style={{ animationDelay: '0.2s' }}>
                  <Server className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm text-gray-400">Backend</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-full bg-pink-500/10 animate-float" style={{ animationDelay: '0.4s' }}>
                  <Laptop className="w-6 h-6 text-pink-400" />
                </div>
                <span className="text-sm text-gray-400">Full Stack</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <a href="#contact" 
                className="group glass-effect px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/25">
                Get Started 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" 
                className="glass-effect px-8 py-3 rounded-full font-semibold transition-all hover:bg-white/5 text-center">
                View Portfolio
              </a>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto lg:mx-0 lg:justify-self-end">
            <CodeAnimation />
          </div>
        </div>
      </div>
    </header>
  );
}