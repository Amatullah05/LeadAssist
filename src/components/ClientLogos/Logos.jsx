import React from 'react'
import './Logos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import Logo1 from '../../assets/images/Logo-1.png'
import Logo2 from '../../assets/images/Logo-2.png'
import Logo3 from '../../assets/images/Logo-3.png'
import Logo4 from '../../assets/images/Logo-4.png'
import Logo5 from '../../assets/images/Logo-5.png'
import Logo6 from '../../assets/images/Logo-6.png'
import Logo7 from '../../assets/images/Logo-7.png'

const Logos = () => {
  return (
    <section className="client-logos overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Autoplay, FreeMode]}
              freeMode={true}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={5000}
              slidesPerView={2}
              spaceBetween={40}
              breakpoints={{
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 }
              }}
              className="client-logo-carousel overflow-visible"
            >
              <SwiperSlide>
                <div className="logo-container d-flex flex-column align-items-center justify-content-center">
                  <img src={Logo1} alt="Citcon" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-container d-flex flex-column align-items-center justify-content-center">
                  <img src={Logo2} alt="Cemtrex" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-container d-flex flex-column align-items-center justify-content-center">
                  <img src={Logo3} alt="Born Bred" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-container d-flex flex-column align-items-center justify-content-center">
                  <img src={Logo4} alt="CitrusAd" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-container d-flex flex-column align-items-center justify-content-center">
                  <img src={Logo5} alt="Berkeley" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-container d-flex flex-column align-items-center justify-content-center">
                  <img src={Logo6} alt="Digital Knights" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-container d-flex flex-column align-items-center justify-content-center">
                  <img src={Logo7} alt="Digital Knights" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logos