import React from 'react'
import './Testimonials.css'
import testimonials from '../../data/TestimonialsData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import OmniLogo from '../../assets/images/omni-logo.svg'
import BtnArrow from "../../assets/images/btn-arr.svg";

const Testimonials = () => {
    return (
        <section className="testimonials-section overflow-hidden">
            <div className="container">
                <div className="row row-gap-35">
                    <div className="col-md-7">
                        <h2 className="main-h2 mb-3">Businesses stand out with us</h2>
                        <p>Check out how other companies power-up their sales through increasing brand
                            awareness and growing their LinkedIn audience.</p>
                    </div>
                    <div className="col-12">
                        <div className="testimonials-container">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 5000, disableOnInteraction: true }}
                                loop={true}
                                speed={700}
                                spaceBetween={60}
                                className="overflow-visible"
                            >
                                {testimonials.map((t, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-block d-flex gap-40">
                                            <div className="testimonial-image-col">
                                                <img
                                                    src={t.image || "https://via.placeholder.com/400x500/8DA4B8/ffffff?text=Profile"}
                                                    alt={t.name}
                                                    className="testimonial-profile-image"
                                                />
                                            </div>
                                            <div className="testimonial-content-col">
                                                <div className="testimonial-header d-flex align-items-center">
                                                    <div className="author-info">
                                                        <h3 className="author-name">{t.name}</h3>
                                                        <p className="author-designation">{t.position}{t.company ? ` at ${t.company}` : ''}</p>
                                                    </div>
                                                    <div className="company-logo">
                                                        <img src={OmniLogo} alt="" />
                                                    </div>
                                                </div>
                                                <div className="testimonial-text-content">
                                                    <p className="testimonial-quote">{t.testimonial}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <a
                            href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
                            className="btn btn-primary m-auto animate-fade-in-up"
                            style={{ '--animation-delay': '0.4s' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Schedule 15-min call <img src={BtnArrow} alt="Arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials