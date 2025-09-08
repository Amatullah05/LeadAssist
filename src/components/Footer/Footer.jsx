import React from 'react';
import './Footer.css';

// Import assets (you'll need to add these to your project)
import LinkedinIcon from '../../assets/images/Linkedin.svg';
import TwitterIcon from '../../assets/images/Twiiter.svg';
import FacebookIcon from '../../assets/images/Facebook.svg';
import InstagramIcon from '../../assets/images/Instagram.svg';
import LinkedinBtn from '../../assets/images/LnLogo.svg';
import LeadassistLogo from '../../assets/images/Logo.svg';
import YoutubeIcon from '../../assets/images/Youtube.svg';

const FooterSection = () => {
  // Define all links and social media data at the top for easy maintenance
  const legalLinks = [
    { text: "Terms of Use", href: "/terms" },
    { text: "Accessibility Statement", href: "/accessibility" },
    { text: "Cookie Policy", href: "/cookies" },
    { text: "Privacy policy", href: "/privacy" }
  ];

  const socialMedia = [
    { icon: LinkedinIcon, href: "https://linkedin.com/company/leadassist", alt: "LinkedIn" },
    { icon: YoutubeIcon, href: "https://youtube.com/leadassist", alt: "YouTube" },
    { icon: InstagramIcon, href: "https://instagram.com/leadassist", alt: "Instagram" },
    { icon: FacebookIcon, href: "https://facebook.com/leadassist", alt: "Facebook" },
    { icon: TwitterIcon, href: "https://twitter.com/leadassist", alt: "Twitter" }
  ];

  return (
    <footer className="footer-section">
      <div className="container">

        {/* Bottom Section: Company info and links */}
        <div className="container footer-bottom-section">
          <div className="row align-items-center">
            {/* Left - Logo + Name */}
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <img src={LeadassistLogo} alt="LeadAssist" className="company-logo me-2" />
            </div>

            {/* Center - Contact Info */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-evenly mb-3 mb-md-0">
              <span className="me-3 phone-number">+91-9772565365</span>
              <span className="email">friends@leadassist.co</span>
            </div>

            {/* Right - LinkedIn Partner */}
            <div className="col-12 col-md-3 d-flex justify-content-md-end justify-content-center">
              <div className="linkedin-badge d-flex align-items-center justify-content-center">
                <img src={LinkedinBtn} alt="LinkedIn" className="linkedin-icon me-2" />
                <span className="linkedin-text">Partner</span>
              </div>
            </div>
            <div className="col-12 col-md-2 d-flex justify-content-md-end justify-content-center">
            </div>
          </div>

          <div className='border-bottom'></div>

          {/* Second Row - Social Media, Copyright and Legal Links */}
          <div className="container footer-legal-social">
            <div className="row align-items-center">
              {/* Left - Copyright & Legal Links */}
              <div className="col-12 col-md-8 mb-3 mb-md-0">
                <div className="copyright mb-2">
                  © 2025 Leadassist. All rights reserved.
                </div>
                <div className="legal-links d-flex flex-wrap">
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