import "./Faq.scss";
import { faqData } from "./dataset";
import { SlArrowDown } from "react-icons/sl";
// import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";

const Faqs = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

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
            <div className={`accordion-content ${selected === i ? "active" : ""}`}>
              <div className="accordion-content-inner">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
