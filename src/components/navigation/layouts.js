import styled from "@emotion/styled";
export const NavContainer = styled.nav`
  padding: 10px;
  width: 100%;
  background-color: #9a7aff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const NavLogo = styled.h3`
  font-weight: bold;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  margin: 0 10px;
`;
export const NavLinkSec = styled.a`
  color: #fff;
  font-size: 20px;
  transition: color 0.3s;
  list-style: none;

  &:hover {
    color: #33c37e;
  }
`;
export const ImageTemplate = styled.img`
  height: 75px;
  margin-right: 10px;
  object-fit: cover;
`;
