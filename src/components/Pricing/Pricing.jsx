import React from 'react';
import './Pricing.css'
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
        <section id="pricing" className="pricing-section-new">
            <div className="container">
                <div className="row  mb-md-5 mb-4 justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2 className="main-h2 mb-4">Crush your sales quota with Leadassist</h2>
                        <p className="pricing-main-subtitle">
                            Find out how our team can help you boost your sales and choose the best growth
                            plan that matches your company's strategy.
                        </p>
                    </div>
                </div>

                <div className="pricing-cols d-grid gap-30">
                    {/* Growth Plan */}
                    <div className="pricing-card overflow-hidden d-flex flex-column justify-content-between">
                        <div>
                            <div className="plan-header d-flex flex-column gap-20">
                                <div className="plan-badge d-flex align-items-center gap-10">
                                    <img src={favicon} alt="Favicon" />
                                    <h4>Growth</h4>
                                </div>
                                <p className="plan-description col-xl-9 col-lg-10">
                                    Kickstart your LinkedIn marketing journey with value-packed testing.
                                </p>
                            </div>

                            <div className="plan-features d-flex flex-column gap-20">
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
                        </div>
                        <div className="plan-footer">
                            <div className="price-info">
                                $350/month
                            </div>
                            <a
                                href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
                                className="btn p-0 gap-20"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="23.5" fill="#22333B" fillOpacity="0.1" stroke="black"></circle>
                                    <path d="M16.4375 24H30.875M26.0625 18.5L31.5625 24L26.0625 29.5" stroke="black" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>Book a Call
                            </a>
                        </div>
                    </div>

                    {/* Growth Plus Plan */}
                    <div className="pricing-card overflow-hidden d-flex flex-column justify-content-between">
                        <div>
                            <div className="plan-header d-flex flex-column gap-20">
                                <div className="plan-badge d-flex align-items-center gap-20">
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={favicon} alt="Favicon" />
                                        <h4>Growth Plus</h4>
                                    </div>
                                    <img src={Growthicon} alt="Growth Plus Icon" className="populer-icon" />
                                </div>
                                <p className="plan-description">
                                    Elevate LinkedIn marketing for superior results.
                                </p>
                            </div>

                            <div className="plan-features d-flex flex-column gap-20">
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
                        </div>

                        <div className="plan-footer">
                            <div className="price-info">
                                $550/month + $49/CPL
                            </div>
                            <a
                                href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
                                className="btn p-0 gap-20"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="23.5" fill="#22333B" fillOpacity="0.1" stroke="black"></circle>
                                    <path d="M16.4375 24H30.875M26.0625 18.5L31.5625 24L26.0625 29.5" stroke="black" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>Book a Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Pricing;