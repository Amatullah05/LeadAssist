import React from 'react'
import './CTA2.css'
import YellowCircle from '../../assets/images/Yellow-circle.png';
import BtnArrow from "../../assets/images/btn-arr.svg";

const CTA2 = () => {
    return (
        <div className='cta2-section position-relative'>
            <img src={YellowCircle} className="cta2-yellow-circle d-md-block d-none" />
            <div className="container">
                {/* Top Section: Connect with the right people */}
                <div className="row">
                    <div className="col-12">
                        <div className="cta2-content text-center">
                            <h2 className="main-h2 mb-4">
                                Connect with the right people
                            </h2>
                            <p className="cta2-description mb-5 mx-auto">
                                We help you grow by building your brand on LinkedIn and engaging with the decision-makers.
                            </p>
                            <a
                                href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
                                className="btn btn-primary animate-fade-in-up mx-auto"
                                style={{ '--animation-delay': '0.4s' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Let’s get started <img src={BtnArrow} alt="Arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA2