import React from "react";
import {
  HeroContainer,
  BannerContainer,
  SubBannerContainer,
  SubBannerBoxTitle,
  SubBannerBoxParagaph,
  Button,
  ImageTemplate,
} from "../../layouts/layouts";

import ExcelIcon from "../../assets/images/excelGroup.png";
import { Container } from "../../layouts";
import { Link } from "react-router-dom";

const SecondArticle = () => {
  return (
    <Container>
      <HeroContainer>
        <BannerContainer>
          <SubBannerContainer>
            {" "}
            <ImageTemplate
              src={ExcelIcon}
              alt="Metrics Image"
            ></ImageTemplate>{" "}
            <SubBannerBoxTitle className="text-dark ">
              Upload-Based Data Visualization
            </SubBannerBoxTitle>
            <SubBannerBoxParagaph className="text-dark ">
              Our Upload-Based Data Visualization service provides a seamless
              way to generate visualizations by uploading real-time data. Simply
              select the file containing your data, and our tool will analyze
              and transform it into dynamic charts and graphs instantly. Whether
              you're working with large datasets, importing external sources,
              our service makes data visualization hassle-free.
            </SubBannerBoxParagaph>
            <Button className="mt-20">
              <Link className="text-decoration-none" to="/upload-visualization">
                Get Started
              </Link>
            </Button>
          </SubBannerContainer>
        </BannerContainer>
      </HeroContainer>
    </Container>
  );
};

export default SecondArticle;
