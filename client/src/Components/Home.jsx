import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <img
          src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="main_homeimg"
        />
        <div className="home__left">
          <div className="home__heading">
            <h1 className="home__heading1">We Provide You </h1>
            <h1 className="home__heading2"> Our Best Service</h1>
          </div>
          <div className="home__tocheck">
            <p className="home__tocheckour">
              To Check Our
              <NavLink to="/service" className="home__headingServiceNavlink">
                Services
              </NavLink>
              Click The Below Button
            </p>
          </div>
          <div className="home__checkout">
            <NavLink to="/service">
              <button className="home__checkoutButton">Check Out</button>
            </NavLink>
          </div>
          <div className="home__popular">
            <p className="home__popularbtn">Popular : </p>
            <div className="home__webandvideo">
              <p className="home__webdevpbtn">Web Development</p>
              <p className="home__videoeditbtn">Video Editing</p>
            </div>
            <div className="home__photoanduiux">
              <p className="home__photoeditbtn">Photo Editing</p>
              <p className="home__uiuxbtn">UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
