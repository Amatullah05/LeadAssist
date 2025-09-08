import React from 'react'
import './Testimonials.css'
import Testimonials1 from '../../assets/images/testimonial-1.png'
import Testimonials2 from '../../assets/images/testimonial-2.png'
import { TestimonialsData } from './TestimonialsData'

const Testimonials = () => {
  const TestimonialsData = ({ 
  image, 
  name, 
  position, 
  company, 
  testimonial, 
  companyLogo 
}) => {
  return (
    <div className="testimonial-block">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center">
          {/* Left side - Image */}
          <div className="col-lg-5 col-md-6">
            <div className="testimonial-image-container">
              <img 
                src={image || "https://via.placeholder.com/400x500/8DA4B8/ffffff?text=Profile"} 
                alt={name}
                className="testimonial-profile-image"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="col-lg-7 col-md-6">
            <div className="testimonial-content-container">
              {/* Header with name and company logo */}
              <div className="testimonial-header">
                <div className="author-info">
                  <h3 className="author-name">{name || "Jason Wong"}</h3>
                  <p className="author-position">{position || "CEO at Omnicharge"}</p>
                </div>
                <div className="company-logo">
                  {companyLogo ? (
                    <img src={companyLogo} alt={company} className="logo-image" />
                  ) : (
                    <span className="logo-text">omnicharge</span>
                  )}
                </div>
              </div>
              
              {/* Testimonial text */}
              <div className="testimonial-text-content">
                <p className="testimonial-quote">
                  {testimonial || "+50% to appointment rate growth and 20+ new booked meetings under 3 months for a hardware company Omnicharge"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
}

export default Testimonials;

