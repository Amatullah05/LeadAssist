import React from 'react'
import './Testimonials.css'
import testimonials from '../../data/TestimonialsData'

const TestimonialCard = ({ image, name, position, company, testimonial, companyLogo }) => {
  return (
    <div className="testimonial-block">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="testimonial-image-container">
              <img
                src={image || "https://via.placeholder.com/400x500/8DA4B8/ffffff?text=Profile"}
                alt={name}
                className="testimonial-profile-image"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="testimonial-content-container">
              <div className="testimonial-header">
                <div className="author-info">
                  <h3 className="author-name">{name}</h3>
                  <p className="author-position">{position}{company ? ` at ${company}` : ''}</p>
                </div>
                <div className="company-logo">
                  {companyLogo ? (
                    <img src={companyLogo} alt={company} className="logo-image" />
                  ) : null}
                </div>
              </div>
              <div className="testimonial-text-content">
                <p className="testimonial-quote">{testimonial}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      {testimonials.map((t, index) => (
        <TestimonialCard key={index} {...t} />
      ))}
    </section>
  )
}

export default Testimonials

