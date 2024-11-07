import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <Link to="/" className="footer_home-link">
        Christ The Messiah Church Abuja
      </Link>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/cmcabj?igsh=bmpxZTQwbGxiOGh6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://web.facebook.com/ChristTheMessiahChurchWuseII?mibextid=ZbWKwL&_rdc=1&_rdr#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.youtube.com/@christthemessiahchurchabuj295"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
