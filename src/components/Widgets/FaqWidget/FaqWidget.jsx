import React, { useState } from "react";
import "./faq-widget.scss";
import FaqItem from "../../FaqItem/FaqItem";

const FaqWidget = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "Why should you use a password manager for business?",
      answer1:
        "Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.",
      answer2:
        "With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!",
      open: false,
    },
    {
      question: "How to choose the best password manager for business?",
      answer1:
        "Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.",
      answer2:
        "With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!",
      open: false,
    },
    {
      question: "How can I get a business password manager?",
      answer1:
        "Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.",
      answer2:
        "With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        }
        return faq;
      })
    );
  };

  return (
    <div className="faq-widget">
      <div className="faq-widget__questions">
        {faqs.map((faq, i) => (
          <FaqItem
            key={i}
            faq={faq}
            question={faq.question}
            answer1={faq.answer1}
            answer2={faq.answer2}
            index={i}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqWidget;
