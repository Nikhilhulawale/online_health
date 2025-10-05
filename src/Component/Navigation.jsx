import React from "react";
import { Link } from "react-router";
import "./Navigation.css";

const Navigation = () => {
    const logoImg = "/Images/Illustration/Logo.svg";
    const navIconBag = "bi bi-bag-check-fill";
    const navIconList = "bi bi-list";

    const NavData = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/bookconsultation", label: "Book Consultation" },
        { path: "/treatments", label: "Treatments" },
        { path: "/contact", label: "Contact" }
    ];

    return (
        <section className="container nav-section">
            <div>
                <Link to="/"><img className="logoImg"  src={logoImg} alt="Logo" /></Link>
            </div>

            <nav className="d-none d-lg-block">
                <ul className="Nav-list">
                    {NavData.map((items, index) => (
                        <li key={index} className="Nav-items">
                            <Link className="Nav-link" to={items.path}>{items.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="icon-div">
                <div className="d-lg-none navIconList">
                    <a data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        <i className={navIconList}></i>
                    </a>
                    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div className="offcanvas-header">
                            <div className="offcanvas-title" id="staticBackdropLabel">
                                <Link to="/"><img className="logoImg" src={logoImg} alt="Logo" /></Link>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="Mobile-Nav-list">
                                {NavData.map((items, index) => (
                                    <li key={index} className="Mobile-Nav-items">
                                        <Link className="Nav-link" to={items.path}>{items.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="navIconBag">
                    <Link className="navIconBag" to="#" data-bs-toggle="offcanvas" data-bs-target="#staticBack" aria-controls="staticBackdrop"><i className={navIconBag}></i></Link>

                    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBack" aria-labelledby="staticBackLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="staticBackLabel">Your Cart</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                No Items Found.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navigation;

