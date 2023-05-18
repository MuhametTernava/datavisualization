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
import { Link, useNavigate } from "react-router-dom";

import StickerPen from "../../assets/images/stickerpen.png";
import { Container } from "../../layouts";

const ThirdArticle = () => {
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
            <SubBannerBoxTitle>Live Data Visualization</SubBannerBoxTitle>
            <SubBannerBoxParagaph>
              Experience the power of Live Data-Based Data Visualization, a
              cutting-edge feature that allows you to generate dynamic
              visualizations by inputting real-time data. With our advanced
              tool, you can effortlessly transform your live data into stunning
              and interactive charts and graphs, providing you with immediate
              insights and actionable information. Whether you're monitoring
              financial markets, tracking website analytics, or analyzing sensor
              data, our service empowers you to visualize your data in real
              time, enabling you to make informed decisions with confidence.
            </SubBannerBoxParagaph>
            <ButtonContainer>
              <Button>
                <Link
                  className="text-decoration-none color-white"
                  to="/real-time-visualization"
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

export default ThirdArticle;
