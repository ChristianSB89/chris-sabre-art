import React from "react";

import Sketching from "../../../assets/img/sketch.jpg";

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

function Sketches() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Sketches</GalleryTitle>
      </TitleBanner>
      <FlexRow>
        <SectionImg src={Sketching} alt="Drawing supplies and paper" />
        <CategoryFlex>
          <TxtStroke>
            <HeaderTxt>Sketches</HeaderTxt>
          </TxtStroke>
          <CategoryText>
            Sketching is quite a relaxing activity. I usually do sketching while
            I'm doing other things. Back in the day when I was a student I was
            always drawing during classes. On a rare occasion I could get
            caught. Man, if the teachers would know that studies have shown that
            drawing in class helps you remember things being taught.
          </CategoryText>
          <CategoryText>
            I've always loved looking at sketches from different artists, so I
            decided to share my sketches with you. But truth be told, sketching
            are just an artists way of brainstorming so don't expect too much
            fancyness.
          </CategoryText>
        </CategoryFlex>
        <SectionImg src={Sketching} alt="Drawing supplies and paper" />
      </FlexRow>
    </Body>
  );
}

export default Sketches;
