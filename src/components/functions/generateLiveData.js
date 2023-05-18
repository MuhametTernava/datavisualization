import React, { useState } from "react";

import { FormContainer, FormGroup, Label, Input } from "../../layouts/layouts";
const InputLiveData = ({ onSubmit }) => {
  const initialFormData = Array.from({ length: 10 }, () => ({
    name: "",
    price: "",
  }));
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event, index, field) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = event.target.value;
    setFormData(updatedFormData);

    onSubmit(updatedFormData);
  };

  return (
    <FormContainer>
      {formData.map((data, index) => (
        <FormGroup key={index}>
          <Label>
            Product Name:
            <Input
              className="color-black"
              type="text"
              value={data.name}
              onChange={(event) => handleChange(event, index, "name")}
              required
            />
          </Label>

          <Label>
            Product Price:
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
