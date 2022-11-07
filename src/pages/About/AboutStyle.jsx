import styled from "styled-components";

import SundreCropped from "../../assets/img/sundre-cropped.jpg";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.section`
  background-image: url(${SundreCropped});
  width: 100%;
  min-height: 35em;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 2px #1f1f1f solid;
`;

export const FloatingAbout = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #1c1c1c;
  position: absolute;
  top: 30%;
  border-top: 2px #f1f1f1 solid;
  border-bottom: 2px #f1f1f1 solid;
`;

export const BioSection = styled.section`
  display: flex;
  align-items: flex-start;
`;

export const AboutImages = styled.img`
  width: 18em;
  padding: 0;
`;

export const Signed = styled.img`
  width: 5em;
  position: absolute;
  bottom: -12em;
  right: 33em;
`;

export const TextSection = styled.section`
  max-width: 48em;
  padding-top: 2em;
`;

export const WideTextSection = styled.section`
  max-width: 66em;
  padding-bottom: 2em;
`;
