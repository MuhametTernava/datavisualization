import React, { useState, useEffect, useRef } from "react";

import {
  TypingContainer,
  DisplayingContainer,
  DisplayingSubContainer,
  InsightBox,
  InsightInfo,
  ChartsBoxDisplay,
  Button,
  InfoContainer,
  InfoContainerSpecs,
} from "../../layouts/layouts";
import { Container } from "../../layouts";
import UseAccordion from "../functions/generateAccordion2";

import InputData from "../functions/generateInputs";
import GenerateCharts from "../functions/generateCharts";

const TypeDisplayingData = () => {
  const Accordion = UseAccordion();

  // State for the submitted data
  const [submittedData, setSubmittedData] = useState([]);

  // State for selected charts
  const [selectedCharts, setSelectedCharts] = useState([]);

  //Updating the selected charts and submitted data state
  const handleFormSubmit = (data, selectedCharts) => {
    setSubmittedData(data);

    setSelectedCharts(selectedCharts);
  };

  // Reseting the submitted data and selected charts state
  const handleReset = () => {
    setSubmittedData([]);
    setSelectedCharts([]);
  };

  // Calculate the total sales from the submitted data
  const totalSales = submittedData.reduce(
    (total, product) => total + Number(product.price),
    0
  );

  // Format total sales with dollar sign
  const formattedTotalSales = totalSales.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Find the best selling product
  let bestSellingProduct = "";
  let maxSales = 0;
  submittedData.forEach((product) => {
    if (Number(product.price) > maxSales) {
      maxSales = Number(product.price);
      bestSellingProduct = product.name;
    }
  });

  return (
    <Container>
      {" "}
      {/* Displaying the input form */}
      {submittedData.length === 0 ? (
        <TypingContainer>
          {/* Render the accordion component */}
          {Accordion}
          <DisplayingContainer>
            <DisplayingSubContainer>
              <InfoContainer className="d-flex flex-column justify-center align-center">
                <InfoContainerSpecs>
                  After you have input data, click at the See Insight and the
                  data will transform automatically into interactive chart
                </InfoContainerSpecs>
                <InputData onSubmit={handleFormSubmit} />
              </InfoContainer>
            </DisplayingSubContainer>
          </DisplayingContainer>
        </TypingContainer>
      ) : (
        <div>
          {/* If data is submitted, display the insight and charts */}
          <TypingContainer>
            <DisplayingContainer>
              <DisplayingSubContainer>
                <InsightBox>
                  <InsightInfo>
                    <span className="text-dark font-20 p-10 border-none mt-20 w-400 text-center  ">
                      {" "}
                      Total all products sales:
                    </span>
                    <span className="bg-secondary font-40 p-10 border-none mb-20 w-400 text-center ">
                      {" "}
                      {formattedTotalSales}
                    </span>
                  </InsightInfo>{" "}
                  <InsightInfo>
                    <span className="text-dark font-20 p-10 border-none mt-20 w-400  text-center  ">
                      {" "}
                      The best selling product:
                    </span>
                    <span className="bg-secondary font-40 p-10 border-none mb-20 w-400 text-center ">
                      {" "}
                      {bestSellingProduct}
                    </span>
                  </InsightInfo>
                </InsightBox>

                <ChartsBoxDisplay>
                  <GenerateCharts
                    products={submittedData}
                    selectedCharts={selectedCharts}
                  />
                </ChartsBoxDisplay>
                <Button className=" ml-10 mb-20 mt-10" onClick={handleReset}>
                  Reset Data
                </Button>
              </DisplayingSubContainer>
            </DisplayingContainer>
          </TypingContainer>
        </div>
      )}
    </Container>
  );
};

export default TypeDisplayingData;
