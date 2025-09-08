
import LeftVector from '../../assets/images/CTA-Mask-1.png';
import RightVector from '../../assets/images/CTA-Mask-2.png';
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta-section">
    <div className='container'>
    <div className="cta-background">
      {/* Left Vector */}
      <div className="cta-vector cta-vector-left">
        <img src={LeftVector} alt="Decoration" className="vector-image" />
      </div>
      
      {/* Right Vector */}
      <div className="cta-vector cta-vector-right">
        <img src={RightVector} alt="Decoration" className="vector-image" />
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="main-h2 cta-title mb-4">Ready to start getting clients?</h2>
            <p className="cta-description lead mb-4">Set up a brief meeting with one of the Leadassist's experts to facilitate your business growth.</p>
            <a 
              href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule 15-min call →
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default CTA;