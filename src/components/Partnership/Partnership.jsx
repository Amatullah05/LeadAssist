import React from 'react';
import './Partnership.css'
import Badge from '../../assets/images/Badge.svg';

const PartnershipSection = () => {
  return (
    <section className="partnership-section py-5">
      <div className="container partnership-container">
        {/* Main Heading and Subtitle */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="main-h2 partnership-title mb-4">
              Will our partnership bring results?
            </h2>
            <p className="lead text-gray partnership-subtitle">
              To meet and exceed your expectations, we focus only on things we can guarantee.<br />
              Check these items to see if we make a good fit.
            </p>
          </div>
        </div>
        
        {/* Two Card Columns */}
        <div className="row g-4 partnership-cards-row">
          {/* Left Card: It's a match! */}
          <div className="col-lg-6">
            <div className="card h-100 partnership-card match-card">
              <div className="card-body">
                <div className="card-header-container">
                  <h4 className="card-title text-success partnership-card-title">
                    <span className="bullet-point me-2">&#9679;</span>
                    It's a match!
                  </h4>
                  <div className="star-icon">
                    <img src={Badge} alt="Badge Icon" />
                  </div>
                </div>
                <div className="card-border-bottom"></div>
                <ul className="list-unstyled partnership-list">
                  <li className="mb-3">
                    <span className="list-icon checkmark me-2">✓</span>Your deals aren't closing
                  </li>
                  <li className="mb-3">
                    <span className="list-icon checkmark me-2">✓</span>You're looking for an extra channel for lead generation
                  </li>
                  <li className="mb-3">
                    <span className="list-icon checkmark me-2">✓</span>Your want to establish your industry expertise
                  </li>
                  <li className="mb-3">
                    <span className="list-icon checkmark me-2">✓</span>You need more people to know about your brand and service
                  </li>
                  <li className="mb-3">
                    <span className="list-icon checkmark me-2">✓</span>You struggle to differentiate from your competitors
                  </li>
                  <li className="mb-3">
                    <span className="list-icon checkmark me-2">✓</span>You want to facilitate your sales
                  </li>
                  <li className="mb-3">
                    <span className="list-icon checkmark me-2">✓</span>You're ready to invest into long-term relations with your leads
                  </li>
                </ul>
                <div className="card-footer-container">
                  <a 
                    href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
                    className="cta-button-leadassist text-decoration-none text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Let's boost your sales</span>
                    <span className="d-block mt-2">Book a Call &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card: Sorry, not this time */}
          <div className="col-lg-6">
            <div className="card h-100 partnership-card not-match-card">
              <div className="card-body">
                <div className="card-header-container">
                  <h4 className="card-title text-warning partnership-card-title">Sorry, not this time</h4>
                </div>
                <div className="card-border-bottom"></div>
                <ul className="list-unstyled partnership-list">
                  <li className="mb-3">
                    <span className="list-icon cross-mark me-2">×</span>We can promise quality leads, but not instant results, as LinkedIn outreach is about playing the long game
                  </li>
                  <li className="mb-3">
                    <span className="list-icon cross-mark me-2">×</span>We need sales and marketing materials on your side to make a solid base for content plan
                  </li>
                  <li className="mb-3">
                    <span className="list-icon cross-mark me-2">×</span>We won't be able to convert followers without social proof
                  </li>
                  <li className="mb-3">
                    <span className="list-icon cross-mark me-2">×</span>We're against increasing your audience artificially
                  </li>
                </ul>
                <div className="card-footer-container">
                  <h5 className="text-warning partnership-card-footer-title not-match-footer">
                    Come back later
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;