/**
 * Filename: App.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-07
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfessionalSummary from './components/pages/ProfessionalSummary';
import Skills from './components/pages/Skills';
import Education from './components/pages/Education';
import WorkHistory from './components/pages/WorkHistory';
import Certifications from './components/pages/Certifications';
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
                        <Route exact path="/" element={<ProfessionalSummary/>} />
                        <Route path="/skills" element={<Skills/>} />
                        <Route path="/education" element={<Education/>} />
                        <Route path="/work-history" element={<WorkHistory/>} />
                        <Route path="/certifications" element={<Certifications/>} />
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;