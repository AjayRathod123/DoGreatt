import React from "react";
import { NavLink } from "react-router-dom";

const ServiceDetail = ({
  heading,
  image,
  contentLine1,
  contentLine2,
  contentLine3,
  contentLine4,
  contentLine5,
}) => {
  return (
    <>
      <div className="service__details">
        <div className="service__webdev">
          <div className="service__left">
            <img src={image} alt="website" className="service__webimg" />
          </div>
          <div className="service__right">
            <div className="service__rightheading">
              <h1>{heading}</h1>
            </div>
            <div className="service__webdevinfo">
              <p>
                {contentLine1} <br /> {contentLine2} <br /> {contentLine3}
                <br /> {contentLine4} <br />
                {contentLine5}
              </p>
            </div>
            <div className="service__clickbelow">
              <div className="service__tomake">
                <p>Click the below button</p>
              </div>
              <div className="service__rightbtn">
                <NavLink to="/work">
                  <button className="service__go">Go</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
