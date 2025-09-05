import React from 'react'
import Marquee from "react-fast-marquee";
import Logo1 from '../../assets/images/Logo-1.png'
import Logo2 from '../../assets/images/Logo-2.png'
import Logo3 from '../../assets/images/Logo-3.png'
import Logo4 from '../../assets/images/Logo-4.png'
import Logo5 from '../../assets/images/Logo-5.png'
import Logo6 from '../../assets/images/Logo-6.png'
import Logo7 from '../../assets/images/Logo-7.png'

const Logos = () => {
  return (
    <section className="client-logos">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <Marquee gradient={false} speed={50}>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
                <div className="logo-container">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Logo1} alt="Citcon" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Logo2} alt="Cemtrex" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Logo3} alt="Born Bred" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Logo4} alt="CitrusAd" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Logo5} alt="Berkeley" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Logo6} alt="Digital Knights" />
                  </div>
                </div>
                <div className="logo-container">
                  <div className="d-flex flex-column align-items-center">
                    <img src={Logo7} alt="Digital Knights" />
                  </div>
                </div>
              </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Logos