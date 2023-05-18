import styled from "@emotion/styled";
export const HeroContainer = styled.div`
  background-color: #9a7aff;

  padding: 10px;
`;

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
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  width: 95%;
  margin-top: 20px;
  width: 50%;
  text-align: center;
`;

export const SubBannerBoxParagaph = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  width: 50%;
  color: #fff;
  text-align: center;

  margin-top: 10px;
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
