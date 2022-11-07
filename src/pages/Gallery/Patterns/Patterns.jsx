import React from "react";

import PatternImg from "../../../assets/img/pattern.jpg";

import {
  Body,
  GalleryTitle,
  TitleBanner,
  CategoryFlex,
  CategoryText,
  FlexRow,
  HeaderTxt,
  SectionImg,
  TxtStroke,
} from "../globalGalleryStyle";

function Patterns() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Patterns</GalleryTitle>
      </TitleBanner>
      <FlexRow>
        <SectionImg src={PatternImg} alt="A colorful wall of Lego" />
        <CategoryFlex>
          <TxtStroke>
            <HeaderTxt>Patterns</HeaderTxt>
          </TxtStroke>
          <CategoryText>
            In my later years at elementary school I used to make geometric
            patterns with ruler, drawing compass and grid paper. These patterns
            usually comes when I have artist's block and I can spend hours
            making these patterns.
          </CategoryText>
        </CategoryFlex>
        <SectionImg src={PatternImg} alt="A colorful wall of Lego" />
      </FlexRow>
    </Body>
  );
}

export default Patterns;
