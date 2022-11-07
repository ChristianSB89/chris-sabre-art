import styled from "styled-components";

import Splatter from "../../assets/img/splatter.png";

export const Body = styled.section`
  position: absolute;
  background: #f1f1f1;
  width: 100%;
  height: 50%;
  border-bottom: 2px #1f1f1f solid;
`;

export const TitleBanner = styled.section`
  background: #1f1f1f;
  border-top: 2px #ffffff solid;
  border-bottom: 2px #ffffff solid;
  margin-top: 25em;
`;

export const FlexRow = styled.section`
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
`;

export const CategoryFlex = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TxtStroke = styled.section`
  width: 40em;
  overflow: visible;
  background-image: url(${Splatter});
  background-size: cover;
  background-position: center;
  resize: both;
`;

//------------//
//IMAGE STYLES//
//------------//

export const SectionImg = styled.img`
  width: 10em;
  height: 20em;
  object-fit: cover;
  padding-right: 1em;
`;

//-----------//
//TEXT STYLES//
//-----------//

export const GalleryTitle = styled.h2`
  color: #f1f1f1;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`;

export const HeaderTxt = styled.h4`
  color: #f1f1f1;
  text-transform: uppercase;
  text-align: center;
  padding: 1em 3em;
`;

export const CategoryText = styled.p`
  width: 50em;
  padding: 0.5em 1em;
`;
