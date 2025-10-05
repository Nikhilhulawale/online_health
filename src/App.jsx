import React from "react";
import { Routes, Route } from "react-router";
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import About from "./Component/About";
import BookConsultation from "./Component/BookConsultation";
import Treatments from "./Component/Treatments";
import Contact from "./Component/Contact";

const App = () => {
    return (
            <React.Fragment>
                <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/bookconsultation" element={<BookConsultation />} />
                <Route path="/treatments" element={<Treatments />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </React.Fragment>
    );
};

export default App;
