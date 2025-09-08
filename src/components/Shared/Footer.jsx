import React from 'react';

// Import assets (you'll need to add these to your project)
import YellowCircle from '../../assets/images/Yellow-circle.png';
import LinkedinIcon from '../../assets/images/Linkedin.svg';
import TwitterIcon from '../../assets/images/Twiiter.svg';
import FacebookIcon from '../../assets/images/Facebook.svg';
import InstagramIcon from '../../assets/images/Instagram.svg';
import LinkedinBtn from '../../assets/images/LnLogo.svg';
import LeadassistLogo from '../../assets/images/Logo.svg';

const FooterSection = () => {
  // Define all links and social media data at the top for easy maintenance
  const legalLinks = [
    { text: "Terms of Use", href: "/terms" },
    { text: "Accessibility Statement", href: "/accessibility" },
    { text: "Cookie Policy", href: "/cookies" },
    { text: "Privacy policy", href: "/privacy" }
  ];

  const socialMedia = [
    { icon: TwitterIcon, href: "https://twitter.com/leadassist", alt: "Twitter" },
    { icon: FacebookIcon, href: "https://facebook.com/leadassist", alt: "Facebook" },
    { icon: InstagramIcon, href: "https://instagram.com/leadassist", alt: "Instagram" },
    { icon: LinkedinIcon, href: "https://linkedin.com/company/leadassist", alt: "LinkedIn" }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Section: Connect with the right people */}
        <div className="row mb-5 pb-5 footer-top-section">
          <div className="col-12">
            <div className="footer-content text-center">
              <h2 className="footer-title mb-4">
                Connect with the right people
              </h2>
              <p className="footer-description mb-4 mx-auto">
                We help you grow by building your brand on LinkedIn and engaging with the decision-makers.
              </p>
              <a href="/contact" className="btn-primary mx-auto">
                Let's get started
                <img src={YellowCircle} alt="Arrow" className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
        


        {/* Bottom Section: Company info and links */}
<div className="container py-3 footer-bottom-section">
  <div className="row align-items-center">
    {/* Left - Logo + Name */}
    <div className="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0">
      <img src={LeadassistLogo} alt="LeadAssist" className="company-logo me-2" />
    </div>

    {/* Center - Contact Info */}
    <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
      <span className="me-3 phone-number">+91-9772565365</span>
      <span className="email">friends@leadassist.co</span>
    </div>

    {/* Right - LinkedIn Partner */}
    <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-center">
      <div className="linkedin-badge d-flex align-items-center justify-content-center">
        <img src={LinkedinBtn} alt="LinkedIn" className="linkedin-icon me-2" />
        <span className="linkedin-text">Partner</span>
      </div>
    </div>
  </div>

  <div className='border-bottom'></div>
  
  {/* Second Row - Social Media, Copyright and Legal Links */}
<div className="container footer-legal-social py-3">
  <div className="row align-items-center">
    {/* Left - Copyright & Legal Links */}
    <div className="col-12 col-md-8 mb-3 mb-md-0">
      <div className="copyright mb-2">
        © 2025 Leadassist. All rights reserved.
      </div>
      <div className="legal-links d-flex flex-wrap gap-3">
        {legalLinks.map((link, index) => (
          <a key={index} href={link.href} className="legal-link">
            {link.text}
          </a>
        ))}
      </div>
    </div>

    {/* Right - Social Media Icons */}
    <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-start">
      <div className="social-icons d-flex gap-3">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <div className="d-flex align-items-center justify-content-center">
              <img src={social.icon} alt={social.alt} className="social-icon" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    </footer>
  );
};

export default FooterSection;