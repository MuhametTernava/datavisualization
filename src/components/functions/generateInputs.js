import React, { useState } from "react";
import {
  Button,
  InputDataContainer,
  DisplayingInputContainer,
  InputFieldContainer,
  InputFieldForm,
  ChartCheckBox,
  ChartCheckInput,
  ChartCheckLabel,
  FormGroup,
  Label,
  Input,
} from "../../layouts/layouts";

// Component for gathering and generating inputs from the user
const InputData = ({ onSubmit }) => {
  // State for managing the number of inputs and form data
  const [numInputs, setNumInputs] = useState(3);
  const initialFormData = Array.from({ length: 5 }, () => ({
    name: "",
    price: "",
  }));
  const [formData, setFormData] = useState(initialFormData);
  const [selectedCharts, setSelectedCharts] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData, selectedCharts);
    setFormData(initialFormData);
    setSelectedCharts([]);
  };

  // Handle input change in the form
  const handleChange = (event, index, field) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = event.target.value;
    setFormData(updatedFormData);
  };

  // Handle change in the number of inputs
  const handleNumInputsChange = (event) => {
    const inputCount = parseInt(event.target.value);
    setNumInputs(inputCount);
    setFormData(
      Array.from({ length: inputCount }, () => ({ name: "", price: "" }))
    );
  };

  // Handle chart selection change
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
      {" "}
      <InputFieldContainer>
        <InputFieldForm onSubmit={handleSubmit}>
          {/* Input field for specifying the number of products */}
          <Label>
            For how many product you want to input data:
            <Input
              className="mb-20"
              type="number"
              value={numInputs}
              onChange={handleNumInputsChange}
              min={1}
            />
          </Label>
          {/* Render input fields based on the number of products */}
          {formData.map((data, index) => (
            <InputDataContainer key={index}>
              <FormGroup>
                {/* Input field for product name */}
                <Label>
                  <span className="text-dark">Product Name: </span>
                  <Input
                    type="text"
                    value={data.name}
                    onChange={(event) => handleChange(event, index, "name")}
                    required
                  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  {/* Input field for product price */}
                  <span className="text-dark">Total Product Sales: </span>
                  <Input
                    type="number"
                    value={data.price}
                    onChange={(event) => handleChange(event, index, "price")}
                    required
                  />
                </Label>
              </FormGroup>
            </InputDataContainer>
          ))}
          <div>
            <p className="text-center text-dark">Select Chart Type:</p>
            <ChartCheckBox>
              {/* Checkbox inputs for selecting chart types */}
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
            </ChartCheckBox>
          </div>

          <div className="mb-20">
            <Button type="submit">See Insight</Button>
          </div>
        </InputFieldForm>
      </InputFieldContainer>
    </DisplayingInputContainer>
  );
};

export default InputData;
