import React from "react";
import "./AboutWeCare.css";
const AboutWeCare = () => {
    const span = "OUR MISSION";
    const AboutWeCareHeading = "Because We Care";
    const AboutWeCareBtn="SEND A MESSAGE"

    const AboutWeCareData = [
        {
            number: "47K",
            title: "Patients Monthly",
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            number: "12+",
            title: "Medical specialties",
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        },
        {
            number: "4.9",
            title: "Review Rating",
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        }
    ]
    return (

        <section className="container AboutWeCare">
            <div className="row AboutWeCare-div">
                <div className="col-12 col-md-4 AboutWeCareImg">

                </div>
                <div className="col-12 col-md-8 AboutCarehead">
                    <div className="AboutCarehead-div">
                        <span className="span">{span}</span>
                        <h1 className="AboutWeCareHeading">{AboutWeCareHeading}</h1>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {AboutWeCareData.map((item, index) => (
                                <div key={index} className=" AboutWeCare-card">
                                    <div className="">
                                        <h1 className="number">{item.number}</h1>
                                    </div>
                                    <div className="AboutWeCare-title-div">
                                        <p className="title">{item.title}</p>
                                        <p>{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="AboutWeCareBtn-div">
                        <nav className="AboutWeCareBtn">
                            <a href="">{AboutWeCareBtn}</a>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutWeCare;