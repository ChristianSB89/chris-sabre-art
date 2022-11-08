import React from "react";

import ComissionImg from "../../../assets/img/comissions.jpg";

import {
  Body,
  GalleryTitle,
  TitleBanner,
  CategoryFlex,
  CategoryText,
  FlexRow,
  SectionImg,
} from "../globalGalleryStyle";

function Comissions() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Comissions</GalleryTitle>
      </TitleBanner>
      <SectionImg src={ComissionImg} alt="Stacks of paper" />
      <FlexRow>
        <CategoryFlex>
          <CategoryText>
            I've done a lot of comissions. Everything from drawing parts for
            window bars to logos for gamers. My first comission ever, I think,
            was making a logo for a local club for veteran tractors.
          </CategoryText>
        </CategoryFlex>
      </FlexRow>
    </Body>
  );
}

export default Comissions;
