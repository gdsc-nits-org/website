import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-t-l-text">
              <h2>Qyestions?</h2>
              <ul> Contact us through our social media accounts.</ul>
            </div>
            <div className="footer-links">
              <a href="/" className="footer-social-links"></a>
              <a href="/" className="footer-social-links"></a>
              <a href="/" className="footer-social-links"></a>
              <a href="/" className="footer-social-links"></a>
            </div>
            <div className="footer-mail">
              <ul>Or e-mail us at </ul>
              <a href="mailto:gdsc@ex.com">gdsc@ex.com</a>
            </div>
          </div>
          <div className="footer-top-right">
            <button>Join our Chapters</button>
            <ul>to stay updated with our events</ul>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-mid-about"></div>
          <div className="footer-mid-events"></div>
          <div className="footer-mid-project"></div>
          <div className="footer-mid-team"></div>
        </div>

        <div className="footer-end">
          <div className="footer-end-left">
            <img src="../logo.png" alt="GDSC NITS" />
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
