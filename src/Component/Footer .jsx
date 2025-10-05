import React from "react";
import "./Footer.css"

const Footer = () => {
  const footerData = {
    newsletter: {
      title: "A Newsletter Worth Subscribing",
    },
    phone: "8010511138",
    email: "nikhilhulawale18@gmail.com",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      youtube: "#",
    },
    menus: [
      {
        title: "Static",
        links: [
          { label: "Home", url: "#" },
          { label: "About · A", url: "#" },
          { label: "About · B", url: "#" },
          { label: "About · C", url: "#" },
          { label: "Consultation · A", url: "#" },
          { label: "Consultation · B", url: "#" },
          { label: "Consultation · C", url: "#" },
        ],
      },
      {
        title: "CMS",
        links: [
          { label: "Blog Post - Single", url: "#" },
          { label: "Professional - Single", url: "#" },
          { label: "Medical Speciality - Single", url: "#" },
          { label: "Author - Single", url: "#" },
        ],
      },
      {
        title: "E-Commerce",
        links: [
          { label: "Treatments · A", url: "#" },
          { label: "Treatments · B", url: "#" },
          { label: "Treatments · C", url: "#" },
          { label: "Product - Single", url: "#" },
          { label: "Category", url: "#" },
        ],
      },
    ],
  };

  return (
    <footer className=" Footer-section container text-light pt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Newsletter + Contact */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">{footerData.newsletter.title}</h5>
            <div className="d-flex mb-3">
              <input
                type="email"
                placeholder="Share your email"
                className="form-control me-2"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
            <div className="mt-3">
              <p className="fw-bold mb-1">Phone</p>
              <p>{footerData.phone}</p>
              <p className="fw-bold mb-1">Email</p>
              <p>{footerData.email}</p>
            </div>
            <div className="d-flex gap-3 mt-3">
              <a href={footerData.social.linkedin} className="text-light fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href={footerData.social.twitter} className="text-light fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href={footerData.social.instagram} className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={footerData.social.youtube} className="text-light fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Dynamic Menus */}
          {footerData.menus.map((menu, idx) => (
            <div className="col-6 col-md-2" key={idx}>
              <h6 className="fw-bold mb-3">{menu.title}</h6>
              <ul className="list-unstyled">
                {menu.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-secondary text-decoration-none d-block mb-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <hr className="border-secondary my-4" />

        <div className="row">
          <div className="col d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
              <span className="fw-bold">health online</span>
              <small className="text-secondary">· Revolutionizing the way you connect with doctors</small>
            </div>
            <div>
              <small>
                Copyright © Health-Online | Designed by{" "}
                <a href="#" className="text-secondary fw-bold">
          Nikhil HUlawale
                </a>{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
