import styled from "styled-components";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageFix = styled.img`
  width: 100%;
  height: 35em;
  object-fit: cover;
  border-bottom: 2px #1f1f1f solid;
`;

export const BioSection = styled.section`
  display: flex;
  align-items: center;
`;

export const Caricature = styled.img`
  width: 20em;
`;

export const TextSection = styled.section`
  max-width: 48em;
  padding: 2em 0;
`;
