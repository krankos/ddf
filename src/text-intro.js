import React from "react";

const Text_intro = () => {
  return (
    <div className="bigdiv">
      <img src="https://www.docplanner.com/img/sygnet.png" />
      <h3 className="title">Making the healthcare experience more human</h3>
      <div className="paragraphs">
          <p style={{width:"470px",marginRight:"20px"}}>
            We want patients to find the perfect doctor and book an appointment
            in the most easy way. The patient journey should be enjoyable, and
            that's why we are always next to them: to help them find the best
            possible care. Anytime, anywhere.
          </p>
          {" "}
          <p style={{width:"470px"}}>
            We also help doctors to better manage their practice and build their
            online reputation. With our integrated end-to-end solution, doctors
            are able not only to improve their online presence, but also to
            devote their time to what really matters: their patients.
          </p>
      </div>
    </div>
  );
};

export default Text_intro;
