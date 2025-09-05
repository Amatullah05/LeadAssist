import React from 'react'
import Testimonials1 from '../../assets/images/testimonial-1.png'
import Testimonials2 from '../../assets/images/testimonial-2.png'

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-4 fw-bold mb-4">Businesses stand out with us</h2>
              <p className="lead">Check out how other companies power-up their sales through increasing brand awareness and growing their LinkedIn audience.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "Maximizing sales potential: 15% of deal closing ratio for a payment solution provider"
                </div>
                <div className="testimonial-author">
                  <img 
                    src={Testimonials1} 
                    alt="Cristina Alvarez Barrett" 
                    className="author-image"
                  />
                  <div className="author-info">
                    <h5>Cristina Alvarez Barrett</h5>
                    <p>CEO & President at MONA Payment Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "+50% to appointment rate growth and 20+ new booked meetings under 3 months for a hardware company Omnicharge"
                </div>
                <div className="testimonial-author">
                  <img 
                    src={Testimonials2} 
                    alt="Jason Wong" 
                    className="author-image"
                  />
                  <div className="author-info">
                    <h5>Jason Wong</h5>
                    <p>CEO at Omnicharge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a 
              href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
              className="btn-primary-custom text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule 15-min call
            </a>
          </div>
        </div>
      </section>
  )
}

export default Testimonials