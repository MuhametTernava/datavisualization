import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ade4db;
`;

export const TypingContainer = styled.div`
  background-color: #33c37e;
  padding: 10px;
`;

export const DisplayingContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const DisplayingSubContainerSecond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #9a7aff;
`;

export const InsightBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
`;

export const InsightInfo = styled.div`
  width: 700px;
  height: 156px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: "Inter";

  color: #fff;
  font-style: normal;
  font-weight: 700;
`;

export const ChartsBoxDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  margin-left: 7px;
`;
export const Button = styled.button`
  padding: 10px 10px;
  width: 150px;
  height: 50px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;

  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* Add transition property */
  font-size: 20px;
  background-color: #33c37e;
  border: 1px solid #f2c162;

  &:hover {
    color: #fff;
    background-color: #f2c162;
  }
`;

export const AccordionButton = styled.button`
  padding: 10px 10px;
  width: 100%;
  height: 65px;

  height: 59px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;

  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* Add transition property */
  font-size: 20px;
  background-color: #33c37e;
  border: 1px solid #f2c162;

  &:hover {
    color: #fff;
    background-color: #f2c162;
  }
`;

//
export const SecondButton = styled.button`
  padding: 10px 10px;
  width: 150px;
  height: 50px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;

  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* Add transition property */
  font-size: 20px;
  background-color: #33c37e;
  border: 1px solid #f2c162;

  &:hover {
    color: #fff;
    background-color: #f2c162;
  }
`;
export const InputDataContainer = styled.div`
  width: 100%;

  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DisplayingInputContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const InputFieldForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ChartCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
export const ChartCheckInput = styled.input`
  width: 25px;
  height: 15px;
  margin-right: 25px;
  border: none;
  outline: none;
`;
export const ChartCheckLabel = styled.label`
  font-size: 20px;
`;
export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  color: #000;
`;

///
export const ProductLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #fff;
  text-align: center;
  margin: 20px;
`;

//
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
