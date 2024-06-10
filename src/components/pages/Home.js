/**
 * Filename: Home.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-09
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro-section">
                <h2>Who am I?</h2>
                <p>
                    Software-savvy quality assurance professional committed to confirming proper functionality and
                    usability of software products before release. Fully versed in complete SDLC.
                </p>
                <div className="intro-buttons">
                    <Link to="/about-me" className="btn">About Me</Link>
                    <Link to="/contact" className="btn">Contact</Link>
                </div>
            </div>
            <div className="mission-section">
                <h2>Mission Statement</h2>
                <p>I aspire to be a software engineer.</p>
            </div>
        </div>
    );
};

export default Home;