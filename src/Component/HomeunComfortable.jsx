import React from "react";
import "./HomeunComfortable.css"

const HomeunComfortable=()=>{

     const HomeunComfortable="Going to the doctor or starting treatment can feel intimidating or uncomfortable";
     const span="BUT IT DOESN'T HAVE TO BE THAT WAY";
     const HomeunComfortableData=[
        {
            para:"We give you access to true experts so you can get your questions answered and start an effective treatment from the comfort of your home."
        },
        {
            para:"If you think consulting a Medical Specialist or starting treatment would benefit you, we encourage you not to delay any longer."
        },
        {
            para:"If you feel your consultation didn’t meet quality standards, we’ll refund your money, no questions asked."
        }
     ]
     const HomeUncomfortable="Book a consultation"
    return(
        <section className="container HomeunComfortable">
            <div className="HomeunComfortable-title">
                <h1 className="">{HomeunComfortable}</h1>
            </div>
            <div className="HomeunComfortable-detail">
                <span className=""><b>{span}</b></span>
                <div className="HomeunComfortableData row">
                    {HomeunComfortableData.map((item,index)=>(
                        <div key={index} className="col-lg-4">
                            <p>{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="HomeUncomfortable-div">
                <nav className="HomeUncomfortable">
                    <a href="">{HomeUncomfortable}</a>
                </nav>
            </div>
        </section>
    );
}

export default HomeunComfortable;