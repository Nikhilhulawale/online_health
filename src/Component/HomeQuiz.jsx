import React from "react";
import  "./HomeQuiz.css"

const HomeQuiz=()=>{

    const QuizImg="/Images/Illustration/Quiz Img.webp";
    const QuizHeading="Do you tell yourself the following?";
    const QuizCard=[
        {
            icon:"bi bi-emoji-frown",
            detail:"I should check on that symptom"
        },
        {
            icon:"bi bi-flask",
            detail:"It's been a while since my last check-up"
        },
        {
            icon:"bi bi-calendar-day",
            detail:"Will there be availability for this week?"
        }
    ]

    const QuizPara1="Take this quiz to find out if you need to consult a Medical Specialist.";
    const QuizPara2="If you relate to two or more of these statements, consider seeing a specialist. It takes just 1-2 minutes to complete. Remember, prevention is the best cure.";

    const QuizBtn="Take the quiz - Just 2 min.";

    return(
        <section className="container Quiz-section">
            <div className="row">
                <div className="col-12 col-lg-6 QuizImg-div">
                    <img className="img-fluid QuizImg" src={QuizImg} alt="" />
                </div>

                <div className="col-12 col-lg-6">
                    <h1 className="QuizHeading">{QuizHeading}</h1>
                    <div className="QuizCard-div ">
                        {QuizCard.map((items,index)=>(
                            <div className="QuizCard " key={index}>
                                <i className={items.icon}></i>
                                <p>{items.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="QuizPara1">{QuizPara1}</p>
                        <p className="QuizPara2">{QuizPara2}</p>
                    </div>
                    <div className="pt-2">
                        <nav className="QuizBtn">
                            <a href="">{QuizBtn}</a>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeQuiz;