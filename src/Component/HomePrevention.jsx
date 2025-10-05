import React from "react";
import "./HomePrevention.css"

const HomePrevention=()=>{

    const HomePreventionHeading="Prevention hurts less than getting sick";
    const HomePreventionBtn="Book a Consultation";

    return(
        <section className="HomePrevention container">
            <div className="HomePrevention-div ">
                <h1 className="HomePreventionHeading">{HomePreventionHeading}</h1>
                <div className="HomePreventionBtn-div">
                    <nav className="HomePreventionBtn">
                        <a href="">{HomePreventionBtn}</a>
                    </nav>
                </div>
            </div>
        </section>
    );
} 

export default HomePrevention;