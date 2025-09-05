import React from 'react';

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold mb-4">FAQ</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {/* FAQ Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What do I get from LinkedIn outreach by Leadassist?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    It's a special service aimed at establishing your company's or personal brand and promoting it among your professional community with the help of helpful and valuable B2B content. The key goals of this service are: increasing your company's online presence, boosting your brand awareness, educating your target audience, and warming up prospects for further sales communication.
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Are there any hidden charges?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    No, there are no hidden charges. The price we agree upon is the price you pay.
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How do you personalize LinkedIn campaigns?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Your dedicated account manager has the skills and strategies to make your outreach stand out.
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Can I customize my campaign strategy?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes, of course! Every campaign is tailored to your business goals, target audience, and preferences. We work closely with you to ensure the strategy aligns with your objectives as well as our best practices, whether that's refining messaging, targeting specific industries, or adjusting the outreach approach.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;