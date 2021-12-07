import React from "react";
import "./faq-item.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const FaqItem = ({ index, faq, answer1, answer2, question, toggleFAQ }) => {
  return (
    <div className="faq-item" key={index}>
      <button className="faq-item__question" onClick={() => toggleFAQ(index)}>
        <span className="faq-item__question-text">{question}</span>
        <span
          className={
            "faq-item__question-icon" +
            " " +
            (faq.open ? "faq-item__question-icon--open" : "")
          }
        >
          <Arrow />
        </span>
      </button>
      <div
        className={
          faq.open
            ? "faq-item__answer faq-item__answer--open"
            : "faq-item__answer"
        }
      >
        <p>{answer1}</p>
        <p>{answer2}</p>
      </div>
    </div>
  );
};

export default FaqItem;
