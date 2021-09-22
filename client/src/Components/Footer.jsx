import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__topleft">
            <p className="footer__line"> We provide our best services. </p>
            <div className="footer__emailcontact">
              <p className="footer__email">
                Email :
                <span className="footer__emailid"> rajay2766@gmail.com </span>
              </p>
              <p className="footer__contactno">
                Contact :
                <span className="footer__contactnumber"> 9930539816</span>
              </p>
            </div>
          </div>
          <div className="footer__topright">
            <div className="footer__follow">
              <p>Follow us on </p>
            </div>
            <div className="footer__twitterandinsta">
              <div className="footer__twitter">
                <i className="fab fa-twitter "></i>
                <p className="footer__twitterid">Ajay Rathod</p>
              </div>
              <div className="footer__instagram">
                <i className="fab fa-instagram"></i>
                <p className="footer__instagramid">ajayrathod_2001</p>
              </div>
              <div className="footer__whatsapp">
                <i className="fab fa-whatsapp"></i>
                <p className="footer__whatsappno">9930539816</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Copyright © 2021 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
