import styled from "styled-components";
import { Link } from "react-router-dom";

import Painting from "../../assets/img/painting.jpg";

export const PageBody = styled.section`
  padding-top: 5em;
`;

export const GalleryHeader = styled.section`
  background-image: url(${Painting});
  width: 100%;
  min-height: 18.65em;
  background-attachment: fixed;
  background-position: bottom;
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
  font-size: 200%;
  border-top: #f1f1f1 2px solid;
  border-bottom: #f1f1f1 2px solid;
  padding: 0.5em 0;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em 2em;
  background: #ffffff;
`;

export const LinkFix = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #f1f1f1;
  background: #1f1f1f;
  padding: 1em;
  border-radius: 2em;
  text-align: center;
  font-weight: 800;
  font-size: large;
  border-left: 2px #f1f1f1 solid;
  border-bottom: 4px #f1f1f1 solid;
  border-right: 2px #f1f1f1 solid;
  &:hover,
  &.active {
    color: #1f1f1f;
    background: #f1f1f1;
    border-left: 2px #1f1f1f solid;
    border-bottom: 4px #1f1f1f solid;
    border-right: 2px #1f1f1f solid;
    opacity: 70%;
  }
`;

export const PreviewImg = styled.img`
  width: 10em;
  height: 10em;
  object-fit: cover;
  border-left: 2px #f1f1f1 solid;
  border-bottom: 4px #f1f1f1 solid;
  border-right: 2px #f1f1f1 solid;
  border-radius: 2em;
`;
