import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'MANIPAL ACADEMY FOR HIGHER EDUCATION',
      degree: 'PG Entrepreneurship and Innovation',
      period: 'Oct 2024 - Present',
      grade: null
    },
    {
      school: 'BIRLA INSTITUTE OF TECHNICAL SCIENCES, PILANI',
      degree: 'MBA Business Analytics',
      period: 'Dec 2021 - Dec 2023',
      grade: '7.5/10'
    },
    {
      school: 'RMK COLLEGE OF ENGINEERING AND TECHNOLOGY',
      degree: 'B.E. Computer Science and Engineering',
      period: 'April 2016 - Nov 2020',
      grade: '6.81/10'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="section-subtitle">Academic background and qualifications</p>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2 hidden md:block
                             group-hover:scale-150 group-hover:bg-blue-400 transition-all duration-300"></div>

                <div className="md:ml-16 card group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="icon-box flex-shrink-0 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {edu.school}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400">{edu.degree}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            <span>{edu.period}</span>
                          </div>
                          {edu.grade && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                CGPA: {edu.grade}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;