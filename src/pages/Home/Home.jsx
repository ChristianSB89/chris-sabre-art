import React from "react";

import Delivery from "../../assets/traditionalArt/delivery.png";
import SkiPropeller from "../../assets/traditionalArt/ski propeller.png";
import Snowpiercer from "../../assets/traditionalArt/snowpiercer.png";

import {
  Body,
  FlexRow,
  FloatingTxt,
  HeadlineContainer,
  HeroSection,
  Illustrations,
  ImageSection,
  InfoPara,
  MiniHeadline,
  MiniInfo,
  WhiteTxt,
} from "./HomeStyling";

function Home() {
  return (
    <Body>
      <HeroSection></HeroSection>
      <FloatingTxt>
        <WhiteTxt>
          "My artwork doesn't have any deep meaning. I'm not that clever."
        </WhiteTxt>
      </FloatingTxt>
      <FlexRow>
        <MiniInfo>
          <HeadlineContainer>
            <MiniHeadline>Style</MiniHeadline>
          </HeadlineContainer>
          <InfoPara>
            It usually depends on the project, but personally I enjoy bold
            outlines and hard shadows. I've never cared about realism, so it's
            the cartoonish style for me.
          </InfoPara>
          <InfoPara>
            When I do digital work it's a lot of gradients and dynamic lines as
            well as patterns. I usually prefer working with vector graphics.
          </InfoPara>
        </MiniInfo>
        <MiniInfo>
          <HeadlineContainer>
            <MiniHeadline>Tools of the trade</MiniHeadline>
          </HeadlineContainer>
          <InfoPara>
            When making traditional art I usually turn to my Posca markers. I
            also work with pencils, acrylics and ink pen.
          </InfoPara>
          <InfoPara>
            On my digital work I use Wacom drawing display and my trusted
            computer.
          </InfoPara>
        </MiniInfo>
        <MiniInfo>
          <HeadlineContainer>
            <MiniHeadline>Philosophy</MiniHeadline>
          </HeadlineContainer>
          <InfoPara>
            My work does rarely have any deep meaning to them. If I think of
            something cool or funny to draw, that's what it is.
          </InfoPara>
          <InfoPara>So I guess my philosophy is "It is what it is".</InfoPara>
        </MiniInfo>
      </FlexRow>
      <ImageSection>
        <Illustrations src={Delivery} alt="Man on modified motorcycle" />
        <Illustrations
          src={SkiPropeller}
          alt="Man skiing with a backpack with a propeller"
        />
        <Illustrations
          src={Snowpiercer}
          alt="Man holding a plower on his way down from the roof"
        />
      </ImageSection>
    </Body>
  );
}

export default Home;
