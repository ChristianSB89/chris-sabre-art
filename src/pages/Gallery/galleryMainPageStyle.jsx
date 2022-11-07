import styled from "styled-components";

import { Link } from "react-router-dom";

import Painting from "../../assets/img/painting.jpg";
import Splatter from "../../assets/img/splatter.png";

export const PageBody = styled.section`
  padding-top: 5em;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em 2em;
  border-bottom: 2px #303030 solid;
  border-left: 2px #303030 solid;
  border-right: 2px #303030 solid;
  position: fixed;
  right: 2%;
  top: 6%;
  background: #ffffff;
  border-radius: 2em;
  z-index: 90;
`;

export const LinkFix = styled(Link)`
  padding: 0 1em;
  text-transform: uppercase;
  font-size: small;
  text-decoration: none;
  color: #1f1f1f;
  &:hover,
  &.active {
    text-decoration: underline;
  }
`;

export const GalleryHeader = styled.section`
  background-image: url(${Painting});
  border-top: 2px #1f1f1f solid;
  border-bottom: 2px #1f1f1f solid;
  width: 100%;
  min-height: 30em;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const SiteTitle = styled.h2`
  color: #f1f1f1;
  background: #1f1f1f;
  width: 100%;
  text-align: center;
  font-size: 300%;
  border-top: #f1f1f1 2px solid;
  border-bottom: #f1f1f1 2px solid;
  padding: 0.5em 0;
`;

export const Description = styled.section`
  padding: 2em 0;
`;

export const CategoryFlex = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GalleryIntro = styled.p`
  width: 33em;
  text-align: center;
  padding-bottom: 3em;
`;
