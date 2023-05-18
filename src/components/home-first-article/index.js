import React from "react";
import {
  HeroContainer,
  BannerContainer,
  SubBannerContainer,
  SubBannerBoxTitle,
  SubBannerBoxParagaph,
  ButtonContainer,
  HomeButton,
  ImageTemplate,
} from "../../layouts/layouts";
import { Link, useNavigate } from "react-router-dom";

import StickerPen from "../../assets/images/penIcon.png";
import { Container } from "../../layouts";

const FirstArticle = () => {
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
              Typing-Based Data Visualization
            </SubBannerBoxTitle>
            <SubBannerBoxParagaph>
              With our Typing-Based Data Visualization service, you can
              effortlessly generate visualizations by typing real-time data.
              Simply input the relevant data points, and our tool will transform
              it into beautiful and interactive charts and graphs in real time.
              Whether you need to analyze sales figures, track project progress,
              or explore trends, our service empowers you to visualize your data
              with ease.
            </SubBannerBoxParagaph>
            <ButtonContainer>
              <HomeButton>
                <Link
                  className="text-decoration-none"
                  to="/typing-visualization"
                >
                  Get Started
                </Link>
              </HomeButton>
            </ButtonContainer>
          </SubBannerContainer>
        </BannerContainer>
      </HeroContainer>
    </Container>
  );
};

export default FirstArticle;
