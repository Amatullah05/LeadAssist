import React from 'react'
import './HeroSection.css'
import BannerImg from '../../assets/images/Banner-Img.png'
import BtnArrow from "../../assets/images/btn-arr.svg";

const HeroSection = () => {
    return (
        <section id="top" className="hero-section">
            <div className="container">
                <div className="row align-items-center justify-content-lg-start justify-content-center row-gap-50">
                    <div className="col-lg-6 col-md-9">
                        <div className="hero-content text-lg-start text-center">
                            <h1 className="main-h1">
                                Reach and engage leads via LinkedIn
                            </h1>
                            <p className="col-lg-12 col-md-11 mx-auto">
                                We deliver 100–400+ qualified appointments in a year through tailored linkedin strategies.
                            </p>
                            <a
                                href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
                                className="btn btn-primary animate-fade-in-up mx-lg-0 mx-auto"
                                style={{ '--animation-delay': '0.4s' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Book a call <img src={BtnArrow} alt="Arrow" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center bannner-img">
                            <img
                                src={BannerImg}
                                alt="LinkedIn Lead Generation"
                                className="img-fluid animate-fade-in-up"
                                style={{ '--animation-delay': '0.6s' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection