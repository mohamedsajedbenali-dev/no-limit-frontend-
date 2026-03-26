import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <h2>
              NO<span>LIMIT</span>
            </h2>
          </div>

          <p className="footer-text">
            Your intelligent fitness companion.
            <br />
            Built for beginners, loved by athletes.
          </p>

          <div className="socials">
            <a href="#">IG</a>
            <a href="#">TW</a>
            <a href="#">YT</a>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="footer-links">
          <h4>PRODUCT</h4>
          <ul>
            <li><a href="#hero">Exercise Library</a></li>
            <li><a href="#hero">Muscle Explorer</a></li>
            <li><a href="#hero">Customize your own split</a></li>
            <li><a href="#workout-generator">Workout Generator</a></li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div className="footer-links">
          <h4>PROGRAMS</h4>
          <ul>
            <li><a href="#">Beginner Guide</a></li>
            <li><a href="#">Strength Training</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About NoLimit</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 NoLimit. All rights reserved.</p>
        <p>Built for the gym community 🏋️</p>
      </div>
    </footer>
  );
};

export default Footer;