import React from "react";
import "./Footer.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

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
              <a
                href="https://www.linkedin.com/company/gdscnits/mycompany/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <AiFillLinkedin className="footer-btn-1" size={24} />
              </a>
              <a
                href="https://www.facebook.com/gdscnits/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <ImFacebook className="footer-btn-2" size={24} />
              </a>
              <a
                href="https://www.instagram.com/gdsc_nits/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <FiInstagram className="footer-btn-3" size={24} />
              </a>
              <a
                href="http://twitter.com/gdscnits"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <FaTwitter className="footer-btn-4" size={24} />
              </a>
            </div>
            <div className="footer-mail">
              <ul>or e-mail us at </ul>
              <a href="mailto:gdsc@nits.ac.in">gdsc@nits.ac.in</a>
            </div>
          </div>
          <div className="footer-top-right">
            <a
              href="https://gdsc.community.dev/national-institute-of-technology-nit-silchar/"
              target="_blank"
              rel="noreferrer"
            >
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
              <a href="/#introHome" className="footer-about">
                Vision
              </a>
              <a href="/#timeLine" className="footer-about">
                Types of Events
              </a>
              <a href="/#ui-ux" className="footer-about">
                Google Technologies
              </a>
            </div>
            <div className="footer-mid-events">
              <ul>Events</ul>
              <div className="footer-line-g"></div>
              <p>Coming Soon</p>
              {/* <a href="" className="footer-events">
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
              </a> */}
            </div>
          </div>
          <div className="footer-middle-mob1">
            <div className="footer-mid-project">
              <ul>Projects</ul>
              <div className="footer-line-b"></div>
              <p>Coming Soon</p>
              {/* <a href="" className="footer-project">
                Attendo App
              </a>
              <a href="" className="footer-project">
                Website
              </a> */}
            </div>
            <div className="footer-mid-team">
              <ul>Team</ul>
              <div className="footer-line-r"></div>
              <p>Coming Soon</p>
              {/* <a href="" className="footer-teas">
                Executive Board
              </a>
              <a href="" className="footer-teas">
                Departments
              </a>
              <a href="" className="footer-teas">
                Join Us
              </a> */}
            </div>
          </div>
        </div>

        <div className="footer-end">
          <div className="footer-end-left">
            <img src={logo} alt="GDSC NITS" />
            <ul>Google Developer Student Club NIT Silchar</ul>
          </div>

          <div className="footer-end-right">
            <ul>Google Developer Student Club,NITS. All Rights Reserved</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
