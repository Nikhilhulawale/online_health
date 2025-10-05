import React from "react";
import "./HomeBookDetail.css"

const HomeBookDetail = () => {
    const HomeBookDetail = [
        {
            title: "Consultation",
            details: "Connect by video call with top Medical Specialists for diagnosis, guidance, and to request or review tests and medications.",
            book: "Book a Consultation"
        },
        {
            title: "Treatments",
            details: "Access exclusive, highly effective treatments tailored to your lifestyle, routine, family, social environment, and unique personal needs.",
            book: "Discover our Treatments"
        },
        {
            title: "Courses",
            details: "Learn more about your body and how to care for it, complement your treatments, resolve questions, and move toward a healthier life.",
            book: "Coming Soon..."
        }
    ]
    return (
        <section className="container HomeBookDetail">
            <div className="row ">
                {HomeBookDetail.map((item, index) => (
                    <div key={index} className="col-12 HomeBookDetail-card">
                        <div className="row">
                            <div className="title col-lg-3">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="col-lg-5">
                                <p>{item.details}</p>
                            </div>
                            <div className="book col-lg-4">
                                <a href="">{item.book}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HomeBookDetail;