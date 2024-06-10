/**
 * Filename: Header.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-09
 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;