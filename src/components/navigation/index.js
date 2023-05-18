import React from "react";
import { NavLink } from "react-router-dom";

import {
  NavContainer,
  NavLogo,
  NavList,
  NavItem,
  NavLinkSec,
  ImageTemplate,
} from "./layouts";

import Logo from "../../assets/images/logo.png";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/">
        {" "}
        <NavLogo>
          {" "}
          <ImageTemplate src={Logo} alt="Metrics Image"></ImageTemplate>{" "}
        </NavLogo>
      </NavLink>

      <NavList>
        <NavItem>
          <NavLink className="text-decoration-none" to="/">
            <NavLinkSec>Home</NavLinkSec>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="text-decoration-none" to="/typing-visualization">
            <NavLinkSec>Type Data</NavLinkSec>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-decoration-none" to="/upload-visualization">
            <NavLinkSec>Upload Data</NavLinkSec>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="text-decoration-none"
            to="/real-time-visualization"
          >
            <NavLinkSec>Real Time Data</NavLinkSec>
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
