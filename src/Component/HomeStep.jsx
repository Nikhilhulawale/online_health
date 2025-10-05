import React from "react";
import "./HomeStep.css";

const HomeStep = () => {

    const HomeStepData = [
        {
            img: "/Images/Illustration/HomeStepStep-1.webp",
            step: "Step 1.",
            heading: "Discover true experts specialized in a wide range of specialities",
            visit: "Meet your next doctor"
        },
        {
            img: "/Images/Illustration/HomeStepStep-2.svg",
            step: "Step 2.",
            heading: "Select a date for your Consultation",
            visit: "Check available dates"
        },
        {
            img: "/Images/Illustration/HomeStepStep-3.jpg",
            step: "Step 3.",
            heading: "Your Session From Home",
            visit: "Start Today - Book a Consultation"
        }
    ]

    return (
        <section className="container HomeStep">
            <div className="HomeStep-div container">
                {HomeStepData.map((items, index) => (
                    <div  key={index} className="stepCard-div">
                        <div className="stepCard">
                            <div className="text-center">
                                <img className=" img img-fluid" src={items.img} alt="" />
                            </div>
                            <div className="stepCard-detail">
                                <span>{items.step} </span>
                                <h1 className="heading">{items.heading} </h1>
                                <a className="visit" href="">{items.visit} </a>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        </section >
    );
}

export default HomeStep;
