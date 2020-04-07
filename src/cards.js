import React from "react";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const Cards = () => {
  return (
    <div className="cardiv">
      <div
        className="cardall"
        style={{ backgroundColor: "#00ccb1", marginRight: "15px" }}
      >
        <p> For patients </p>{" "}
        <h2>
          {" "}
          Find a doctor, book a visit and solve any health - related doubt{" "}
        </h2>{" "}
        <div className="cardin">
          <DropdownButton
            id="dropdown-basic-button"
            title="CHOOSE YOUR COUNTRY"
          >
            <Dropdown.Item href="#/action-1"> Action </Dropdown.Item>{" "}
            <Dropdown.Item href="#/action-2"> Another action </Dropdown.Item>{" "}
            <Dropdown.Item href="#/action-3"> Something else </Dropdown.Item>{" "}
          </DropdownButton>{" "}
          <img
            src="https://www.docplanner.com/img/screen-marketplace@2x.png"
            className="imgs"
          />
        </div>{" "}
      </div>{" "}
      <div
        className="cardall"
        style={{ backgroundColor: "#3d83df"}}
      >
        <p> For doctors </p>{" "}
        <h2>
          {" "}
          Save time managing visits and cut no-shows by half{" "}
        </h2>{" "}
        <div className="cardin">
          <div style={{ marginLeft: "220px" }}> </div>{" "}
          <img
            src="https://www.docplanner.com/img/screen-saas@2x.png"
            className="imgs" style={{marginTop:"40px"}}
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Cards;
