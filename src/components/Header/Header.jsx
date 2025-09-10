import React from 'react';
import './Header.css';
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-white navbar-light sticky-top">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="Leadassist Logo" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <a className="nav-link" href="#top">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
          </ul>
          <a
            href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
            className="btn btn-primary text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;