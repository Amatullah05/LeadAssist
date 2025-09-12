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
            {/* Bottom Section: Company info and links */}
            <div className="container d-flex flex-column gap-50">
                <div className="row align-items-center">
                    {/* Left - Logo + Name */}
                    <div className="col-12 footer-row-1 d-flex align-items-start align-items-md-center flex-wrap">
                        <div>
                            <img src={LeadassistLogo} alt="LeadAssist" className="company-logo me-2" height="47" />
                        </div>

                        {/* Center - Contact Info */}
                        <div className="d-flex align-items-center gap-30 footer-cont-detail">
                            <span className="phone-number">+91-9772565365</span>
                            <span className="email">friends@leadassist.co</span>
                        </div>

                        {/* Right - LinkedIn Partner */}
                        <div>
                            <div className="linkedin-badge d-flex align-items-center justify-content-center">
                                <img src={LinkedinBtn} alt="LinkedIn" className="linkedin-icon me-2" />
                                <span className="linkedin-text">Partner</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Second Row - Social Media, Copyright and Legal Links */}
                <div className="row align-items-center">
                    {/* Left - Copyright & Legal Links */}
                    <div className="col-12 d-flex align-items-start align-items-lg-center justify-content-between gap-35 flex-lg-row flex-column">
                        <div className="d-flex flex-md-column flex-column-reverse row-gap-15">
                            <div className="copyright">
                                © 2025 Leadassist. All rights reserved.
                            </div>
                            <div className="legal-links d-flex flex-md-row flex-column flex-wrap">
                                {legalLinks.map((link, index) => (
                                    <a key={index} href={link.href} className="legal-link">
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right - Social Media Icons */}
                        <div className="d-flex justify-content-md-end justify-content-start">
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
        </footer >
    );
};

export default FooterSection;