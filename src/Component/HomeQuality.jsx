import React from "react";
import "./HomeQuality.css";

const HomeQuality=()=>{
    const HomeQualityHeading="Quality is what Makes the Difference"
    const HomeQualityPara1="We partner exclusively with highly experienced and reputable Medical Specialists, so you receive care from true experts."
    const HomeQualityPara2="In many other centers, virtual consultations are often assigned to residents or assistants without in-depth expertise in the specialty."
    const HomeQualityBtn="Book a Consultation"
    return(
        <section className="container HomeQuality-Section">
            <div>
                <h1 className="HomeQualityHeading">{HomeQualityHeading}</h1>
                <p className="HomeQualityPara1">{HomeQualityPara1}</p>
                <p className="HomeQualityPara2">{HomeQualityPara2}</p>
                <div>
                    <nav className="HomeQualityBtn">
                        <a href="">{HomeQualityBtn}</a>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default HomeQuality;