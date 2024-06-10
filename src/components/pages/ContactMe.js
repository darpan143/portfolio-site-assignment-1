/**
 * Filename: ContactMe.js
 * Student name: Darpan Nayyar
 * Student ID: 301419475
 * Date: 2024-06-09
 */

import React, { useState } from 'react';
import './ContactMe.css';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: darpan.learning@gmail.com</p>
                <p>Phone: 123-123-1234</p>
            </div>
            <div className="contact-form">
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={msg} onChange={e => setMsg(e.target.value)} required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;