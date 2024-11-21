import React, { useEffect, useRef } from 'react';
import { Linkedin, FileDown, ChevronDown, Mail, Github, ExternalLink } from 'lucide-react';
import Typed from 'typed.js';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Salesforce Administrator', 'Salesforce Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90"></div>
          </div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <p className="text-blue-400 font-medium mb-4 animate-slide-in-left">Hello & Welcome</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-scale-in animate-delay-100">
            I Am <span className="text-blue-400">Rishi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 mb-8 animate-slide-in-right animate-delay-200">
            <span ref={typedRef}></span>
          </h2>
          
          <div className="flex justify-center gap-4 mb-8 animate-fade-in animate-delay-300">
            <a href="https://www.linkedin.com/in/mekala-rishi-choudary" 
               className="p-2 glass-card hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="https://github.com/RishiChoudary3" 
               className="p-2 glass-card hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-white" />
            </a>
          </div>
          
          <a href="https://drive.google.com/file/d/19W1LUSYjhhLbpf1TFz2IWx23S6tz78k5/view?usp=sharing"
             className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 animate-fade-in animate-delay-300">
            <FileDown className="w-5 h-5" />
            Download CV
          </a>
        </div>
        
        <a href="#about" 
           className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-white" />
        </a>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Services />
      <Contact />
    </div>
  );
}

export default App;