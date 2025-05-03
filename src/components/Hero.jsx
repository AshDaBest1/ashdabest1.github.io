import React from 'react';
import headshot from '../assets/images/profile.jpeg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Abedalaziz Halloumeh</h1>
                    <h2>Software Engineer</h2>
                    <p>Full Stack Web Developer specializing in MERN stack</p>
                </div>
                <div className="hero-image">
                    <img
                        src={headshot}
                        alt="Professional Headshot" className="headshot" />
                </div>
            </div>
        </section>
    );
};

export default Hero;