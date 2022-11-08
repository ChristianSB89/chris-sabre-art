import React from "react";

import TradArt from "../../../assets/img/traditional-art.jpg";

import {
  Body,
  GalleryTitle,
  TitleBanner,
  CategoryFlex,
  CategoryText,
  FlexRow,
  SectionImg,
} from "../globalGalleryStyle";

function TraditionalArt() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Traditional Art</GalleryTitle>
      </TitleBanner>
      <SectionImg src={TradArt} alt="An empty easel" />
      <FlexRow>
        <CategoryFlex>
          <CategoryText>
            What I've been doing the longest. But hey, it's the most accessible
            form of art! I remember getting excited for getting new colored
            pencils and other art supplies when I was younger. (Still getting
            excited, though)
          </CategoryText>
          <CategoryText>
            Here you can find works done with acrylics, pencil, markers and ink.
            Right now Posca on canvas is my favorite medium. To be honest, I
            favor traditional art over digital. There is something special about
            the smell of paint and the feel of the surface you work on.
          </CategoryText>
        </CategoryFlex>
      </FlexRow>
    </Body>
  );
}

export default TraditionalArt;
