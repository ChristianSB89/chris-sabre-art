import React from "react";

import MusicImg from "../../../assets/img/music-art.jpg";

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

function MusicArt() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Music Art</GalleryTitle>
      </TitleBanner>
      <FlexRow>
        <SectionImg src={MusicImg} alt="A collection of vinyls" />
        <CategoryFlex>
          <TxtStroke>
            <HeaderTxt>Music Art</HeaderTxt>
          </TxtStroke>
          <CategoryText>
            My family is quite musical. My parents play the stereo, my two
            younger siblings play the guitar and I play drums and make music on
            pc. I've always been fascinated by album covers, in particular
            illustrated covers. And since I used to be the drummer in a band
            back in the day I've made a ton of sketches and mock-ups for
            potential album covers and CD's.
          </CategoryText>
          <CategoryText>
            I also enjoy customize items, so naturally I've made some drum head
            designs as well.
          </CategoryText>
        </CategoryFlex>
        <SectionImg src={MusicImg} alt="A collection of vinyls" />
      </FlexRow>
    </Body>
  );
}

export default MusicArt;
