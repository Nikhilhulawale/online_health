import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import HomeBetterCare from "./HomeBetterCare";
import HomeQuiz from "./HomeQuiz";
import HomeQuality from "./HomeQuality";
import HomeStep from "./HomeStep";
import HomePrevention from "./HomePrevention";
import HomeBookDetail from "./HomeBookDetail";
import HomeunComfortable from "./HomeunComfortable";
import Footer from "./Footer ";

 const Home=()=>{
    return(
        <React.Fragment>
            <HomeHeroSection/>
            <HomeBetterCare/>
            <HomeQuiz/>
            <HomeQuality/>
            <HomeStep/>
            <HomePrevention/>
            <HomeBookDetail/>
            <HomeunComfortable/>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;