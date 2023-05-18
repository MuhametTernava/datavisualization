import React from "react";
import { Link } from "react-router-dom";
import { Container, Flex } from "../../layouts";
import { FooterContainer, FooterCopyrightText } from "./layouts";

const Footer = () => {
  return (
    <Flex>
      <Container>
        <FooterContainer>
          <FooterCopyrightText>
            <Link
              className="text-decoration-none color-white"
              to="https://www.linkedin.com/in/muhametternava"
            >
              Copyright 2023 | Muhamet Tërnava | All rights reserved
            </Link>
          </FooterCopyrightText>
        </FooterContainer>
      </Container>
    </Flex>
  );
};

export default Footer;
