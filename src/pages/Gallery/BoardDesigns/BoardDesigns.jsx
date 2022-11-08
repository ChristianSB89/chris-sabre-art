import React from "react";

import BoardImg from "../../../assets/img/board-art.jpg";

import {
  Body,
  GalleryTitle,
  TitleBanner,
  CategoryFlex,
  CategoryText,
  FlexRow,
  SectionImg,
} from "../globalGalleryStyle";

function BoardDesigns() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Board Designs</GalleryTitle>
      </TitleBanner>
      <SectionImg src={BoardImg} alt="A collection of vinyls" />
      <FlexRow>
        <CategoryFlex>
          <CategoryText>
            Being a gamer for a long time, I've played my share of Tony Hawk
            games. But one game in particular made me interested in board
            designs, and that game was Tony Hawk's American Wasteland. That's
            where I discovered the art of Jimbo Phillips for the first time.
          </CategoryText>
          <CategoryText>
            In my younger days I wanted to become a pro skater, but the only
            thing I learned was to do an ollie. So I'd rather stick to painting
            boards.
          </CategoryText>
        </CategoryFlex>
      </FlexRow>
    </Body>
  );
}

export default BoardDesigns;
