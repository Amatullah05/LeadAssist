import React from 'react'

const CTA = () => {
  return (
     <section className="py-5" style={{backgroundColor: '#f8fafc'}}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="display-4 fw-bold mb-4">Ready to start getting clients?</h2>
              <p className="lead mb-4">Set up a brief meeting with one of the Leadassist's experts to facilitate your business growth.</p>
              <a 
                href="https://calendly.com/meetings-leadassist/15-min-discovery-call" 
                className="btn-primary-custom text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule 15-min call
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTA