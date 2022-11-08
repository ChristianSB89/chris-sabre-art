import React from "react";

import Sketching from "../../../assets/img/sketch.jpg";

import {
  Body,
  GalleryTitle,
  TitleBanner,
  CategoryFlex,
  CategoryText,
  FlexRow,
  SectionImg,
} from "../globalGalleryStyle";

function Sketches() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Sketches</GalleryTitle>
      </TitleBanner>
      <SectionImg src={Sketching} alt="Drawing supplies and paper" />
      <FlexRow>
        <CategoryFlex>
          <CategoryText>
            Sketching is quite a relaxing activity. I usually do sketching while
            I'm doing other things. Back in the day when I was a student I was
            always drawing during classes. On a rare occasion I could get
            caught. Man, if the teachers would know that studies have shown that
            drawing in class helps you remember things being taught.
          </CategoryText>
          <CategoryText>
            One thing about sketching that I feel a lot of people get wrong, me
            included back in the day, is that you can only sketch with a pencil.
            You can sketch with any medium. That's how you learn how to blend
            colors, improve workflow and in general develop a better
            understanding of the chosen medium. The reason I say that is because
            I have sketches done in various mediums here.
          </CategoryText>
          <CategoryText>
            I've always loved looking at sketches from different artists, so I
            decided to share my sketches with you. But truth be told, sketching
            are just an artists way of brainstorming so don't expect too much
            fancyness.
          </CategoryText>
        </CategoryFlex>
      </FlexRow>
    </Body>
  );
}

export default Sketches;
