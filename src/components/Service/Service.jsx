import React from 'react'
import ServiceImg1 from '../../assets/images/Service-Img-1.png'
import ServiceImg2 from '../../assets/images/Service-Img-2.png'

const Service = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="main-h2 display-4 mb-4">What's inside LinkedIn Outreach service?</h2>
            <p className="lead">Check out how we help you build meaningful relations with your audience until they become your clients.</p>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-6">
            <div className="service-card">
              <h3 className='main-h3'>LinkedIn outreach</h3>
              <p>Engaging into meaningful conversations with your connections</p>
              <ul className="list-unstyled">
                <li className="list-item mb-3">
                  <span className='list-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18">
                      <path d="M0.794578 8.21661C0.355744 8.21661 0 8.53 0 8.9166C0 9.30322 0.355744 9.61661 0.794578 9.61661V8.21661ZM25.8238 9.61661C26.2626 9.61661 
                      26.6184 9.30322 26.6184 8.9166C26.6184 8.53 26.2626 8.21661 25.8238 8.21661V9.61661ZM27.0156 8.9166L27.5525 9.43264C27.7168 9.3 27.8102 9.11282 
                      27.8102 8.9166C27.8102 8.7204 27.7168 8.53322 27.5525 8.40057L27.0156 8.9166ZM18.0176 0.700598C17.6941 0.439363 17.1915 0.458615 16.8949 0.743598C16.5985 
                      1.02858 16.6203 1.47138 16.9438 1.73261L18.0176 0.700598ZM16.9438 16.1006C16.6203 16.3618 16.5985 16.8046 16.8949 17.0896C17.1915 17.3746 17.6941 17.3938
                       18.0176 17.1326L16.9438 16.1006ZM0.794578 9.61661H25.8238V8.21661H0.794578V9.61661ZM27.5525 8.40057L18.0176 0.700598L16.9438 1.73261L26.4787 9.43264L27.5525 
                       8.40057ZM26.4787 8.40057L16.9438 16.1006L18.0176 17.1326L27.5525 9.43264L26.4787 8.40057Z"></path>
                    </svg>
                  </span>
                    <span className='list-text'>
                      Our team will first have a discovery call with you to understand your Ideal Customer Profile (ICP) and business goals.
                    </span>
                </li>
                <li className="list-item mb-3">• Based on the insights gathered, we'll curate a tailored lead list that aligns with your target audience.</li>
                <li className="list-item mb-3">• We'll optimize your LinkedIn profile, ensuring it looks professional and aligned with your brand.</li>
                <li className="list-item mb-3">• You'll be assigned an account manager who will oversee the entire process. A content writer will develop custom outreach messages reflecting your offer.</li>
                <li className="list-item mb-3">• We'll begin sending personalized messages to your prospects and follow up multiple times to maximize engagement.</li>
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
              <h3 className='main-h3'>Thought-leadership content</h3>
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