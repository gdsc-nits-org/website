import React from "react";
import "./Footer.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-t-l-text">
              <h2>Questions?</h2>
              <ul> Contact us through our social media accounts.</ul>
            </div>
            <div className="footer-links">
              <a href="/" className="footer-social-links">
                <AiFillLinkedin className="footer-btn-1" size={24} />
              </a>
              <a href="/" className="footer-social-links">
                <ImFacebook className="footer-btn-2" size={24} />
              </a>
              <a href="/" className="footer-social-links">
                <FiInstagram className="footer-btn-3" size={24} />
              </a>
              <a href="/" className="footer-social-links">
                <FaTwitter className="footer-btn-4" size={24} />
              </a>
            </div>
            <div className="footer-mail">
              <ul>or e-mail us at </ul>
              <a href="mailto:gdsc@ex.com">gdsc@ex.com</a>
            </div>
          </div>
          <div className="footer-top-right">
            <a href="/">
              <h2>Join our chapter</h2>
            </a>
            <ul>to stay updated with our events</ul>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-middle-mob1">
            <div className="footer-mid-about">
              <ul>About</ul>
              <ul className="footer-line-y"></ul>
              <a href="" className="footer-about">
                Vision
              </a>
              <a href="" className="footer-about">
                Mission
              </a>
              <a href="" className="footer-about">
                Types of Events
              </a>
              <a href="" className="footer-about">
                Google Technologies
              </a>
            </div>
            <div className="footer-mid-events">
              <ul>Events</ul>
              <div className="footer-line-g"></div>
              <a href="" className="footer-events">
                Featured Events
              </a>
              <a href="" className="footer-events">
                Study jams
              </a>
              <a href="" className="footer-events">
                Hands On Workshop
              </a>
              <a href="" className="footer-events">
                Tech Talks
              </a>
            </div>
          </div>
          <div className="footer-middle-mob1">
            <div className="footer-mid-project">
              <ul>Projects</ul>
              <div className="footer-line-b"></div>
              <a href="" className="footer-project">
                Attendo App
              </a>
              <a href="" className="footer-project">
                Website
              </a>
            </div>
            <div className="footer-mid-team">
              <ul>Team</ul>
              <div className="footer-line-r"></div>
              <a href="" className="footer-teas">
                Executive Board
              </a>
              <a href="" className="footer-teas">
                Departments
              </a>
              <a href="" className="footer-teas">
                Join Us
              </a>
            </div>
          </div>
        </div>

        <div className="footer-end">
          <div className="footer-end-left">
            <img src="src/assets/images/logo.png" alt="GDSC NITS" />
            <ul>Developer Student Club NIT Silchar</ul>
          </div>

          <div className="footer-end-right">
            <ul>Developer Student Club,NITS. All Rights Reserved</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
