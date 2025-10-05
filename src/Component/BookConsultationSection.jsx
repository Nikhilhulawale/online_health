import React from "react";
import "./BookConsultationSection.css"

const BookConsultationSection = () => {
    const ImgData1 = "/Images/Illustration/DoctorPhoto (4).webp";
    const ImgData2 = "/Images/Illustration/DoctorPhoto (1).webp";
    const ImgData3 = "/Images/Illustration/DoctorPhoto (9).webp";
    const ImgData4 = "/Images/Illustration/DoctorPhoto (8).webp";

    const SubTitle = "Take care of your health today";
    const Title = "Book a Consultation";
    const Btn = "Book Consultation";
    return (
        <div className="container py-5">
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


                <div className="col-md-6 col-lg-6">
                    <h6 className="text-uppercase SubTitle">{SubTitle}</h6>
                    <h2 className="mb-4 Title">{Title}</h2>
                    <form className="FormData">
                        <div className="mb-3">
                            <label className="form-label fw-bold">Fullname</label>
                            <input type="text" className="form-control" placeholder="Write your Fullname here" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email Address</label>
                            <input type="email" className="form-control" placeholder="Write your email address here" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Phone</label>
                            <input type="tel" className="form-control" placeholder="Write your phone number here" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Message</label>
                            <textarea className="form-control" rows="4" placeholder="Tell us something that will help us prepare for your consultation"></textarea>
                        </div>
                        <button type="submit" className="btn Btn  px-4">{Btn}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookConsultationSection;