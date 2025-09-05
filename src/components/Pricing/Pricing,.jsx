import React from 'react';
import Profile from '../../assets/images/Profile.svg'
import Connect from '../../assets/images/Connect.svg'
import Email from '../../assets/images/Emails.svg'
import Message from '../../assets/images/Message.svg'
import Setup from '../../assets/images/Setup.svg'
import Assistance from '../../assets/images/Assistance.svg'
import favicon from '../../assets/images/favicon.svg'
import Growthicon from '../../assets/images/GrowthPlus-Icon.svg'


const Pricing = () => {
  return (
    <section className="pricing-section-new" id="pricing">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="main-h2 pricing-main-title">Crush your sales quota with Leadassist</h2>
            <p className="pricing-main-subtitle">
              Find out how our team can help you boost your sales and choose the best growth 
              plan that matches your company's strategy.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Growth Plan */}
          <div className="col-lg-6 col-xl-5">
            <div className="pricing-plan-card">
              <div className="plan-header">
                <div className="plan-badge">
                  <img src ={favicon} alt="Favicon" />
                  <span>Growth</span>
                </div>
                <p className="plan-description">
                  Kickstart your LinkedIn marketing journey with value-packed testing.
                </p>
              </div>

              <div className="plan-features">
                <div className="feature-item">
                  <div className="feature-icon">
                   <img src={Profile} alt="Profile Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Profile</strong>
                    <span>Your own profile</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Email} alt="Inmails Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Inmails</strong>
                    <span>Upto 400 Inmails/month</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Connect} alt="Connection Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Connection</strong>
                    <span>We send 500 invites/month</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Message} alt="Messaging Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Messaging</strong>
                    <span>Personalized outreach copy written</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Assistance} alt="Assistance Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Assistance</strong>
                    <span>Dedicated account manager</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Setup} alt="Setup Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Setup</strong>
                    <span>No setup fee</span>
                  </div>
                </div>
              </div>

              <div className="plan-footer">
                <div className="price-info">
                  <span className="price">$350/month</span>
                  <span className="price-subtitle">Starting at</span>
                </div>
                <button className="pay-now-btn">
                  <span>Pay now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Growth Plus Plan */}
          <div className="col-lg-6 col-xl-5">
            <div className="pricing-plan-card">
              <div className="plan-header">
                <div className="plan-badge">
                  <img src ={favicon} alt="Favicon" />
                  <span>Growth Plus</span>
                  <div className="popular-badge">
                    <img src={Growthicon} alt="Growth Plus Icon" />
                  </div>
                </div>
                <p className="plan-description">
                  Elevate LinkedIn marketing for superior results.
                </p>
              </div>

              <div className="plan-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Profile} alt="Profile Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Profile</strong>
                    <span>5 Personalized profiles</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Email} alt="Inmails Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Inmails</strong>
                    <span>Upto 400 Inmails/month/account</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Connect} alt="Connection Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Connection</strong>
                    <span>We send 500 invites/month/account</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Message} alt="Messaging Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Messaging</strong>
                    <span>Personalized outreach copy written with A/B testing</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Assistance} alt="Assistance Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Assistance</strong>
                    <span>Dedicated account manager</span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={Setup} alt="Setup Icon" />
                  </div>
                  <div className="feature-content">
                    <strong>Setup</strong>
                    <span>No setup fee</span>
                  </div>
                </div>
              </div>

              <div className="plan-footer">
                <div className="price-info">
                  <span className="price">$550/month + $49/cve lead</span>
                  <span className="price-subtitle">Starting at</span>
                </div>
                <button className="pay-now-btn">
                  <span>Pay now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   
export default Pricing;