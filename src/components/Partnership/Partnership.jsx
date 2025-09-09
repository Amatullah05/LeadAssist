import React from 'react';
import './Partnership.css'
import favicon from '../../assets/images/favicon.svg'
import Badge from '../../assets/images/Badge.svg';
import Tick from '../../assets/images/tick.svg';
import Cross from '../../assets/images/cross.svg';

const PartnershipSection = () => {
    return (
        <section className="partnership-section">
            <div className="container">
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
                <div className="pricing-cols d-grid gap-30">
                    {/* Left Card: It's a match! */}
                    <div className="pricing-card position-relative overflow-hidden d-flex flex-column justify-content-between">
                        <div>
                            <div className="plan-header plan-badge d-flex gap-10">
                                <img src={favicon} alt="Favicon" />
                                <h4>It’s a match!</h4>
                            </div>
                            <img src={Badge} alt="Badge Icon" className="star-badge position-absolute" />
                            <div className="plan-features partnership-points-list">
                                <div className="right d-flex flex-column gap-25">
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Tick} alt="" aria-hidden="true" />
                                        <span>Your deals aren't closing</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Tick} alt="" aria-hidden="true" />
                                        <span>You're looking for an extra channel for lead generation</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Tick} alt="" aria-hidden="true" />
                                        <span>Your want to establish your industry expertise</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Tick} alt="" aria-hidden="true" />
                                        <span>You need more people to know about your brand and service</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Tick} alt="" aria-hidden="true" />
                                        <span>You struggle to differentiate from your competitors</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Tick} alt="" aria-hidden="true" />
                                        <span>You want to facilitate your sales</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Tick} alt="" aria-hidden="true" />
                                        <span>You're ready to invest into long-term relations with your leads</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="plan-footer">
                            <div className="price-info">
                            Let’s boost your sales
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

                    {/* Right Card: Sorry, not this time */}
                    <div className="pricing-card position-relative overflow-hidden d-flex flex-column justify-content-between">
                        <div>
                            <div className="plan-header plan-badge d-flex gap-10">
                                <h4>Sorry, not this time</h4>
                            </div>
                            <div className="plan-features partnership-points-list">
                                <div className="wrong d-flex flex-column gap-25">
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Cross} alt="" aria-hidden="true" />
                                        <span>We can promise quality leads, but not instant results, as LinkedIn outreach is about playing the long game</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Cross} alt="" aria-hidden="true" />
                                        <span>We need sales and marketing materials on your side to make a solid base for content plan</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Cross} alt="" aria-hidden="true" />
                                        <span>We won't be able to convert followers without social proof</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <img src={Cross} alt="" aria-hidden="true" />
                                        <span>We're against increasing your audience artificially</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plan-footer not-match-footer">
                            <div className="price-info text-gray">
                            Come back later
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;