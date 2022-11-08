import React from "react";

import TradArt from "../../../assets/img/traditional-art.jpg";

import Bbq from "../../../assets/traditionalArt/bbq.png";
import Berries from "../../../assets/traditionalArt/berries.png";
import River from "../../../assets/traditionalArt/chilling in the river.png";
import Delivery from "../../../assets/traditionalArt/delivery.png";
import Moose from "../../../assets/traditionalArt/hunting moose.png";
import Propeller from "../../../assets/traditionalArt/ski propeller.png";
import SkiJump from "../../../assets/traditionalArt/skijumper.png";
import Plower from "../../../assets/traditionalArt/snowpiercer.png";
import Spring from "../../../assets/traditionalArt/spring is coming.png";
import Tires from "../../../assets/traditionalArt/studded tires.png";
import Tractor from "../../../assets/traditionalArt/trimmed tractor.png";
import Yule from "../../../assets/traditionalArt/yule tank.png";

import {
  Body,
  GalleryTitle,
  TitleBanner,
  CategoryFlex,
  CategoryText,
  FlexRow,
  SectionImg,
  GalleryFlex,
  GalleryImg,
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
      <GalleryFlex>
        <GalleryImg src={Bbq} alt="Exploding BBQ" />
        <GalleryImg src={Berries} alt="Picking Berries" />
        <GalleryImg src={River} alt="Chilling In The River" />
        <GalleryImg src={Delivery} alt="Express Delivery" />
      </GalleryFlex>
      <GalleryFlex>
        <GalleryImg src={Moose} alt="Hunting Moose" />
        <GalleryImg src={Propeller} alt="Ski Propeller" />
        <GalleryImg src={SkiJump} alt="Ski Jumper" />
        <GalleryImg src={Plower} alt="The Snowpiercer" />
      </GalleryFlex>
      <GalleryFlex>
        <GalleryImg src={Spring} alt="Spring Is Coming" />
        <GalleryImg src={Tires} alt="The Making Of Studded Tires" />
        <GalleryImg src={Tractor} alt="Tractor Tuning" />
        <GalleryImg src={Yule} alt="Motorized X-mas" />
      </GalleryFlex>
    </Body>
  );
}

export default TraditionalArt;
