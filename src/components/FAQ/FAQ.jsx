import React, { useState } from 'react';
import PlusIcon from '../../assets/images/Plus-Icon.svg';
import MinusIcon from '../../assets/images/Minus-Icon.svg';


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What do I get from LinkedIn outreach by Leadassist?",
      answer: "It's a special service aimed at establishing your company's or personal brand and promoting it among your professional community with the help of helpful and valuable B2B content. The key goals of this service are: increasing your company's online presence, boosting your brand awareness, educating your target audience, and warming up prospects for further sales communication."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, there are no hidden charges. The price we agree upon is the price you pay."
    },
    {
      question: "How do you personalize LinkedIn campaigns?",
      answer: "Your dedicated account manager has the skills and strategies to make your outreach stand out."
    },
    {
      question: "Can I customize my campaign strategy?",
      answer: "Yes, of course! Every campaign is tailored to your business goals, target audience, and preferences. We work closely with you to ensure the strategy aligns with your objectives as well as our best practices, whether that's refining messaging, targeting specific industries, or adjusting the outreach approach."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="main-h2 mb-4">FAQ</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button 
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index ? 'true' : 'false'}
                      aria-controls={`collapse${index}`}
                    >
                    <span className="accordion-icon">
                        <img 
                          src={activeIndex === index ? MinusIcon : PlusIcon} 
                          alt={activeIndex === index ? "Collapse" : "Expand"} 
                          className="accordion-icon-img"
                        />
                      </span>
                      {faq.question}
                    </button>
                  </h2>
                  <div 
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;