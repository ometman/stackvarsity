"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2 className="footer-title">Stackvarsity</h2>
          <p className="footer-description">
            Empowering developers with resources to learn, build, and grow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Ometman Technologies. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 40px 20px;
          margin: 0;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-section {
          flex: 1;
          margin: 20px;
          min-width: 200px;
        }

        .footer-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .footer-description {
          font-size: 1rem;
          line-height: 1.6;
        }

        .footer-subtitle {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin: 8px 0;
        }

        .footer-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #007bff;
        }

        .social-icons {
          display: flex;
          justify-content: start;
          gap: 15px;
          margin-top: 10px;
        }

        .social-icons a {
          color: #ffffff;
          font-size: 1.5rem;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #007bff;
        }

        .footer-copyright {
          text-align: center;
          border-top: 1px solid #333333;
          padding-top: 20px;
          margin-top: 20px;
        }

        .footer-copyright p {
          font-size: 0.9rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
          }

          .footer-section {
            margin: 20px 0;
            text-align: center;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
