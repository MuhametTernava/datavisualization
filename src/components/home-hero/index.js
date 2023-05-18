import React from "react";

import {
  BannerContainer,
  HalfBanner,
  FirstBannerBoxTitle,
  FirstBannerBoxParagaph,
  ButtonContainer,
  Button,
  ImageTemplate,
} from "./layouts";
import { Link } from "react-router-dom";

import MetricsImage from "../../assets/images/metrics.png";
import { Container } from "../../layouts";

const HeroPage = () => {
  return (
    <Container>
      <div className="bgwhite  p-10">
        <BannerContainer>
          <HalfBanner className="d-flex flex-column justify-center align-center">
            <FirstBannerBoxTitle className="text-secondary">
              Let's analyze some data!
            </FirstBannerBoxTitle>
            <FirstBannerBoxParagaph className="color-black">
              Welcome to our Business Data Visualization tool! This tool is
              designed to help you visualize and analyze your business data in a
              clear and interactive way. To get started, please select your
              preferred method of data input.
              <div className="color-black">
                How would you like to input the data for generating the
                visualizations?
              </div>
            </FirstBannerBoxParagaph>
            <ButtonContainer>
              <Button>
                <Link
                  className="text-decoration-none color-white"
                  to="/typing-visualization"
                >
                  Typing
                </Link>
              </Button>
              <Button>
                <Link
                  className="text-decoration-none color-white"
                  to="/upload-visualization"
                >
                  Uploading
                </Link>
              </Button>
              <Button>
                <Link
                  className="text-decoration-none color-white"
                  to="/real-time-visualization"
                >
                  Live Data
                </Link>
              </Button>
            </ButtonContainer>
          </HalfBanner>
          <HalfBanner className="d-flex justify-center align-center ">
            <ImageTemplate
              src={MetricsImage}
              alt="Metrics Image"
            ></ImageTemplate>
          </HalfBanner>
        </BannerContainer>
      </div>
    </Container>
  );
};

export default HeroPage;
