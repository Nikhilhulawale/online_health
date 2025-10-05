import React from "react";
import AboutHeroSection from "./AboutHeroSection";
import AboutWeCare from "./AboutWeCare";
import AboutWhyOur from "./AboutWhyOur";
import AboutTeam from "./AboutTeam";
import Footer from "./Footer ";

const About=()=>{
    return(
        <section>
            <AboutHeroSection/>
            <AboutWeCare/>
            <AboutWhyOur/>
            <AboutTeam/>
            <Footer/>
        </section>
    );
}

export default About;