import React from "react";
import "./HomeBetterCare.css";

const HomeBetterCare=()=>{
    const BetterCareHeading="You deserve Better Care";
    const BetterCareData=[
        {
            title:"No more waiting a month for an appointment",
            detail:"At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti."
        },
        {
            title:"No more rushed, low-quality consultations",
            detail:"At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti."
        },
        {
            title:"No more unnecessary travels to the doctor’s office",
            detail:"At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti."
        },
    ]

    const BetterCareBtn="Book a consultation";

    return(
        <section className="container">
            <div className="row">
                <div className="col-12 BetterCareHeading-div">
                    <h2 className="BetterCareHeading">{BetterCareHeading}</h2>
                </div>

                <div className="col-12 BetterCareData">
                    <div className="row">
                        {BetterCareData.map((items,index)=>(
                            <div key={index} className="col-12 col-lg-4 BetterCareData-div">
                                <p className="title">{items.title}</p>
                                <p className="detail">{items.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="BetterCareBtn-div col-12">
                    <nav className="BetterCareBtn">
                        <a href="">{BetterCareBtn}</a>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default HomeBetterCare;