import React from 'react';
import { Settings, Users, Workflow, Shield, Bot, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Platform Configuration',
      description: 'Custom object creation, field management, and security settings optimization.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Management',
      description: 'Profile configuration, permission sets, and role hierarchy setup.'
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Process Automation',
      description: 'Workflow rules, process builder, and flow development.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Access',
      description: 'Data security, sharing rules, and field-level security implementation.'
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'Custom Development',
      description: 'Apex triggers, Lightning components, and Visualforce pages.'
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Analytics',
      description: 'Report development, dashboard creation, and Einstein Analytics.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300">
            Comprehensive Salesforce solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg transform hover:-translate-y-2 transition-transform"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;