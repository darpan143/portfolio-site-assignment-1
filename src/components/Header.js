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
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/work-history">Work History</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;