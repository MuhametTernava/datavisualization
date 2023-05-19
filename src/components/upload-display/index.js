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
import useAccordion from "../functions/generateAccordion";
import { Container } from "../../layouts";
import GenerateCharts from "../functions/generateCharts";
import UploadData from "../functions/generateDataUpload";

const UploadDisplayingData = () => {
  const Accordion = useAccordion();

  const [submittedData, setSubmittedData] = useState([]);
  const [selectedCharts, setSelectedCharts] = useState([]);

  const handleFileUpload = (data, selectedCharts) => {
    console.log("Submitted Data:", data);
    console.log("Selected Charts:", selectedCharts);

    //Updating the selected charts and submitted data state
    setSubmittedData(data);
    setSelectedCharts(selectedCharts);
  };

  const handleReset = () => {
    setSubmittedData([]);
    setSelectedCharts([]);
  };

  // Calculate total sales
  const totalSales = submittedData.reduce(
    (total, product) => total + Number(product.TotalSales),
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
    if (Number(product.TotalSales) > maxSales) {
      maxSales = Number(product.TotalSales);
      bestSellingProduct = product.ProductName;
    }
  });

  return (
    <Container>
      {" "}
      {submittedData.length === 0 ? (
        <TypingContainer>
          {" "}
          {Accordion}
          <DisplayingContainer>
            <DisplayingSubContainer>
              <InfoContainer className="d-flex flex-column justify-center align-center">
                <InfoContainerSpecs>
                  After you have input data, click at the See Insight and the
                  data will transform automatically into interactive chart
                </InfoContainerSpecs>
                <UploadData onFileUpload={handleFileUpload} />
              </InfoContainer>
            </DisplayingSubContainer>
          </DisplayingContainer>
        </TypingContainer>
      ) : (
        <div>
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
                    products={submittedData.map((data) => ({
                      name: data.ProductName, // Replace "ProductName" with the actual property name in your Excel sheet
                      price: data.TotalSales, // Replace "ProductPrice" with the actual property name in your Excel sheet
                    }))}
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

export default UploadDisplayingData;
