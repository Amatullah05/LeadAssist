import React from 'react'
import './Service.css'
import ServiceImg1 from '../../assets/images/Service-Img-1.png'
import ServiceImg2 from '../../assets/images/Service-Img-2.png'
import BtnArrow from "../../assets/images/btn-round-arr.svg";

const Service = () => {
	return (
		<section className="services-section" id="services">
			<div className="container">
				<div className="row mb-5 justify-content-center">
					<div className="col-lg-7 text-center">
						<h2 className="main-h2 display-4 mb-4">What's inside LinkedIn Outreach service?</h2>
						<p className="lead">Check out how we help you build meaningful relations with your audience until they become your clients.</p>
					</div>
				</div>

				<div className="row align-items-center mb-5">
					<div className="col-lg-6">
						<div className="service-card">
							<h3 className='main-h3 mb-4 pb-2'>LinkedIn outreach</h3>
							<p>Engaging into meaningful conversations with your connections</p>
							<ul className="mb-5">
								<li className="list-item mb-3">
									Our team will first have a discovery call with you to understand your Ideal Customer Profile (ICP) and business goals.
								</li>
								<li className="list-item mb-3">Based on the insights gathered, we'll curate a tailored lead list that aligns with your target audience.</li>
								<li className="list-item mb-3">We'll optimize your LinkedIn profile, ensuring it looks professional and aligned with your brand.</li>
								<li className="list-item mb-3">You'll be assigned an account manager who will oversee the entire process. A content writer will develop custom outreach messages reflecting your offer.</li>
								<li className="list-item mb-3">We'll begin sending personalized messages to your prospects and follow up multiple times to maximize engagement.</li>
							</ul>
							<a
								href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
								className="btn p-0 gap-20"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
									<circle cx="28.5" cy="28.5" r="28" fill="#FF7F00" fill-opacity="0.01" stroke="#FF7F00"></circle>
									<path d="M20.4375 28H34.875M30.0625 22.5L35.5625 28L30.0625 33.5" stroke="#FF7F00" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>Book a Call
							</a>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="text-center">
							<img
								src={ServiceImg1}
								alt="LinkedIn Outreach"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="text-center">
							<img
								src={ServiceImg2}
								alt="Thought Leadership"
								className="img-fluid"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="service-card">
							<div className="service-icon">
								<i className="fas fa-chart-line"></i>
							</div>
							<h3 className='main-h3 mb-4 pb-2'>Thought-leadership content</h3>
							<p>Creating viral posts to help you become key opinion leader</p>
							<ul className="mb-5">
								<li className="list-item mb-3">First, we research your TAM and competitors, as well as get acquainted with your ICP and their pain points to create a stellar content strategy and plan.</li>
								<li className="list-item mb-3">Our copywriters produce exclusive content that resonates with your audience and drives impressions, reactions, and reposts.</li>
								<li className="list-item mb-3">We track posts performance, and adjust the strategy to convert your followers into qualified leads, interested in your solutions.</li>
							</ul>
							<a
								href="https://calendly.com/meetings-leadassist/15-min-discovery-call"
								className="btn p-0 gap-20"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
									<circle cx="28.5" cy="28.5" r="28" fill="#FF7F00" fill-opacity="0.01" stroke="#FF7F00"></circle>
									<path d="M20.4375 28H34.875M30.0625 22.5L35.5625 28L30.0625 33.5" stroke="#FF7F00" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>Book a Call
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Service;