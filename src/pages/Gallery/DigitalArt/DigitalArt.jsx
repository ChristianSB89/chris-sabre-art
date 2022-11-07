import React from "react";

import DigiArt from "../../../assets/img/digital-art.jpg";

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

function DigitalArt() {
  return (
    <Body>
      <TitleBanner>
        <GalleryTitle>Digital Art</GalleryTitle>
      </TitleBanner>
      <FlexRow>
        <SectionImg src={DigiArt} alt="An half-open laptop" />
        <CategoryFlex>
          <TxtStroke>
            <HeaderTxt>Digital Art</HeaderTxt>
          </TxtStroke>
          <CategoryText>
            I got my first drawing tablet back in 2009. I don't remember the
            brand, but I do remember that it didn't have a display. A couple of
            years later I got a Wacom Cintiq 21UX tablet, which I still use to
            this day.
          </CategoryText>
          <CategoryText>
            I got introduced to Adobe Photoshop back in 2008, but it took me a
            while to wrap my head around how to use layers etc. Since then I've
            switched to{" "}
            <a href="https://affinity.serif.com/en-us/photo/" target="_blank">
              Photo
            </a>{" "}
            and{" "}
            <a
              href="https://affinity.serif.com/en-us/designer/"
              target="_blank"
            >
              Designer
            </a>
            , both from a company named Affinity. (Not sponsored by the way, but
            they deserve a shoutout!)
          </CategoryText>
        </CategoryFlex>
        <SectionImg src={DigiArt} alt="An half-open laptop" />
      </FlexRow>
    </Body>
  );
}

export default DigitalArt;
