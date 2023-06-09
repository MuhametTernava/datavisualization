import React, { useState } from "react";
import { AccordionButton } from "../../layouts/layouts";

// Custom hook for rendering an accordion(guidline) component
const UseAccordion = (accordionText) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the accordion expansion state
  accordionText = "Important Notice: Data Uploading Guidelines";
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  /*It returns: Accordion header and content  */
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
              File Format:{" "}
              <span className="font-bold text-dark">
                {" "}
                Upload Excel files (.xlsx) only.{" "}
              </span>
            </li>
            <li className="text-dark">
              Column Requirements: Ensure your Excel files have two specific
              columns:{" "}
              <span className="font-bold text-dark"> "ProductName" </span>and
              <span className="font-bold text-dark"> "TotalSales" </span> .
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
