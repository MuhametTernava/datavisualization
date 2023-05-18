import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row:
  justify-content: center:
  align-items: center;
`;

export const HalfBanner = styled.div`
  width: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

//DUHET ME I NDRYSHU SPANAT!!
/**/ export const FirstBannerBoxTitle = styled.span`
  font-size: 40px;
  height: 59px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  width: 95%;
  margin-top: 20px;
`;
//DUHET ME I NDRYSHU SPANAT!!
export const FirstBannerBoxParagaph = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  width: 95%;

  margin-top: 10px;
`;

export const ImageTemplate = styled.img`
  width: 250px;
  height: 205.15px;

  margin-right: 10px;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  width: 230px;
  height: 65px;

  height: 59px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;

  border: none;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s, transform 0.3s; /* Add transition property */
  font-size: 20px;
  background-color: #33c37e;

  &:hover {
    color: #fff;
    background-color: #f2c162;
    transform: scale(1.1); /* Apply zoom-in effect on hover */
  }
`;
export const MarkLabel = styled.label`
  font-size: 15px;
  color: #fff;
  font-family: "Inter";
  text-align: center;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  margin-top: 10px;
`;
