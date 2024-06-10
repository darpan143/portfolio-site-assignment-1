/**
 * Filename: Projects.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-09
 */

import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Driven Chatbot',
            description: 'Developed an AI-driven chatbot using natural language processing and machine learning.',
        },
        {
            title: 'E-commerce Platform',
            description: 'Built a scalable e-commerce platform with integrated payment gateways and user management.',
        },
        {
            title: 'Data Visualization Tool',
            description: 'Created a data visualization tool to provide insights and analytics for large datasets.',
        },
        {
            title: 'Game Development',
            description: 'Designed and developed an interactive game using Unity and C#.',
        },
    ];

    return (
        <div className="page-wrapper">
            <h2 className="t-center">Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={"https://via.placeholder.com/450x300"} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;