import React, { useState } from "react";

import { FormContainer, FormGroup, Label, Input } from "../../layouts/layouts";
const InputLiveData = ({ onSubmit }) => {
  //initialize array with a length of 10, representing the number of data inputs available
  const initialFormData = Array.from({ length: 10 }, () => ({
    name: "",
    price: "",
  }));
  const [formData, setFormData] = useState(initialFormData);

  //this function triggered whene a change event occurs in the input fields
  const handleChange = (event, index, field) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = event.target.value;
    setFormData(updatedFormData);

    //function that will be called when the form data is updated.
    onSubmit(updatedFormData);
  };

  return (
    <FormContainer>
      {/* Loop over the formData array and generate form groups */}
      {formData.map((data, index) => (
        <FormGroup key={index}>
          <Label>
            Product Name:
            {/* Input field for the product name */}
            <Input
              className="color-black"
              type="text"
              value={data.name}
              onChange={(event) => handleChange(event, index, "name")}
              required
            />
          </Label>

          <Label>
            Total Product Sales:
            {/* Input field for the total product sales */}
            <Input
              className="color-black"
              type="number"
              value={data.price}
              onChange={(event) => handleChange(event, index, "price")}
              required
            />
          </Label>
        </FormGroup>
      ))}
    </FormContainer>
  );
};

export default InputLiveData;
