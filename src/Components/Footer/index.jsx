// src/components/Footer.jsx
import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './index.css';

const Footer = () => {
  return (
    <div className="footers-container">
      <div className="footer">
        <FaGoogle className="footer-icon" />
        <FaTwitter className="footer-icon" />
        <FaInstagram className="footer-icon" />
        <FaYoutube className="footer-icon" />
      </div>
      <p className="contact-us">Contact Us</p>
    </div>
  );
};

export default Footer;
