import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar bg-white sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Leadassist Logo" height="50" />
        </Link>

        {/* Desktop Menu */}
        <nav className="d-none d-lg-flex align-items-center">
          <ul className="navbar-nav ms-auto me-4 d-flex flex-row">
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
        </nav>

        {/* Custom Mobile Toggle (not bootstrap button) */}
        <div
          className="mobile-menu-toggle d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Simple icon (3 bars) */}
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu d-lg-none bg-white p-3">
          <ul className="navbar-nav d-flex flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#top" onClick={() => setMenuOpen(false)}>Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            </li>
          </ul>
          <a
            href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
            className="btn btn-primary mt-3"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
