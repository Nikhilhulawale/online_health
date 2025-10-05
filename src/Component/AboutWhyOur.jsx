import React from "react";
import  "./AboutWhyOur.css"

const AboutWhyOur = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                
                <div className="col-md-6 col-lg-6 mb-4 mb-lg-0">
                    <img src="/Images/Illustration/AboutWhyOur (1).webp" className="rounded-custom img-fluid AboutWhyOur-1" alt="Doctor talking to patient"/>
                        <p className="mt-4 para ">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia.
                        </p>
                        <button className="BOOKbtn btn btn-custom px-4 py-2 mt-2">BOOK CONSULTATION</button>
                </div>

                <div className="col-md-6 col-lg-6 OurWhy-div">
                    <p className="section-subtitle">OUR WHY</p>
                    <h2 className="section-title">The why behind the work we do</h2>
                    <img src="/Images/Illustration/AboutWhyOur (2).webp" className="rounded-custom mt-4 img-fluid AboutWhyOur-2" alt="Doctor typing on keyboard"/>
                </div>
            </div>
        </div>
    );
}


export default AboutWhyOur;