import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Jumbo = () => {
  const tab = [
    {
      img: "https://www.docplanner.com/img/flag.png",
      title: "Leader in 8 countries",
      description:
        "Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile",
    },
    { img: "https://www.docplanner.com/img/visits.png", title: "1.5 million appointments", description: "booked last month" },
    { img: "https://www.docplanner.com/img/patients.png", title: "30 million unique patients", description: "visit us every month" },
    { img: "https://www.docplanner.com/img/doctors.png", title: "2 million active doctors", description: "trust in our solutions" },
  ];
  return (
    <div style={{ backgroundColor: "#d5f5f5", marginTop: "50px" }}>
      <div className="big">      <div className="jumbodiv">
        <div> 
          <h2 style={{paddingTop:"20%",paddingBottom:"5%",color:"#00ccb1"}}>The world's biggest healthcare platform</h2>
          <p>
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
        </div>
        <div className="features">
          {tab.map(el =><div className="feature-card">
          {" "}
          <img src={el.img} />
          <h4 className="feature-card-title">{el.title}
          </h4>
          <p className="feature-card-description">
            {el.description}
          </p>
        </div> )}

        </div>
        
      </div></div>
    </div>
  );
};

export default Jumbo;



{/* <div className="feature-card">
          {" "}
          <img src="https://www.docplanner.com/img/flag.png" />
          <h2 className="feature-card-title">
            <span>
              Leader in <br />8 countries
            </span>
          </h2>
          <p className="feature-card-description">
            Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile
          </p>
        </div> */}