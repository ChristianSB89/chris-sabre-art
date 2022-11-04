import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  border-bottom: 2px #303030 solid;
  position: fixed;
  background: #ffffff;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const LogoTxt = styled.section`
  display: flex;
  align-items: center;
`;

export const Headline = styled.h1`
  color: #0f82bd;
`;

export const HeaderLogo = styled.img`
  width: 4em;
  padding: 0.5em;
`;

export const NavItems = styled.section`
  display: flex;
`;

export const ListDeco = styled.li`
  list-style: none;
  padding: 1em;
`;

export const LinkDeco = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  color: #303030;
  &:hover,
  &.active {
    border-bottom: #303030 solid 2px;
  }
`;
