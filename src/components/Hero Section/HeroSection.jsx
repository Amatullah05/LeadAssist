import React from 'react'
import BannerImg from '../../assets/images/Banner-Img.png'

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="animate-fade-in-up">
                  Reach and engage leads via LinkedIn
                </h1>
                <p className="animate-fade-in-up" style={{'--animation-delay': '0.2s'}}>
                  We deliver 100–400+ qualified appointments in a year through tailored linkedin strategies.
                </p>
                <a 
                  href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
                  className="btn-primary-custom text-decoration-none animate-fade-in-up"
                  style={{'--animation-delay': '0.4s'}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src={BannerImg}
                  alt="LinkedIn Lead Generation" 
                  className="img-fluid animate-fade-in-up"
                  style={{'--animation-delay': '0.6s'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection