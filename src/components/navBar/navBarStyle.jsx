import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
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
  color: #1c1c1c;
  &:hover,
  &.active {
    border-bottom: #1c1c1c solid 2px;
  }
`;
