import React from "react";

import HeadShot from "../../assets/img/headshot.png";
import Signature from "../../assets/img/signature.png";

import {
  BioSection,
  Header,
  PageWrapper,
  TextSection,
  WideTextSection,
  AboutImages,
  Signed,
  FloatingAbout,
} from "./AboutStyle";

import { FloatingTxt, WhiteTxt } from "../Home/HomeStyling";

function About() {
  return (
    <PageWrapper>
      <Header>
        <FloatingAbout>
          <WhiteTxt>A little bit about myself</WhiteTxt>
        </FloatingAbout>
      </Header>
      <BioSection>
        <TextSection>
          <p>
            I have been drawing since the early 90's and have never stopped.
          </p>
          <p>
            Being drummer in a band in my 20's I spend a lot of time designing
            drumheads, band logos and album covers. I also used to cruise a lot
            on my longboard and have done some longboard designs as well.
          </p>
          <p>
            Wanting to customize boards and drumheads I was on the lookout for
            easy-to-use tools, as acrylic paint and a load of brushes where too
            much hassle to carry around. It wasn't until I discovered Posca
            markers that I started customizing various items.
          </p>
          <p>
            At one point I was introduced to{" "}
            <a
              href="https://en.wikipedia.org/wiki/The_Joy_of_Painting"
              target="_blank"
            >
              Bob Ross and his Joy Of Painting series
            </a>
            , where I discovered that I could use his techniques when drawing
            with charcoal.
          </p>
          <p>
            I've always been fascinated by steam engines, which might explain
            why I like the steampunk genre. I draw a lot of modified cars and
            machines that probably won't work if you where to build them.
          </p>
          <p>
            Being a huge fan of the norwegian author and illustrator,{" "}
            <a
              href="https://no.wikipedia.org/wiki/Kjell_Aukrust"
              target="_blank"
            >
              Kjell Aukrust
            </a>
            , I've also enjoy drawing old dudes in different situations. Even in
            those illustrations you can sometimes see hints of steampunk.
          </p>
          <p>
            Another recurring theme in my artwork is gaming. I've been a gamer
            since we got our first SNES way back in the early 90's. So it is not
            unusual to see a controller here and a Game Boy there.
          </p>
        </TextSection>
        <AboutImages src={HeadShot} alt="Caricature of Chris" />
      </BioSection>
      <BioSection>
        <WideTextSection>
          <p>
            I have only some art education, the rest have I learned through
            trial & error and a genuine interest in techniques and tools. I try
            to pass on what I've learned through making Youtube videos. I
            sometimes stream on Twitch, but I'm a simple mind, so talking and
            drawing at the same time is hard. But I'm working hard to improve.
          </p>
          <p>My artwork doesn't have any deep meaning. I'm not that clever.</p>
          <p>It is what it is.</p>
        </WideTextSection>
      </BioSection>
      <Signed src={Signature} alt="CSB Signature" />
    </PageWrapper>
  );
}

export default About;
