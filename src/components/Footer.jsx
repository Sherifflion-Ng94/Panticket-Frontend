import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <div className="footer-logo">
          <img src="/images/footer-logo.svg" alt="footer" />
        </div>
        <div className="right-flex">
          <div id="phone-container" className="flex-container">
            <a href="tel+2348123456789">
              <img src="/images/phone-call.png" alt="Phone" />
            </a>
            <a href="tel+2348123456789" className="phone">
              +234 812 345 6789
            </a>
          </div>
          <div id="email-container" className="flex-container">
            <a href="mailto:hello@panticket.ng">
              <img src="/images/icon/vector.png" alt="Email" />
            </a>
            <a href="mailto:hello@panticket.ng" className="email">
              hello@panticket.ng
            </a>
          </div>
          <div id="icon-container" className="flex-container">
            <img src="/images/linkedin.png" alt="linkedin" />
            <img src="/images/whatsapp.png" alt="whatsapp" />
            <img src="/images/facebook.png" alt="facebook" />
            <img src="/images/instagram.png" alt="instagram" />
            <img src="/images/twitter.png" alt="twitter" />
          </div>
        </div>
      </div>
      <div className="footer-caption">
        <div>
          <small>2019 © All rights reserved by BoyePanthera.com</small>
        </div>
        <div>
          <small>Design with ❤️ by BlaqMac Design</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
