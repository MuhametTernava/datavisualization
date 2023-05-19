import React, { useState, useEffect, useRef } from "react";

import {
  TypingContainer,
  DisplayingContainer,
  DisplayingSubContainer,
  InsightBox,
  InsightInfo,
  ChartsBoxDisplay,
} from "../../layouts/layouts";

import { Container } from "../../layouts";
import UseAccordion from "../functions/generateAccordion2";
import InputLiveData from "../functions/generateLiveData";
import GenerateCharts from "../functions/generateCharts";

const RealTimeDisplayingData = () => {
  const Accordion = UseAccordion();

  // Initialize the form data with empty values for product name and price
  const initialFormData = Array.from({ length: 3 }, () => ({
    name: "",
    price: "",
  }));
  const [formData, setFormData] = useState(initialFormData);

  //  for form submission handler
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  // Calculate the total sales from the form data
  const calculateTotalSales = () => {
    let totalSales = 0;
    formData.forEach((product) => {
      if (product.price) {
        totalSales += parseFloat(product.price);
      }
    });

    // Format the total sales with the currency format
    const formattedTotalSales = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalSales);

    return formattedTotalSales;
  };

  // Find the best selling product from the form data
  const findBestSellingProduct = () => {
    let bestSellingProduct = null;
    let maxSales = 0;
    formData.forEach((product) => {
      if (product.price && parseFloat(product.price) > maxSales) {
        maxSales = parseFloat(product.price);
        bestSellingProduct = product.name;
      }
    });
    return bestSellingProduct;
  };

  // Predefined selected chart types
  const selectedCharts = ["bar", "pie", "line", "doughnut"];
  return (
    <Container>
      <TypingContainer>
        {Accordion}
        <DisplayingContainer>
          {formData.some((data) => data.name && data.price) && (
            <DisplayingSubContainer>
              {/* Display the insights */}
              <InsightBox>
                <InsightInfo>
                  <span className="text-dark font-20 p-10 border-none mt-20 w-400 text-center  ">
                    {" "}
                    Total all products sales:
                  </span>
                  <span className="bg-secondary font-40 p-10 border-none mb-20 w-400 text-center ">
                    {calculateTotalSales()}
                  </span>
                </InsightInfo>{" "}
                <InsightInfo>
                  <span className="text-dark font-20 p-10 border-none mt-20 w-400  text-center  ">
                    {" "}
                    The best selling product:
                  </span>
                  <span className="bg-secondary font-40 p-10 border-none mb-20 w-400 text-center ">
                    {findBestSellingProduct()}
                  </span>
                </InsightInfo>
              </InsightBox>

              {/* Display the charts */}
              <ChartsBoxDisplay>
                <GenerateCharts
                  products={formData}
                  selectedCharts={selectedCharts}
                />
              </ChartsBoxDisplay>
            </DisplayingSubContainer>
          )}
        </DisplayingContainer>
        {/* Display the input form */}
        <DisplayingContainer>
          <DisplayingSubContainer>
            <div className="d-flex flex-column justify-center align-center w-full">
              <span className="text-center mb-20 mt-20 text-dark">
                Simply input real time data. We will transform automatically
                into interactive chart
              </span>
              <InputLiveData onSubmit={handleFormSubmit} />
            </div>
          </DisplayingSubContainer>
        </DisplayingContainer>{" "}
      </TypingContainer>
    </Container>
  );
};

export default RealTimeDisplayingData;
