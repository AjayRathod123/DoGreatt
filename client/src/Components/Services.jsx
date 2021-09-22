import React from "react";
import ServiceData from "../Api/ServiceData.js";
import "../CSS/Services.css";
import ServiceDetail from "./ServiceDetail";

const Services = () => {
  return (
    <>
      <div className="service">
        <div className="service__heading">
          <h1 className="service__ourservice">Our Services</h1>
        </div>
        {ServiceData.map(function scard(val) {
          return (
            <ServiceDetail
              key="id"
              heading={val.heading}
              image={val.image}
              contentLine1={val.contentLine1}
              contentLine2={val.contentLine2}
              contentLine3={val.contentLine3}
              contentLine4={val.contentLine4}
              contentLine5={val.contentLine5}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
