import styled from "styled-components";

import Studio from "../../assets/img/studio.jpg";

export const Body = styled.section`
  background: #1c1c1c;
`;

export const HeroSection = styled.section`
  background-image: url(${Studio});
  width: 100%;
  min-height: 40em;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FloatingTxt = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #1c1c1c;
  position: absolute;
  top: 35%;
  border-top: 2px #f1f1f1 solid;
  border-bottom: 2px #f1f1f1 solid;
`;

export const WhiteTxt = styled.h2`
  color: #f1f1f1;
`;

export const FlexRow = styled.section`
  display: flex;
  justify-content: space-around;
  background: #1c1c1c;
  padding: 2em 0;
`;

export const MiniInfo = styled.section`
  max-width: 30em;
  padding: 1em;
`;

export const HeadlineContainer = styled.section`
  border-bottom: 2px #f1f1f1 solid;
  width: 30em;
  text-align: center;
`;

export const MiniHeadline = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  color: #f1f1f1;
`;

export const InfoPara = styled.p`
  color: #f1f1f1;
`;

export const ImageSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 4em 0;
  background: #fff;
`;

export const Illustrations = styled.img`
  width: 34em;
  object-fit: cover;
`;
