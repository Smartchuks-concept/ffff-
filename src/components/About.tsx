import React from 'react';

const About = () => {
  return (
    <section id="about" className="my-16">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
          alt="John Doe"
          className="w-64 h-64 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <p className="text-lg mb-4">
            Hi, I'm John Doe, a passionate web developer with 5 years of experience in creating
            beautiful and functional websites. I specialize in React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me hiking in the mountains or experimenting with new
            recipes in the kitchen. I'm always eager to learn new technologies and take on
            challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;