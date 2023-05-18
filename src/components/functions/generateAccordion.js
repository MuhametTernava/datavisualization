import React, { useState } from "react";
import { AccordionButton } from "../../layouts/layouts";

const UseAccordion = (accordionText) => {
  const [isExpanded, setIsExpanded] = useState(false);

  accordionText = "Important Notice: Data Typing/Upload Guidelines";
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
          <p className="text-dark">
            For optimal data display, please take note of the following
            guidelines when uploading your data:
          </p>
          <ol>
            <li className="text-dark">
              File Format: Upload Excel files (.xlsx) only.
            </li>
            <li className="text-dark">
              Column Requirements: Ensure your Excel files have two specific
              columns: "ProductName" and "TotalSales".
            </li>
          </ol>
          <p className="text-dark">
            Following these guidelines will enable our system to effectively
            visualize your data and provide accurate insights. Thank you!
          </p>
        </div>
      )}
    </div>
  );
};

export default UseAccordion;
