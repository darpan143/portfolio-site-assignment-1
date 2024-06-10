/**
 * Filename: Services.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-09
 */


import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Building responsive and modern websites using the latest technologies.',
        },
        {
            title: 'Mobile App Development',
            description: 'Creating engaging and high-performance mobile applications for Android and iOS.',
        },
        {
            title: 'API Development',
            description: 'Designing and implementing robust and secure APIs for various applications.',
        },
        {
            title: 'Automation Testing',
            description: 'Developing and executing automated test scripts to ensure software quality.',
        },
    ];

    return (
        <div className="services-container">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <img src={"https://picsum.photos/450/300"} alt={service.title} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;