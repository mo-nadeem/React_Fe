import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";

const FAQ = () => {
  const dispatch = useDispatch();

  const { faq } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

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

          {/* <div className="question">
            <h5>Is Medflick's medical information reliable?</h5>
            <div className="arrow"></div>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur, interdum felis in, auctor ligula. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec sed purus consectetur, interdum felis in,
                auctor ligula. Lorem ipsum dolor sit amet.{" "}
              </p>
            </div>
          </div>

          <div className="question">
            <h5>Can I communicate with medical professionals on Medflick?</h5>
            <div className="arrow"></div>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur, interdum felis in, auctor ligula. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec sed purus consectetur, interdum felis in,
                auctor ligula. Lorem ipsum dolor sit amet.{" "}
              </p>
            </div>
          </div>

          <div className="question">
            <h5>Is Medflick available on all platforms?</h5>
            <div className="arrow"></div>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur, interdum felis in, auctor ligula. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec sed purus consectetur, interdum felis in,
                auctor ligula. Lorem ipsum dolor sit amet.{" "}
              </p>
            </div>
          </div>

          <div className="question">
            <h5>What can Medflick do to help with medical travel to India?</h5>
            <div className="arrow"></div>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed purus consectetur, interdum felis in, auctor ligula. Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec sed purus consectetur, interdum felis in,
                auctor ligula. Lorem ipsum dolor sit amet.{" "}
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default FAQ;
