import React, { useState } from "react";
import { faqData } from "./dataset";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  background-color: var(--gdsc-bg-1-100);
  max-width: 100%;

  @media only screen and (max-width: 991px) {
    padding-bottom: 5vh;
  }
`;

const Container = styled.div`
  top: 10%;
  width: 90%;
  transition: all 0.5s ease-in;
`;

const Faqmain = styled.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: justify;
  text-align-last: left;
  cursor: pointer;

  :not(:first-child) {
    border-top: 1px solid grey;
  }

  h1 {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 300;
    color: #49454f;
  }
  span {
    margin-right: 1.5rem;
  }

  @media only screen and (max-width: 993px) {
    h1 {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 289px) {
    h1 {
      font-size: 0.6rem;
    }
  }
`;

const Dropdown = styled.div`
  color: #49454f;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  // font-weight: 600;
  padding: 0.9375rem 1.25rem;
  text-align: justify;
  text-align-last: left;

  line-height: 1.4;
  p {
    font-size: 1rem;
  }
  @media only screen and (max-width: 993px) {
    p {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 289px) {
    p {
      font-size: 0.6rem;
    }
  }
`;

const Faqs = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "grey", size: "1.25rem" }}>
      <div
        className="faq-section"
        style={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}
      >
        <h1 style={{ color: "black" }}>FAQ</h1>
      </div>
      <FaqSection>
        <Container>
          {faqData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Faqmain onClick={() => toggle(index)}>
                  <h1>{item.question}</h1>
                  <span>
                    {clicked === index ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdOutlineKeyboardArrowDown />
                    )}
                  </span>
                </Faqmain>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </React.Fragment>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default Faqs;
