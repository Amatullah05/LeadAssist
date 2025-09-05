import React from 'react';
import YellowCircle from '../../assets/images/Yellow-circle.png';

const Leads = () => {
  return (
  <>
       <div className="yellow-circle">
        <img src={YellowCircle} />
      </div> 
    <section className="leads-hero-section"> 
      <div className="container">
        <div className="leads-container">
          <div className="row align-items-center g-4">
            {/* Left content */}
            <div className="col-lg-6">
              <div className="leads-content">
                <h1 className="leads-title">Get leads from LinkedIn</h1>
                <p className="leads-subtitle">
                  Seize the power of the largest professional network with Leadassist.
                </p>
                <a
                  href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call →
                </a>
              </div>
            </div>
            
            {/* Right stats */}
            <div className="col-lg-6">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">new opportunities yearly</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15%</div>
                  <div className="stat-label">deal closing rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10:1</div>
                  <div className="stat-label">ROI achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Leads;