import React, { useState, useEffect, useRef } from "react";

import {
  TypingContainer,
  DisplayingContainer,
  DisplayingSubContainerSecond,
  InsightBox,
  InsightInfo,
  ChartsBoxDisplay,
  Button,
} from "../../layouts/layouts";
import { Container } from "../../layouts";
import UseAccordion from "../functions/generateAccordion";

import InputData from "../functions/generateInputs";
import CreateBarChart from "../functions/generateCharts";

const TypeDisplayingData = () => {
  const Accordion = UseAccordion();

  const [submittedData, setSubmittedData] = useState([]);
  const [selectedCharts, setSelectedCharts] = useState([]);

  const handleFormSubmit = (data, selectedCharts) => {
    setSubmittedData(data);
    setSelectedCharts(selectedCharts);
  };

  const handleReset = () => {
    setSubmittedData([]);
    setSelectedCharts([]);
  };

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
      {submittedData.length === 0 ? (
        <TypingContainer>
          {Accordion}
          <DisplayingContainer>
            <DisplayingSubContainerSecond>
              <InputData onSubmit={handleFormSubmit} />
            </DisplayingSubContainerSecond>
          </DisplayingContainer>
        </TypingContainer>
      ) : (
        <div>
          <TypingContainer>
            {Accordion}
            <DisplayingContainer>
              <DisplayingSubContainerSecond>
                <InsightBox>
                  <InsightInfo>
                    <span className="bg-primary font-20 p-10 border-none mt-20 w-400 text-center  ">
                      {" "}
                      Total all products sales:
                    </span>
                    <span className="bg-secondary font-40 p-10 border-none mb-20 w-400 text-center ">
                      {" "}
                      {formattedTotalSales}
                    </span>
                  </InsightInfo>{" "}
                  <InsightInfo>
                    <span className="bg-primary font-20 p-10 border-none mt-20 w-400  text-center  ">
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
                  <CreateBarChart
                    products={submittedData}
                    selectedCharts={selectedCharts}
                  />
                </ChartsBoxDisplay>
                <Button className=" ml-10 mb-20 mt-10" onClick={handleReset}>
                  Reset Data
                </Button>
              </DisplayingSubContainerSecond>
            </DisplayingContainer>
          </TypingContainer>
        </div>
      )}
    </Container>
  );
};

export default TypeDisplayingData;
