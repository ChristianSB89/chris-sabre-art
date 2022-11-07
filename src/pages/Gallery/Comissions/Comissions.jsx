import React from "react";

import ComissionImg from "../../../assets/img/comissions.jpg";

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

function Comissions() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Comissions</GalleryTitle>
      </TitleBanner>
      <FlexRow>
        <SectionImg src={ComissionImg} alt="Stacks of paper" />
        <CategoryFlex>
          <TxtStroke>
            <HeaderTxt>Comissions</HeaderTxt>
          </TxtStroke>
          <CategoryText>
            I've done a lot of comissions. Everything from drawing parts for
            window bars to logos for gamers. My first comission ever, I think,
            was making a logo for a local club for veteran tractors.
          </CategoryText>
        </CategoryFlex>
        <SectionImg src={ComissionImg} alt="Stacks of paper" />
      </FlexRow>
    </Body>
  );
}

export default Comissions;
