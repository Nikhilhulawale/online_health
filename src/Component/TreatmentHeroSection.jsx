import React from "react";
import "./TreatmentHeroSection.css";

const TreatmentHeroSection = () => {
    const ImgData1 = "/Images/Illustration/DoctorPhoto (6).webp";
    const ImgData2 = "/Images/Illustration/DoctorPhoto (8).webp";
    const ImgData3 = "/Images/Illustration/DoctorPhoto (5).webp";
    const ImgData4 = "/Images/Illustration/DoctorPhoto (9).webp";

    const SubTitle="Take care of your health today";
    const Title="Find the right treatment for you";
    const para="Expert doctors from various specialties are just a video call away. Get personalized care and advice from home, tailored to your needs.";
    const btn="EXPLORE ALL TREATMENTS"


    return (
        <section className="container">
            <div className="row align-items-start BookConsultationSection">

                <div className="col-md-6 col-lg-6 mb-4 mb-lg-0">
                    <div className="doctor-img-div">
                        <img
                            src={ImgData1}
                            alt="Doctor 1"
                            className="img-fluid doctor-img1"
                        />
                        <img
                            src={ImgData2}
                            alt="Doctor 2"
                            className="img-fluid doctor-img2"
                        />
                        <img
                            src={ImgData3}
                            alt="Doctor 3"
                            className="img-fluid doctor-img3"
                        />
                        <img
                            src={ImgData4}
                            alt="Doctor 4"
                            className="img-fluid doctor-img4"
                        />
                    </div>
                </div>

                <div className="col-md-6 col-lg-6 title-div">
                    <span className="SubTitle">{SubTitle}</span>
                    <h1 className="Title">{Title}</h1>
                    <p className="para">{para}</p>
                    <nav className="btn">
                        <a href="">{btn}</a>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default TreatmentHeroSection;