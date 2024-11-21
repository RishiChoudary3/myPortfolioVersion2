import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'iBusiness Software',
      logo: 'https://i.ibb.co/xSS1y6W/Screenshot-2024-11-21-at-8-28-18-PM.png',
      role: 'Salesforce Administrator and Developer',
      period: 'November 2023 - Present',
      description: 'Salesforce Administrator and Developer Driving Innovation at iBusiness funding.',
      achievements: [
        'Evaluated, installed, and configured third-party applications (Nintex Docgen) from the Salesforce AppExchange to enhance functionality.',
        'Spearheaded the implementation and customization of Lender AI using Salesforce Nintex Package, resulting in a 30% increase in loan application processing efficiency and a 25% reduction in manual errors.',
        'Developed and customized Nintex Package in Salesforce to streamline document package creation and object management, resulting in a 40% reduction in turnaround time for loan processing.',
        'Developed custom Salesforce applications using Apex, Visualforce, Lightning Components (Aura and LWC), and JavaScript.',
        'Implemented custom business logic and workflows using Apex triggers, classes, and batch processes to run Multiple documents.',
        'Configured Salesforce data models, apps, record types, page layouts, validation rules, formulas, process automation via Flow builder, custom reports, dynamic dashboards, custom home pages, dynamic forms and other modules.',
        'Responsible for deploying metadata from Developer Sandbox to Preprod and Production sandboxes.',
        'Architected sharing and visibility, including custom profiles, permissions, permission sets, and sharing rules.',
        'Responsible for integrating Salesforce with Loan Builder and Use of funds tool.',
        'Collaborated with cross-functional teams to implement Salesforce solutions and optimize business processes.',
        'Developing and enforcing data governance policies to maintain data quality and consistency across the organization.'
      ]
    },
    {
      company: 'Magnum Opus IT Consulting Pvt. Ltd.',
      logo: 'https://i.ibb.co/SJpnMXz/Screenshot-2024-11-21-at-8-28-31-PM.png',
      role: 'Salesforce Consultant',
      period: 'September 2023 - November 2023',
      description: 'Salesforce Consultant for Pinkerton',
      achievements: [
        'Proficiently configured and prepared customization specifications for Salesforce, aligning them with precise business requirements.',
        'Executed data migration and finalized configurations seamlessly on both Preprod and Production Sandboxes.',
        'Spearheaded developments, customizations, and conducted thorough integration testing to guarantee the seamless functionality of the Salesforce.',
        'Collaborated effectively with various support teams to identify and resolve customer issues promptly, contributing to a streamlined and efficient support process.'
      ]
    },
    {
      company: 'Tech Mahindra',
      logo: 'https://i.ibb.co/r3MNPgP/download.png',
      role: 'Salesforce Developer',
      period: 'June 2021 - September 2023',
      description: 'Salesforce implementation for global businesses with offices across the UK, Europe, and America, supporting 25000+ users.',
      achievements: [
        'Ensures related projects and tasks are completed within specifications, on time, and within budget.',
        'Worked closely with Project Managers to plan and release scope.',
        'Configuring, maintaining and monitoring Azure Boards for teams process and status of allocated user stories / tasks.',
        'Responsible for configuring and preparing the customization specs for Salesforce to achieve the business requirements.',
        'FIT / GAP analysis for business requirements and provide solutions to GAPs.',
        'Responsible for AS-IS and Show and tell sessions demonstration and document MOMs.',
        'Responsible for documentation and Sign-offs.',
        'Implemented business requirements using Object, Tab, Fields, Apex, Lightning Web Components (LWC), Lightning events, Lightning Data Service, Apex classes, Apex Triggers.',
        'Involved in designed, developed, deployed and code review, optimization and fixing review comments.',
        'Implemented different lightning components, writing business logic in Apex Controller.',
        'Responsible for Data migration and final configuration on Preprod or Prod sandboxes.',
        'Responsible for developments, customizations and testing.',
        'Work effectively with other support teams and help resolve customer issues.',
        'Provide UAT training to client\'s key and end-users.'
      ]
    },
    {
      company: 'Gowtham Model Schools',
      logo: 'https://i.ibb.co/hVHLds9/IMG-7327.png',
      role: 'Salesforce Admin and Developer',
      period: 'April 2020 - May 2021',
      description: 'Implement and configure Next education ERP and Salesforce CRM for Education',
      achievements: [
        'Configure the K-12 Education to make the school\'s education services grow to 60% during COVID.',
        'Hired and trained Technical and Support department staff.',
        'Providing appropriate solutions to the technical issues faced by the staff, students and parents.',
        'Prioritizing and dealing with the issues in a timely manner.',
        'Keeping track of the customer queries and resolving the issues as early as possible.',
        'Ensuring that the fault is completely rectified and ensuring that it does not appear in the future.',
        'Preparing technical support team performance reports.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="section-subtitle">Career journey and achievements</p>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-2 h-2 rounded-full bg-blue-500 -translate-x-1/2 hidden md:block
                             group-hover:scale-150 group-hover:bg-blue-400 transition-all duration-300"></div>

                <div className="md:ml-16 card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/5 backdrop-blur">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-400">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="mt-2 text-gray-300">{exp.description}</p>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2 text-gray-400">
                            <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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

export default Experience;