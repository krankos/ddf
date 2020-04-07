import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Cardimg = () => {
  const tab = [
    { img: "https://www.docplanner.com/images/warsaw.png", title: "Warsaw" },
    {
      img: "https://www.docplanner.com/images/barcelona.png",
      title: "Barcelona",
    },
    {
      img: "https://www.docplanner.com/images/istanbul.png",
      title: "Istanbul",
    },
    { img: "https://www.docplanner.com/images/rome.png", title: "Rome" },
    {
      img: "https://www.docplanner.com/images/mexico-city.png",
      title: "Mexico City",
    },
    {
      img: "https://www.docplanner.com/images/curitiba.png",
      title: "Curitiba",
    },
  ];
  return (
    <div>
      <div className="bigdiv">
        <div style={{justifyContent:"center",textAlign:"center"}}>
        <h3 style={{padding:"2%", color:"#00ccb1"}}>
          Improve the lives of millions.
          <br />
          Change yours forever
        </h3>
        <p style={{color:"grey"}}>
          More than 1000 team mates share our same vision, goals and passion.
          <br />
          With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
          <br />
          Curitiba, our search for great talent never stops.
        </p>
        </div>
        <div className="imgcards">
          {tab.map((el) => (
            <div className="imgcard">
              <Card style={{ width: "300px" }}>
                <Card.Img variant="top" src={el.img} />
                <Card.Body>
                  <div className="flexdiv">
                    {" "}
                    <Card.Title
                      style={{
                        fontSize: "medium",
                        paddingTop: "5px",
                        width: "100px",
                      }}
                    >
                      {el.title}
                    </Card.Title>
                    <div style={{ marginLeft: "40px" }}>
                      <Button
                        variant="primary"
                        style={{
                          fontSize: "small",
                          justifyContent: "flex-end",
                        }}
                      >
                        SEE OPENINGS
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardimg;
