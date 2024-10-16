import React from 'react';
import { Mail, GitHub, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="flex flex-col items-center">
        <p className="text-lg mb-4">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:john.doe@example.com"
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} className="mr-2" /> Email
          </a>
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center hover:bg-gray-900 transition-colors"
          >
            <GitHub size={20} className="mr-2" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-800 transition-colors"
          >
            <Linkedin size={20} className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;