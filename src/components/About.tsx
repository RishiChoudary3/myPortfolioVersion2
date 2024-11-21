import React from 'react';
import { Code, Database, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Salesforce professional with expertise in both administration and development. 
            With a strong foundation in CRM systems and cloud technologies, I help businesses optimize their 
            Salesforce implementations and create efficient solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg transform hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Salesforce Admin</h3>
            <p className="text-gray-400">
              Expert in platform configuration, user management, and business process automation.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg transform hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Salesforce Developer</h3>
            <p className="text-gray-400">
              Proficient in Apex, Lightning Web Components, and Visualforce development.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg transform hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Expert</h3>
            <p className="text-gray-400">
              Skilled in data management, migration, and integration solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;