import React, { useState } from "react";
import {
  SecondButton,
  InputDataContainer,
  LabelDataContainer,
  DisplayingInputContainer,
  InputFieldContainer,
  InputFieldForm,
  ProductLabel,
  ProductInput,
  ChartCheckBox,
  ChartCheckInput,
  ChartCheckLabel,
  FormContainer,
  FormGroup,
  Label,
  Input,
} from "../../layouts/layouts";

const InputData = ({ onSubmit }) => {
  const [numInputs, setNumInputs] = useState(3);
  const initialFormData = Array.from({ length: 5 }, () => ({
    name: "",
    price: "",
  }));
  const [formData, setFormData] = useState(initialFormData);
  const [selectedCharts, setSelectedCharts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData, selectedCharts);
    setFormData(initialFormData);
    setSelectedCharts([]);
  };

  const handleChange = (event, index, field) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = event.target.value;
    setFormData(updatedFormData);
  };

  const handleNumInputsChange = (event) => {
    const inputCount = parseInt(event.target.value);
    setNumInputs(inputCount);
    setFormData(
      Array.from({ length: inputCount }, () => ({ name: "", price: "" }))
    );
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
      {" "}
      <InputFieldContainer>
        <InputFieldForm onSubmit={handleSubmit}>
          <Label>
            How many product prices do you want to input:
            <Input
              className="mb-20"
              type="number"
              value={numInputs}
              onChange={handleNumInputsChange}
              min={1}
            />
          </Label>
          {formData.map((data, index) => (
            <InputDataContainer key={index}>
              <FormGroup>
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
                  <span className="text-dark">Product Price: </span>
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
            <SecondButton type="submit">Submit</SecondButton>
          </div>
        </InputFieldForm>
      </InputFieldContainer>
    </DisplayingInputContainer>
  );
};

export default InputData;
