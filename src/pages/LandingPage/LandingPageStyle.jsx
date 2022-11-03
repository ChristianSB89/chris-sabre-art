import styled from "styled-components";

export const HeroImg = styled.img`
  height: 35em;
  width: 100%;
  object-fit: cover;
  border-bottom: 2px #1c1c1c solid;
`;

export const FloatingTxt = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #1c1c1c;
  position: absolute;
  top: 30%;
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
  padding-top: 2em;
`;

export const Illustrations = styled.img`
  width: 34em;
  object-fit: cover;
`;
