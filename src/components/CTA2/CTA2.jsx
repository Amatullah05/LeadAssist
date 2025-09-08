import React from 'react'
import YellowCircle from '../../assets/images/Yellow-circle.png';
import './CTA2.css'

const CTA2 = () => {
    return (
        <div className='cta2-section'>
            <div className="container">
                {/* Top Section: Connect with the right people */}
                <div className="row mb-5 pb-5">
                    <div className="col-12">
                        <div className="cta2-content text-center">
                            <img src={YellowCircle} className="cta2-yellow-circle" />
                            <h2 className="cta2-title mb-4">
                                Connect with the right people
                            </h2>
                            <p className="cta2-description mb-4 mx-auto">
                                We help you grow by building your brand on LinkedIn and engaging with the decision-makers.
                            </p>
                            <a href="/contact" className="btn btn-primary mx-auto">
                                Let's get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA2