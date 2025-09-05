import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  // Define social media links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/leadassist', icon: FaLinkedin },
    { name: 'Facebook', url: 'https://www.facebook.com/leadassist', icon: FaFacebook },
    { name: 'Instagram', url: 'https://www.instagram.com/leadassist', icon: FaInstagram },
    { name: 'Twitter', url: 'https://www.twitter.com/leadassist', icon: FaTwitter },
    { name: 'YouTube', url: 'https://www.youtube.com/leadassist', icon: FaYoutube },
  ];

  // Define quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'FAQ', path: '#faq' },
  ];

  // Define services links
  const serviceLinks = [
    { name: 'LinkedIn Outreach', path: '#services' },
    { name: 'Content Creation', path: '#services' },
    { name: 'Lead Generation', path: '#services' },
    { name: 'Brand Building', path: '#services' },
  ];

  // Define footer bottom links
  const bottomLinks = [
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Accessibility Statement', path: '/accessibility' },
  ];

  return (
    <footer className="footer-sec" style={{backgroundColor: '#f8f9fa', paddingTop: '60px'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {/* Logo & Description */}
              <div className="col-lg-4 mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="me-2"
                    style={{
                      backgroundColor: '#FFDA30',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>📧</span>
                  </div>
                  <span className="fw-bold fs-4">leadassist</span>
                </div>
                <p className="mb-4">
                  LeadAssist simplifies LinkedIn lead generation for businesses. With proven strategies, personalized outreach, and thought leadership content, we help you connect with decision-makers and grow your business with confidence.
                </p>
                <a 
                  href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
                  className="btn text-decoration-none d-inline-flex align-items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FFDA30',
                    color: '#000',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontWeight: '600',
                    border: 'none'
                  }}
                >
                  Get Started <FaArrowRight />
                </a>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="fw-bold mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  {quickLinks.map((link) => (
                    <li key={link.name} className="mb-2">
                      <a href={link.path} className="text-decoration-none text-muted">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="fw-bold mb-3">Our Services</h5>
                <ul className="list-unstyled">
                  {serviceLinks.map((link) => (
                    <li key={link.name} className="mb-2">
                      <a href={link.path} className="text-decoration-none text-muted">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="col-lg-4 mb-4">
                <h5 className="fw-bold mb-3">Get in Touch</h5>
                <div className="mb-3">
                  <a href="tel:+919772565365" className="text-decoration-none text-muted d-block mb-2">
                    +91 9772565365
                  </a>
                  <a href="mailto:friends@leadassist.co" className="text-decoration-none text-muted d-block mb-2">
                    friends@leadassist.co
                  </a>
                </div>
                
                <div className="d-flex gap-3 mb-3">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                        <IconComponent 
                          style={{
                            fontSize: '24px', 
                            color: '#6c757d',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseOver={(e) => e.target.style.color = '#FFDA30'}
                          onMouseOut={(e) => e.target.style.color = '#6c757d'}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="col-12 mt-4 mb-4">
              <p className="small text-muted">
                <strong>Disclaimer:</strong> The information provided on LeadAssist is for general informational purposes only. While we strive to ensure the accuracy and reliability of the content, we make no representations or warranties about the completeness, accuracy, or suitability of any information or services featured on this website. LinkedIn outreach results may vary based on industry, target audience, and market conditions.
              </p>
            </div>

            {/* Footer Bottom Links */}
            <div className="row border-top pt-4 mt-4">
              <div className="col-12">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <p className="mb-2 mb-md-0 text-muted">
                    LeadAssist Inc. Copyright © 2024 LeadAssist all rights reserved.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    {bottomLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.path}
                        className="text-decoration-none text-muted small"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;