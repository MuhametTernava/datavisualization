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
import InputLiveData from "../functions/generateLiveData";
import CreateBarChart from "../functions/generateCharts";

const RealTimeDisplayingData = () => {
  const Accordion = UseAccordion();

  const initialFormData = Array.from({ length: 3 }, () => ({
    name: "",
    price: "",
  }));
  const [formData, setFormData] = useState(initialFormData);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const calculateTotalSales = () => {
    let totalSales = 0;
    formData.forEach((product) => {
      if (product.price) {
        totalSales += parseFloat(product.price);
      }
    });

    const formattedTotalSales = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalSales);

    return formattedTotalSales;
  };

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

  const selectedCharts = ["bar", "pie", "line", "doughnut"]; // Add other chart types if needed
  return (
    <Container>
      <TypingContainer>
        {Accordion}
        <DisplayingContainer>
          {formData.some((data) => data.name && data.price) && (
            <DisplayingSubContainerSecond>
              <InsightBox>
                <InsightInfo>
                  <span className="bg-primary font-20 p-10 border-none mt-20 w-400 text-center  ">
                    {" "}
                    Total all products sales:
                  </span>
                  <span className="bg-secondary font-40 p-10 border-none mb-20 w-400 text-center ">
                    {calculateTotalSales()}
                  </span>
                </InsightInfo>{" "}
                <InsightInfo>
                  <span className="bg-primary font-20 p-10 border-none mt-20 w-400  text-center  ">
                    {" "}
                    The best selling product:
                  </span>
                  <span className="bg-secondary font-40 p-10 border-none mb-20 w-400 text-center ">
                    {findBestSellingProduct()}
                  </span>
                </InsightInfo>
              </InsightBox>

              <ChartsBoxDisplay>
                <CreateBarChart
                  products={formData}
                  selectedCharts={selectedCharts}
                />
              </ChartsBoxDisplay>
            </DisplayingSubContainerSecond>
          )}
        </DisplayingContainer>
        <DisplayingContainer>
          <DisplayingSubContainerSecond>
            <div className="d-flex flex-column justify-center align-center w-full">
              <span className="text-center mb-20 mt-20">
                Simply input real time data. We will transform automatically
                into interactive chart
              </span>
              <InputLiveData onSubmit={handleFormSubmit} />
            </div>
          </DisplayingSubContainerSecond>
        </DisplayingContainer>{" "}
      </TypingContainer>
    </Container>
  );
};

export default RealTimeDisplayingData;
