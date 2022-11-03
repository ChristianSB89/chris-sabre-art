import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: fit-content;
  border-top: #1c1c1c 2px solid;
  padding: 2em 0 4em 0;
`;

export const FlexRow = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const FlexColumn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const BorderPara = styled.p`
  border-bottom: 1px #1c1c1c solid;
  text-transform: uppercase;
  font-weight: 500;
`;

export const IconSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
