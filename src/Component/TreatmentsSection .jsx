import React from 'react';
import './TreatmentsSection.css';

const treatmentsData = [
  {
    id: 1,
    title: "Natural Hormone Balance for Women’s Wellness",
    description: "Support women’s wellness naturally with balanced hormone health, enhancing vitality and overall well-being.",
    price: 400,
    tags: ["Dermatology", "Cardiology", "Neurology"],
    image: "/Images/Illustration/Treatments (1).jpg"
  },
  {
    id: 2,
    title: "Revitalize Your Sleep & Boost Energy Naturally",
    description: "Improve sleep quality and naturally boost energy levels for a more refreshed, vibrant, and energized daily life.",
    price: 250,
    tags: ["Dermatology", "Physiotherapist"],
    image: "/Images/Illustration/Treatments (2).jpg"
  },
  {
    id: 3,
    title: "Regain focus & motivation with natural supplements",
    description: "Enhance focus and motivation naturally with our supplements for improved mental clarity and energy. Stay sharp and driven!",
    price: 300,
    tags: ["Dermatology", "Orthopedics", "Pediatrics"],
    image: "/Images/Illustration/Treatments (3).webp"
  }
];

const Title="Treatments";

const TreatmentsSection = () => {
  return (
    <div className="container py-5">
      <h2 className="Title text-center fw-bold mb-5">{Title}</h2>
      <div className="row g-4">
        {treatmentsData.map((treatment) => (
          <div className="col-md-6 col-lg-4" key={treatment.id}>
            <div className="card shadow treatment-card h-100">
              <div className="card-img-top position-relative">
                <img src={treatment.image} alt={treatment.title} className="img-fluid rounded-top" />
                <div className="position-absolute bottom-0 start-0 p-3 d-flex flex-wrap gap-2">
                  {treatment.tags.map((tag, index) => (
                    <span key={index} className="badge rounded-pill bg-light text-dark px-3 py-2">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{treatment.title}</h5>
                <p className="card-text text-muted">{treatment.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="fw-bold text-dark">${treatment.price.toFixed(2)} USD</span>
                  <button className="btn btn-primary px-3">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentsSection;
