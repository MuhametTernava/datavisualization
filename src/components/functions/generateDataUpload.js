import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  SecondButton,
  DisplayingInputContainer,
  InputFieldContainer,
  ProductLabel,
  ChartCheckBox,
  ChartCheckInput,
  ChartCheckLabel,
} from "../../layouts/layouts";

const UploadData = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCharts, setSelectedCharts] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        console.log(jsonData); // Log the extracted data

        onFileUpload(jsonData, selectedCharts);
        setSelectedFile(null);
      };

      fileReader.readAsArrayBuffer(selectedFile);
    }
  };

  const handleChartChange = (event) => {
    const chartValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCharts((prevSelectedCharts) => [
        ...prevSelectedCharts,
        chartValue,
      ]);
    } else {
      setSelectedCharts((prevSelectedCharts) =>
        prevSelectedCharts.filter((chart) => chart !== chartValue)
      );
    }
  };

  return (
    <DisplayingInputContainer>
      <InputFieldContainer>
        <ProductLabel>Choose your file:</ProductLabel>
        <input type="file" accept=".xlsx" onChange={handleFileChange} />

        <div>
          <p className="text-center">Select Chart Type:</p>
          <ChartCheckBox>
            <ChartCheckLabel>
              Bar Chart
              <ChartCheckInput
                type="checkbox"
                value="bar"
                checked={selectedCharts.includes("bar")}
                onChange={handleChartChange}
              />
            </ChartCheckLabel>
            <ChartCheckLabel>
              {" "}
              Pie Chart
              <ChartCheckInput
                type="checkbox"
                value="pie"
                checked={selectedCharts.includes("pie")}
                onChange={handleChartChange}
              />
            </ChartCheckLabel>
            <ChartCheckLabel>
              {" "}
              Line Chart
              <ChartCheckInput
                type="checkbox"
                value="line"
                checked={selectedCharts.includes("line")}
                onChange={handleChartChange}
              />
            </ChartCheckLabel>
            <ChartCheckLabel>
              {" "}
              Doughnut Chart
              <ChartCheckInput
                type="checkbox"
                value="doughnut"
                checked={selectedCharts.includes("doughnut")}
                onChange={handleChartChange}
              />
            </ChartCheckLabel>
            {/* Add more checkbox inputs for other chart types */}
          </ChartCheckBox>
        </div>
        <div className="mb-20">
          <SecondButton onClick={handleUpload}>Submit</SecondButton>
        </div>
      </InputFieldContainer>
    </DisplayingInputContainer>
  );
};

export default UploadData;
