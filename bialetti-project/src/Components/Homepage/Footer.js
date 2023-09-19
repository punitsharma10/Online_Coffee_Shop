import React from 'react';
import './Footer.css';
import { FaArrowUp, FaTwitter, FaFacebook, FaInstagram, FaStore, FaPen } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-left">

        <div className="newsletter-section">
          <p>Signup for our newsletter</p>
          <h1><strong>YOU WILL RECEIVE AN IMMEDIATE 10% <br/>DISCOUNT ON YOUR FIRST ORDER</strong></h1>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBMIT</button>
          </div>
        </div>

        <div className="social-media-section">
          <div className="social-icons">
            <a href="https://www.facebook.com/Bialetti/"><FaFacebook /><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/bialetti/"><FaInstagram /><i className="fab fa-instagram"></i></a>
          </div>

          <div className='about_us'>
            <a href='https://www.bialetti.com/it_en/chi-siamo' >About Us</a>
            <a href='https://www.bialetti.com/it_en/la-storia' >Our History</a>
            <a href='https://www.bialetti.com/it_en/bialetti-careers' >Careers</a>
            <a href='#' >Investor Relations</a>
          </div>
        </div>
      </div>



      <div className="footer-right">
        <div className="footer-links">
          <div className="footer-column">
            <h2><strong>LEGAL</strong></h2>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Selling Conditions</a></li>
              <li><a href="#">Regulations</a></li>
              <li><a href="#">B2B</a></li>
            </ul>
          </div>

          <div className="footer-column">
             <h2><strong>SUPPORT</strong></h2>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Payment Methods</a></li>
            </ul>
          </div>
          <div className="footer-column">
           <h2><strong>ADDRESS</strong></h2>
            <ul>
              <li>Registered Office</li>
              <li>Via Fogliano, 1</li>
              <li>25030 Coccaglio BS</li>
              <li>Italia</li>
              <li>Email: bialetti@gmail.com</li>
            </ul>
          </div>
        </div>

        
        <div className="footer-buttons">
          <button> <FaPen /> CONTACT US</button>
          <button> <FaStore /> SERVICE CENTER</button>
          <button className='top_btn' onClick={scrollToTop}><FaArrowUp />UP</button>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()}  Bialetti Industrie S.p.A. / Cap. Soc. i.v. Euro 1.041.628,00 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



