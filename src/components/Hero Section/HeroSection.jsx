import React from 'react'
import BannerImg from '../../assets/images/Banner-Img.png'
import { FaArrowRightLong } from "react-icons/fa6";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="main-h1">
                  Reach and <br /> engage leads via LinkedIn
                </h1>
                <p>
                  We deliver 100–400+ qualified appointments in a year through tailored linkedin strategies.
                </p>
                <a 
                  href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
                  className="btn-primary text-decoration-none animate-fade-in-up"
                  style={{'--animation-delay': '0.4s'}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center bannner-img">
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