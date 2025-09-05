import React from 'react';

// Import assets (you'll need to add these to your project)
import YellowCircle from '../../assets/images/Yellow-circle.png';
import LinkedinIcon from '../../assets/images/Linkedin.svg';
import TwitterIcon from '../../assets/images/Twiiter.svg';
import FacebookIcon from '../../assets/images/Facebook.svg';
import InstagramIcon from '../../assets/images/Instagram.svg';
import LinkedinBtn from '../../assets/images/Linkedin-btn.png';
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
    { icon: InstagramIcon, href: "https://instagram.com/leadassist", alt: "Instagram" }
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
        <div className="row footer-bottom-section">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="company-info">
              <img src={LeadassistLogo} alt="LeadAssist" className="company-logo mb-3" />
              <div className="contact-details">
                <p className="phone-number">+91-9772565365</p>
                <p className="email">friends@leadassist.co</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="social-legal-section">
              {/* Top part: LinkedIn Partner button */}
              <div className="linkedin-partner-section mb-4">
                <div className="linkedin-label mb-2">LinkedIn Partner</div>
                <img src={LinkedinBtn} alt="LinkedIn Button" className="linkedin-btn" />
              </div>
              
              {/* Middle part: Social media icons */}
              <div className="social-media-section mb-4 pb-4 border-bottom">
                <div className="social-icons">
                  {socialMedia.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link"
                    >
                      <img src={social.icon} alt={social.alt} className="social-icon" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Bottom part: Copyright and legal links */}
              <div className="footer-bottom">
                <div className="copyright mb-2">
                  © 2025 Leadassist. All right reserved.
                </div>
                <div className="legal-links">
                  {legalLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <a href={link.href} className="legal-link">
                        {link.text}
                      </a>
                      {index < legalLinks.length - 1 && <span className="link-separator">|</span>}
                    </React.Fragment>
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