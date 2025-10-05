import React from "react";
import TreatmentHeroSection from "./TreatmentHeroSection";
import TreatmentsSection from "./TreatmentsSection ";
import Footer from "./Footer ";

const Treatments=()=>{
    return(
        <React.Fragment>
            <TreatmentHeroSection/>
            <TreatmentsSection/>
            <Footer/>
        </React.Fragment>
    );
}

export default Treatments;