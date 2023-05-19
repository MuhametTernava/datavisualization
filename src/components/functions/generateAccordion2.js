import React, { useState } from "react";
import { AccordionButton } from "../../layouts/layouts";

const UseAccordion = (accordionText) => {
  const [isExpanded, setIsExpanded] = useState(false);

  accordionText = "Important Notice: Data Typing Guidelines";
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <AccordionButton
        className={`accordion-header ${isExpanded ? "expanded" : ""}`}
        onClick={toggleAccordion}
        aria-expanded={isExpanded}
        aria-controls="accordion-content"
      >
        {accordionText}
      </AccordionButton>
      {isExpanded && (
        <div className="accordion-content" id="accordion-content">
          <p className="text-dark weight-400 font-inter">
            For optimal data display, please take note of the following
            guidelines when inputing your data:
          </p>
          <ol>
            <li className="text-dark weight-400 font-inter">
              You should decide for how many products you want to add data
            </li>
            <li className="text-dark weight-400 font-inter">
              For each product, you should
              <span className="font-bold text-dark"> input name </span>of
              product and{" "}
              <span className="font-bold text-dark"> total sales </span> of
              product.
            </li>
          </ol>
          <p className="text-dark weight-400 font-inter">
            Following these guidelines will enable our system to effectively
            visualize your data and provide accurate insights. Thank you!
          </p>
        </div>
      )}
    </div>
  );
};

export default UseAccordion;
