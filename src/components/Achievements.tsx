import React from 'react';
import { Award, Medal, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Salesforce Administrator',
      description: 'Certified Platform Administrator with expertise in system configuration and user management.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Platform Developer I',
      description: 'Certified developer proficient in Apex programming and Lightning Web Components.'
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: 'Service Cloud Consultant',
      description: 'Specialized in implementing and optimizing Service Cloud solutions.'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300">
            Professional certifications and accomplishments in the Salesforce ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;