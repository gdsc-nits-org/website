import React from "react";
import "./Footer.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaReddit } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import kofi from "../../assets/images/ko-fi.svg";
import { Link } from "react-router-dom";

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
                title="LinkedIn"
              >
                <AiFillLinkedin className="footer-btn-1" size={24} />
              </a>
              <a
                href="https://www.facebook.com/gdscnits/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
                title="Facebook"
              >
                <ImFacebook className="footer-btn-2" size={24} />
              </a>
              <a
                href="https://www.instagram.com/gdsc_nits/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
                title="Instagram"
              >
                <FiInstagram className="footer-btn-3" size={24} />
              </a>
              <a
                href="http://twitter.com/gdscnits"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
                title="Twitter"
              >
                <FaTwitter className="footer-btn-4" size={24} />
              </a>
              <a
                href="https://www.reddit.com/r/gdscnits/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
                title="Reddit"
              >
                <FaReddit className="footer-btn-5" size={24} />
              </a>
            </div>
            <div className="footer-mail">
              <ul>or e-mail us at </ul>
              <a href="mailto:gdsc@nits.ac.in">gdsc@nits.ac.in</a>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="join-chapter">
              <div className="support-us">
                {/* <h3>Support Us</h3> */}
                <a
                  href="https://ko-fi.com/T6T3IAFKX"
                  target="_blank"
                  rel="noreferrer"
                  title="Ko-fi"
                >
                  <img src={kofi} alt="support us" />
                </a>
              </div>
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
        </div>

        <div className="footer-middle">
          <div className="footer-middle-mob1">
            <div className="footer-mid-about">
              <ul>About</ul>
              <ul className="footer-line-y"></ul>
              <Link to="/#introHome" className="footer-about">
                Vision
              </Link>
              <Link to="/#timeLine" className="footer-about">
                Types of Events
              </Link>
              <Link to="/#ui-ux" className="footer-about">
                Google Technologies
              </Link>
            </div>
            <div className="footer-mid-events">
              <ul>Events</ul>
              <div className="footer-line-g"></div>
              <Link to="/events/#upcoming" className="footer-events">
                Upcoming Events
              </Link>
              <Link to="/events/#previous" className="footer-events">
                Previous Events
              </Link>
            </div>
          </div>
          <div className="footer-middle-mob1">
            <div className="footer-mid-project">
              <ul>Projects</ul>
              <div className="footer-line-b"></div>
              <Link to="/projects/1" className="footer-project">
                Attendo
              </Link>
              <Link to="/projects/0" className="footer-project">
                Sellr
              </Link>
              <Link to="/projects/6" className="footer-project">
                Efficacy
              </Link>
            </div>
            <div className="footer-mid-team">
              <ul>Team</ul>
              <div className="footer-line-r"></div>
              <Link to="/team/#core" className="footer-teas">
                Core Members
              </Link>
              <Link to="/team/#members" className="footer-teas">
                Members
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-end">
          <div className="footer-end-left">
            <img src={logo} alt="GDSC NITS" />
            <ul>Google Developer Student Club NIT Silchar</ul>
          </div>

          <div className="footer-end-right">
            <ul>Google Developer Student Club, NITS. All Rights Reserved</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
