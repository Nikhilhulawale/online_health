import React from "react";
import "./AboutTeam.css"
const AboutTeam = () => {
    const subtitle = "THIS IS US";
    const title = "Meet the Team";
    const AboutTeamData = [
        {
            img: "/Images/Illustration/DoctorPhoto (1).webp",
            id: "M.N. 5243",
            Name: "Dr. Nikhil Hulawale",
            detail: "Dr. Nikhil Hulawale is a preventive cardiologist dedicated to helping patients manage and reduce th...",
            Spl: "Cardiology",
            emailID: "nikhilhulawale18@gmail.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (6).webp",
            id: "M.N. 2348",
            Name: "Dr. Swapnil Popalghat",
            detail: "Dr. Swapnil Popalghat is a pediatrician with a passion for preventive care. He provides comprehensive w...",
            Spl: "Pediatrics",
            emailID: "swapnil@health-online.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (2).webp",
            id: "M.N. 9714",
            Name: "Dr. Maya Jagadale",
            detail: "Dr. Maya Jagadale is a psychiatrist specializing in trauma recovery and integrative mental health th...",
            Spl: "Physiotherapist",
            emailID: "maya@health-online.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (3).webp",
            id: "M.N. 4333",
            Name: "Dr. Sunil Dhokale",
            detail: "Dr. Sunil Dhokale has spent his career providing personalized care to patients diagnosed with canc...",
            Spl: "Oncology",
            emailID: "sunil@health-online.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (4).webp",
            id: "M.N. 8552",
            Name: "Dr. Swati Nawale",
            detail: "Dr. Swati Nawale has built a distinguished career in dermatology, treating both common and rare ...",
            Spl: "Dermatology",
            emailID: "swati@health-online.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (5).webp",
            id: "M.N. 2943",
            Name: "Dr. Gauri Patil",
            detail: "Dr. Gauri Patil is a neurologist dedicated to diagnosing and treating complex neurological cond...",
            Spl: "Neurology",
            emailID: "gauri@health-online.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (7).webp",
            id: "M.N. 2348",
            Name: "Dr. Viraj Thube",
            detail: "Dr. Viraj Thube is a pediatrician with a passion for preventive care. He provides comprehensive w...",
            Spl: "Pediatrics",
            emailID: "viraj@health-online.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (8).webp",
            id: "M.N. 4333",
            Name: "Dr. Menna Patil",
            detail: "Dr. Menna Patil has spent her career providing personalized care to patients diagnosed with canc...",
            Spl: "Oncology",
            emailID: "menna@health-online.com"
        },
        {
            img: "/Images/Illustration/DoctorPhoto (9).webp",
            id: "M.N. 2348",
            Name: "Dr. Bhakti Hulawale",
            detail: "Dr. Bhakti Hulawale is a pediatrician with a passion for preventive care. He provides comprehensive w...",
            Spl: "Pediatrics",
            emailID: "bhakti@health-online.com"
        },
    ]
    return (
        <section className="container">
            <div className="row">
                <div className="col-12 text-center pb-5">
                    <span className="subtitle">{subtitle}</span>
                    <h1 className="AboutTeamTitle">{title}</h1>
                </div>
                <div className="col-12">
                    <div className="conatiner">
                        <div className="row">
                            {AboutTeamData.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4 AboutTeam-card">
                                    <img className="img-fluid doctorImg" src={item.img} alt="" />
                                    <div className="name-div">
                                        <span>{item.id}</span>
                                        <p className="Name">{item.Name}</p>
                                    </div>
                                    <div>
                                        <p className="detail">{item.detail}</p>
                                    </div>
                                    <div className="Spl">
                                        <p>{item.Spl}</p>
                                    </div>
                                    <div className="emailID">
                                        <a href="">{item.emailID}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTeam;