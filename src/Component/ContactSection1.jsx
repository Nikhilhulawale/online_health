import React from "react";
import "./ContactSection1.css";

const ContactSection1 = () => {
  const contactData = {
    title: "Get in Contact",
    subtitle:
      "Expert doctors from various specialties are just a video call away. Get personalized care and advice from home, tailored to your needs.",
    phone: "8010511138",
    email: "nikhilhulawale18@gmail.com",
    address: "Pune, Maharashtra, India",
  };

  return (
    <section className="container my-5">
      <div className="row g-5">
        {/* Left Info */}
        <div className="col-lg-5">
          <p className="text-uppercase ContactSection1-subtitle fw-bold small">
            We are here to help
          </p>
          <h2 className="contactData-title fw-bold mb-3">{contactData.title}</h2>
          <p className="text-muted mb-4">{contactData.subtitle}</p>

          <hr />

          <div className="d-flex align-items-center mb-3">
            <div className="bg-light rounded p-3 me-3">
              <i className="bi bi-telephone fs-4 contact-icon "></i>
            </div>
            <div>
              <p className="fw-bold mb-0">Phone</p>
              <p className="mb-0">{contactData.phone}</p>
            </div>
          </div>

          <div className="d-flex align-items-center mb-3">
            <div className="bg-light rounded p-3 me-3">
              <i className="bi bi-envelope fs-4 contact-icon"></i>
            </div>
            <div>
              <p className="fw-bold mb-0">Email</p>
              <p className="mb-0">{contactData.email}</p>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="bg-light rounded p-3 me-3">
              <i className="bi bi-geo-alt fs-4 contact-icon "></i>
            </div>
            <div>
              <p className="fw-bold mb-0">Headquarters</p>
              <p className="mb-0">{contactData.address}</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-lg-7">
          <div className="p-4 shadow rounded bg-white">
            <form>
              <div className="mb-3">
                <label className="fw-bold">Fullname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your Fullname here"
                />
              </div>
              <div className="mb-3">
                <label className="fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Write your email address here"
                />
              </div>
              <div className="mb-3">
                <label className="fw-bold">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your phone number here"
                />
              </div>
              <div className="mb-3">
                <label className="fw-bold">Message</label>
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Tell us something that will help us prepare for your consultation"
                ></textarea>
              </div>
              <button type="submit" className="ContactSendbtn btn btn-primary fw-bold px-4">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection1;
