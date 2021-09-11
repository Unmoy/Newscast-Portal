import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-top">
      <div className="container d-flex justify-content-center">
        <div className="row align-items-center mt-5 pt-5">
          <div className="col-md-3 first_footer_col">
            <h1 className="footer-logo">Newscast Portal</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              officiis repellendus libero omnis labore sunt iure voluptatum odit
              vel consequuntur
            </p>
          </div>
          <div className="col-md-3 second_footer_col">
            <h3>Contact</h3>
            <p>
              <FontAwesomeIcon
                className="second_footer_col_icon"
                icon={faMapMarkedAlt}
              />
              5604 Willow Crossing Ct, Clifton, VA, 20124
            </p>
            <p>
              <FontAwesomeIcon
                className="second_footer_col_icon"
                icon={faPhone}
              />
              +1-800-1234567
            </p>
            <p>
              <FontAwesomeIcon
                className="second_footer_col_icon"
                icon={faEnvelope}
              />
              noreply@unmoy.com
            </p>
          </div>
          <div className="col-md-3 third_footer_col">
            <div>
              <h3>Follow Us</h3>
            </div>
            <div>
              <FontAwesomeIcon className="social" icon={faFacebookF} />
              <FontAwesomeIcon className="social" icon={faInstagram} />
              <FontAwesomeIcon className="social" icon={faGooglePlusG} />
            </div>
          </div>
          <div className="col-md-3 fourth_footer_col">
            <div>
              <h3>Services</h3>
            </div>
            <div>
              <p>My Account</p>
              <p>Services</p>
              <p>Login</p>
              <p>About</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>Copyright {new Date().getFullYear()} All Rights Reserved by Unmoy</p>
      </div>
    </footer>
  );
};

export default Footer;
