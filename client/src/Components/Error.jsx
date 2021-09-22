import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Error.css";

const Error = () => {
  return (
    <>
      <div className="error">
        <div className="error__heading">
          <h1>OOPS! PAGE NOT FOUND</h1>
        </div>
        <div className="error__content">
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGE OR IS TEMPORARILY UNAVAILABLE
          </p>
        </div>
        <div className="error__home">
          <NavLink to="/">
            <button className="error__btn">Back To Home Page</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
