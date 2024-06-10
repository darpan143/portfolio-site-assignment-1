/**
 * Filename: AboutMe.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-09
 */

import React from 'react';
import profileImage from '../../images/pp.jpg'; 
import resumePDF from '../../documents/resume.pdf';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="profile-section">
                <img src={profileImage} alt="Darpan Nayyar" className="profile-image" />
                <h2>Darpan Nayyar</h2>
                <p>
                    Software-savvy quality assurance professional committed to confirming proper functionality and
                    usability of software products before release. Specializing in the development and execution of Test scripts for client projects on platforms like Salesforce.
                </p>
                <br/>
                <a href={resumePDF} target="_blank" rel="noreferrer" className="btn resume-link">Download Resume (PDF)</a>
            </div>
        </div>
    );
};

export default AboutMe;