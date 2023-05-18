import React from "react";
import {
  HeroContainer,
  BannerContainer,
  SubBannerContainer,
  SubBannerBoxTitle,
  SubBannerBoxParagaph,
  ButtonContainer,
  Button,
  ImageTemplate,
} from "./layouts";

import StickerPen from "../../assets/images/stickerpen.png";
import { Container } from "../../layouts";
import { Link, useNavigate } from "react-router-dom";

const SecondArticle = () => {
  return (
    <Container>
      <HeroContainer>
        <BannerContainer>
          <SubBannerContainer>
            {" "}
            <ImageTemplate
              src={StickerPen}
              alt="Metrics Image"
            ></ImageTemplate>{" "}
            <SubBannerBoxTitle>
              Upload-Based Data Visualization
            </SubBannerBoxTitle>
            <SubBannerBoxParagaph>
              Our Upload-Based Data Visualization service provides a seamless
              way to generate visualizations by uploading real-time data. Simply
              select the file containing your data, and our tool will analyze
              and transform it into dynamic charts and graphs instantly. Whether
              you're working with large datasets, importing external sources,
              our service makes data visualization hassle-free.
            </SubBannerBoxParagaph>
            <ButtonContainer>
              <Button>
                <Link
                  className="text-decoration-none color-white"
                  to="/upload-visualization"
                >
                  Get Started
                </Link>
              </Button>
            </ButtonContainer>
          </SubBannerContainer>
        </BannerContainer>
      </HeroContainer>
    </Container>
  );
};

export default SecondArticle;
