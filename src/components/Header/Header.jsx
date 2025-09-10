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
          {menuOpen ? (
            // Close (X) Icon
           <svg
      aria-hidden="true"
      role="presentation"
      className="elementor-menu-toggle__icon--close"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"  // Makes it inherit text color
    >
      <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
    </svg>
  ) : (
    // Hamburger Icon
    <svg
      aria-hidden="true"
      role="presentation"
      className="elementor-menu-toggle__icon--open"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
    >
      <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
    </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu d-lg-none bg-white pt-3">
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
        </div>
      )}
    </header>
  );
};

export default Header;
