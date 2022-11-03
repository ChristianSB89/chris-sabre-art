import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: fit-content;
  padding: 2em 0 4em 0;
  background: #1c1c1c;
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
  border-bottom: 1px #f1f1f1 solid;
  text-transform: uppercase;
  font-weight: 500;
  color: #f1f1f1;
`;

export const Text = styled.p`
  color: #f1f1f1;
`;

export const IconSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Mail = styled.a`
  color: #f1f1f1;
  &:hover {
    color: #959595;
  }
`;
