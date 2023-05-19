import styled from "@emotion/styled";
export const HeroContainer = styled.div`
  background-color: #fff;

  padding: 10px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ade4db;
`;

export const TypingContainer = styled.div`
  background-color: #fff;
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
export const DisplayingSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
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
  margin-left: 10px;
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
  background-color: #4f4e4e;
  border: 1px solid #4f4e4e;

  &:hover {
    color: #fff;
    background-color: #f2c162;
    border: 1px solid #f2c162;
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
  border: 1px solid #33c37e;

  &:hover {
    color: #fff;
    background-color: #f2c162;
    border: 1px solid #f2c162;
  }
`;

//FOR DATA DISPLAYING:

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

  color: #4f4e4e;
`;
export const FormGroup = styled.div`
  margin-bottom: 15px;
  color: #4f4e4e;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: #4f4e4e;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  border: none;
  outline: none;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #33c37e;
`;

///
export const ProductLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #4f4e4e;
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

//HOME LAYOUTS:

export const BannerContainer = styled.div`
  margin-bottom: 20px;
  width: 100&;
  display: flex;
  flex-direction: column:
  justify-content: center:
  align-items: center;
`;

export const SubBannerContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImageTemplate = styled.img`
  width: 300px;
  height: 200px;
  margin-right: 10px;
  object-fit: cover;
`;

export const SubBannerBoxTitle = styled.span`
  font-size: 35px;
  height: 59px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  width: 95%;
  margin-top: 20px;
  width: 50%;
  color: #4f4e4e;
  text-align: center;
`;

export const SubBannerBoxParagaph = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  width: 50%;
  color: #4f4e4e;
  text-align: center;

  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin-top: 20px;
`;
