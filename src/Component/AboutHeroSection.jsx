import React from "react";
import "./AboutHeroSection.css";

const AboutHeroSection = () => {
    const span="About Us";
    const AboutHeroSectionTitle="Personalized Online Health Services at Your Fingertips";
    const AboutHeroSectionPara="Expert doctors from various specialties are just a video call away. Get personalized care and advice from home, tailored to your needs.";
    const AboutHeroSectionBtn="Send Message";

    
    return (
        <section className="container AboutHeroSection">
            <div>
                <span>{span}</span>
                <h1 className="AboutHeroSectionTitle">{AboutHeroSectionTitle}</h1>
                <p className="AboutHeroSectionPara">{AboutHeroSectionPara}</p>
                <nav className="AboutHeroSectionBtn">
                    <a href="">{AboutHeroSectionBtn}</a>
                </nav>
            </div>
        </section>
    );
}

export default AboutHeroSection;