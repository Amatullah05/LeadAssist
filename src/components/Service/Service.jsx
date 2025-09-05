import React from 'react'
import ServiceImg1 from '../../assets/images/Service-Img-1.png'
import ServiceImg2 from '../../assets/images/Service-Img-2.png'

const Service = () => {
  return (
    <section className="services-section" id="services">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 fw-bold mb-4">What's inside LinkedIn Outreach service?</h2>
              <p className="lead">Check out how we help you build meaningful relations with your audience until they become your clients.</p>
            </div>
          </div>
          
          <div className="row g-5 mb-5">
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>LinkedIn outreach</h3>
                <p>Engaging into meaningful conversations with your connections</p>
                <ul className="list-unstyled">
                  <li className="mb-2">• Our team will first have a discovery call with you to understand your Ideal Customer Profile (ICP) and business goals.</li>
                  <li className="mb-2">• Based on the insights gathered, we'll curate a tailored lead list that aligns with your target audience.</li>
                  <li className="mb-2">• We'll optimize your LinkedIn profile, ensuring it looks professional and aligned with your brand.</li>
                  <li className="mb-2">• You'll be assigned an account manager who will oversee the entire process. A content writer will develop custom outreach messages reflecting your offer.</li>
                  <li className="mb-2">• We'll begin sending personalized messages to your prospects and follow up multiple times to maximize engagement.</li>
                </ul>
                <a 
                  href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
                  className="btn-primary-custom text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src={ServiceImg1} 
                  alt="LinkedIn Outreach" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src={ServiceImg2} 
                  alt="Thought Leadership" 
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Thought-leadership content</h3>
                <p>Creating viral posts to help you become key opinion leader</p>
                <ul className="list-unstyled">
                  <li className="mb-2">• First, we research your TAM and competitors, as well as get acquainted with your ICP and their pain points to create a stellar content strategy and plan.</li>
                  <li className="mb-2">• Our copywriters produce exclusive content that resonates with your audience and drives impressions, reactions, and reposts.</li>
                  <li className="mb-2">• We track posts performance, and adjust the strategy to convert your followers into qualified leads, interested in your solutions.</li>
                </ul>
                <a 
                  href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
                  className="btn-primary-custom text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Service;