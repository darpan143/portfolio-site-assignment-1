/**
 * Filename: App.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-07
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import Projects from './components/pages/Projects';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/about-me" element={<AboutMe/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/services" element={<Services/>} />
                        <Route path="/contact" element={<ContactMe/>} />
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;