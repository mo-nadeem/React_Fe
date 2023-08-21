import React, { useState } from "react";

const TreatmentFAQ = ({ faq }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  return (
    <>
      <section id="faqs-home">
        <div className="midbox-inner  wiki-mk">
          <h2>
            Frequently asked <span>questions</span>
          </h2>
          {faq &&
            faq.map((e, index) => (
              <div
                key={e.id}
                className={`question ${
                  activeQuestion === index ? "active" : ""
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                <h5> Q. {e.short_description}</h5>
                <div
                  className={`arrow ${
                    activeQuestion === index ? "arrow-active" : ""
                  }`}
                ></div>
                {activeQuestion === index && (
                  <div className="answer" style={{ display: "block" }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: e.long_description }}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default TreatmentFAQ;
