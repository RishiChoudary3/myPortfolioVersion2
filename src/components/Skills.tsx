import React from 'react';
import { Code, Database, Briefcase, Wrench, Cloud, Box, GitBranch, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Salesforce',
      skills: ['Apex', 'Visualforce', 'Lightning Components (Aura, LWC)', 'SOQL', 'SOSL', 'AI', 'Agentforce', 'Data Cloud']
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Business Analyst',
      skills: ['Requirements Gathering', 'Data Analysis', 'Documentations (BRD)', 'Presentation', 'Project Lifecycle (Agile, Scrum)', 'Training and Support']
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: 'Integration Tools',
      skills: ['REST', 'SOAP APIs', 'MuleSoft', 'Salesforce Connect']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Management',
      skills: ['Data Loader', 'Data Import Wizard']
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Development Tools',
      skills: ['Visual Studio Code', 'Salesforce DX', 'Github', 'Git']
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Other Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Java', 'Power BI', 'AWS', 'DocuSign']
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Appexchange',
      skills: ['Nintex DocGen Package']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Project Management',
      skills: ['Jira', 'Azure DevOps', 'AWS']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="section-container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="section-subtitle">Comprehensive technical skills and professional capabilities</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="icon-box mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;