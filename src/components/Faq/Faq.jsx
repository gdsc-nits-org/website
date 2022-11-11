import "./Faq.scss";
import { faqData } from "./dataset";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
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
    <>
      <div className="accordion-container">
        {faqData.map((item, i) => (
          <div className="accordion" key={item.id}>
            <div className="accordion-title" onClick={() => toggle(i)}>
              <p>{item.question}</p>
              <span>
                {selected == i ? <SlArrowUp size={23} /> : <SlArrowDown size={23} />}{" "}
              </span>
            </div>
            <div className={selected == i ? "contentalt" : "content"}>{item.answer}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faqs;
