import React from 'react';
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Leadassist Logo" height="40" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
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
            className="btn-primary text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;