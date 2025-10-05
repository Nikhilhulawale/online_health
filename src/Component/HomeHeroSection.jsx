import React from "react";
import "./HomeHeroSection.css"

const HomeHeroSection = () => {
    const heroSectionH1 = "Medical Specialist from the Comfort of Your Home";
    const heroSectionPara = "No more waiting to receive care from expert doctors. Consult from home and access specialized treatments.";
    const heroSectionBtn1 = "How does it work";
    const heroSectionBtn2 = "Discover our services";
    const HomeHeroSectionImg = "/Images/Illustration/HomeHeroSectionImg.webp";

    return (
        <section className="container hero-section">
            <div className="row">
                <div className="hero-text col-lg-6 " >
                    <div className="text-center">
                        <h1 className="Mobile-heroSectionH1 d-md-none" > Medical Specialist</h1>
                        <p className="Mobile-heroSectionp d-md-none">FROM THE COMFORT OF YOUR HOME</p>
                        <h1 className="heroSectionH1 d-none d-md-block">{heroSectionH1}</h1>
                    </div>
                    <div className="hero-img d-lg-none ">
                        <img className="HomeHeroSectionImg" src={HomeHeroSectionImg} alt="Hero Section" />
                    </div>
                    <p className="heroSectionPara">{heroSectionPara}</p>
                    <div className="heroSectionBtn">
                        <nav className="heroSectionBtn1">
                            <a href="#">{heroSectionBtn1}</a>
                        </nav>
                        <nav className="heroSectionBtn2">
                            <a href="#">{heroSectionBtn2}</a>
                        </nav>
                    </div>
                </div>
                <div className="hero-img d-none d-lg-block col-lg-6">
                    <img className="HomeHeroSectionImg" src={HomeHeroSectionImg} alt="Hero Section" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSection;
