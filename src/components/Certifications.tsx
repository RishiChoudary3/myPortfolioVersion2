import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: 'October 2024',
      color: 'blue'
    },
    {
      title: 'Salesforce Certified Platform App Builder',
      issuer: 'Salesforce',
      date: 'February 2024',
      color: 'blue'
    },
    {
      title: 'Salesforce Certified Administrator',
      issuer: 'Salesforce',
      date: 'August 2023',
      color: 'blue'
    },
    {
      title: 'AWS Solutions Architecture Virtual Experience',
      issuer: 'AWS (Forage)',
      date: 'June 2023',
      color: 'orange'
    },
    {
      title: 'Power BI Virtual Case Experience',
      issuer: 'PwC (Forage)',
      date: 'June 2023',
      color: 'yellow'
    },
    {
      title: 'Agile Methodology Virtual Experience',
      issuer: 'Cognizant (Forage)',
      date: 'June 2023',
      color: 'green'
    },
    {
      title: 'Salesforce Certified Platform Developer I',
      issuer: 'Salesforce',
      date: 'June 2023',
      color: 'blue'
    },
    {
      title: 'DevOps Engineer Expert',
      issuer: 'Microsoft',
      date: 'May 2023',
      color: 'purple'
    },
    {
      title: 'Azure Administrator Associate',
      issuer: 'Microsoft',
      date: 'May 2023',
      color: 'purple'
    },
    {
      title: 'AWS Solutions Architect Associate',
      issuer: 'AWS',
      date: 'March 2020',
      color: 'orange'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="section-container">
        <h2 className="section-title">Professional Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="section-subtitle">Industry recognized certifications and achievements</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="icon-box group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;