import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
    link: 'https://github.com/johndoe/ecommerce-platform',
  },
  {
    title: 'Weather App',
    description: 'A responsive weather application using React and OpenWeatherMap API.',
    link: 'https://github.com/johndoe/weather-app',
  },
  {
    title: 'Task Manager',
    description: 'A simple task management tool built with React and Firebase.',
    link: 'https://github.com/johndoe/task-manager',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;