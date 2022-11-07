import styled from "styled-components";

import Painting from "../../assets/img/painting.jpg";
import Splatter from "../../assets/img/splatter.png";

export const PageBody = styled.section`
  padding-top: 5em;
`;

export const NavBar = styled.nav``;

export const ListFlex = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

export const ListEl = styled.li`
  padding: 0.5em 1em;
`;

export const Links = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: small;
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

export const TxtStroke = styled.section`
  width: 30%;
  overflow: visible;
  background-image: url(${Splatter});
  background-size: cover;
  background-position: center;
  resize: both;
`;

export const HeaderTxt = styled.h4`
  color: #f1f1f1;
  text-transform: uppercase;
  text-align: center;
  padding: 1em 3em;
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

export const CategoryText = styled.p`
  width: 66em;
  padding-top: 0.5em;
`;
