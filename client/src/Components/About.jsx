import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__mainheading">
        <h1 className="about__aboutus">About Us</h1>
      </div>
      <div className="about__heading">
        <h3 className="about__heading1">
          We are the team to provide you our best services
        </h3>
      </div>
      <div className="about__content">
        <p>
          We are the team to
          <span className="about__makewebsite">Make Websites</span> for grow
          your business.
        </p>
        <p>
          We can also make
          <span className="about__logosandposter">Logos and Posters</span> for
          you.
        </p>
        <p>
          We <span className="about__editvideos">Edit Videos</span> for YouTube
          videos,Instagram reels and many more.
        </p>
        <p>
          We can also provide
          <span className="about__photoedit">Photo Editing.</span>
        </p>
        <p>
          We make <span className="about__uiux">UI/UX</span> for your websites.
        </p>
        <p>
          We <span className="about__resume">Build Resume</span> with beautiful
          templates.
        </p>
      </div>
      <div className="about__tocheck">
        <p>Click below the button and explore our services</p>
      </div>
      <div className="about__btn">
        <NavLink to="/service">
          <button className="about__explore">Explore</button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
