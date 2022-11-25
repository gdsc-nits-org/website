import "./Faq.scss";
import { faqData } from "./dataset";
import { SlArrowDown } from "react-icons/sl";
import { useEffect, useState } from "react";

const Faqs = () => {
  const [selected, setSelected] = useState(null);
  const [accInner, setAccInner] = useState(0);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    setAccInner(
      document.getElementById(`accordion-inner${selected}`)
        ? document.getElementById(`accordion-inner${selected}`).offsetHeight
        : ""
    );
  }, [selected]);

  return (
    <div className="faq-main">
      <div className="faq-head">FAQ</div>
      <div className="accordion-container">
        {faqData.map((item, i) => (
          <div className="accordion" key={item.id}>
            <div className="accordion-title" onClick={() => toggle(i)}>
              <p>{item.question}</p>
              <span>
                <SlArrowDown
                  size={23}
                  className={`faq-arrow ${selected === i ? "active" : ""}`}
                />
              </span>
            </div>
            <div
              className={`accordion-content ${selected === i ? "active" : ""}`}
              style={{ height: selected === i ? `${accInner}px` : "0px" }}
            >
              <div className="accordion-content-inner" id={`accordion-inner${i}`}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
