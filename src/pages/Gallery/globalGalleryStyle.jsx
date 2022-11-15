import styled from "styled-components";

import Splatter from "../../assets/img/splatter.png";

export const Body = styled.section`
  background: #f1f1f1;
  width: 100%;
  height: fit-content;
  border-bottom: 2px #1f1f1f solid;
  padding-bottom: 4em;
`;

export const TitleBanner = styled.section`
  background: #1f1f1f;
  padding: 1em 0;
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
  width: 100%;
  height: 20em;
  object-fit: cover;
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
  padding: 0.2em 1em;
`;

//--------------//
//GALLERY STYLES//
//--------------//

export const GalleryFlex = styled.section`
  display: flex;
  justify-content: center;
`;

export const GalleryImg = styled.img`
  width: 25em;
  object-fit: cover;
  padding: 0.2em;
`;
