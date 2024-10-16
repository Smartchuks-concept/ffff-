// Initialize Lucide icons
lucide.createIcons();

// Skills data
const skills = [
    { name: 'HTML', icon: 'file-code' },
    { name: 'CSS', icon: 'palette' },
    { name: 'JavaScript', icon: 'code' },
    { name: 'React', icon: 'atom' },
    { name: 'Node.js', icon: 'server' },
    { name: 'Git', icon: 'git-branch' },
];

// Project data
const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
        link: 'https://github.com/johndoe/ecommerce-platform',
    },
    {
        title: 'Weather App',
        description: 'A responsive weather application using JavaScript and OpenWeatherMap API.',
        link: 'https://github.com/johndoe/weather-app',
    },
    {
        title: 'Task Manager',
        description: 'A simple task management tool built with React and Firebase.',
        link: 'https://github.com/johndoe/task-manager',
    },
];

// Populate skills
const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <i data-lucide="${skill.icon}"></i>
        <p>${skill.name}</p>
    `;
    skillsContainer.appendChild(skillItem);
});

// Populate projects
const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            View Project <i data-lucide="external-link"></i>
        </a>
    `;
    projectsContainer.appendChild(projectCard);
});

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Lucide icons after adding dynamic content
lucide.createIcons();

// Add scroll reveal animation
window.addEventListener('scroll', revealElements);

function revealElements() {
    const elements = document.querySelectorAll('.skill-item, .project-card');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            element.classList.add('revealed');
        }
    });
}