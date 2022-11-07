import React from "react";

import TradArt from "../../../assets/img/traditional-art.jpg";

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

function TraditionalArt() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Traditional Art</GalleryTitle>
      </TitleBanner>
      <FlexRow>
        <SectionImg src={TradArt} alt="An empty easel" />
        <CategoryFlex>
          <TxtStroke>
            <HeaderTxt>Traditional Art</HeaderTxt>
          </TxtStroke>
          <CategoryText>
            What I've been doing the longest. But hey, it's the most accessible
            form of art! I remember getting excited for getting new colored
            pencils and other art supplies when I was younger. (Still getting
            excited, though) I enjoyed art so much that I studied art in High
            School.
          </CategoryText>
          <CategoryText>
            Here you can find works done with acrylics, pencil, markers and ink.
            Right now Posca on canvas is my favorite medium. To be honest, I
            favor traditional art over digital. There is something special about
            the smell of paint and the feel of the surface you work on.
          </CategoryText>
        </CategoryFlex>
        <SectionImg src={TradArt} alt="An empty easel" />
      </FlexRow>
    </Body>
  );
}

export default TraditionalArt;
