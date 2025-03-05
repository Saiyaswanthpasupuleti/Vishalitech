import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer id="footer" className={`py-4 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Address</h3>
            <p>123 Gourmet Street, Food City, FC 12345</p>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@gourmetbites.com</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://instagram.com" className="text-decoration-none">
                <FaInstagram className="mx-2" size={24} />
              </a>
              <a href="https://facebook.com" className="text-decoration-none">
                <FaFacebook className="mx-2" size={24} />
              </a>
              <a href="https://twitter.com" className="text-decoration-none">
                <FaTwitter className="mx-2" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;