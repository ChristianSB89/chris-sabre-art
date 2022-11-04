import React from "react";

import SundreCropped from "../../assets/img/sundre-cropped.jpg";
import HeadShot from "../../assets/img/headshot.png";

import {
  BioSection,
  Caricature,
  ImageFix,
  PageWrapper,
  TextSection,
} from "./AboutStyle";

function About() {
  return (
    <PageWrapper>
      <ImageFix src={SundreCropped} alt="A view of the town I grew up in" />
      <BioSection>
        <Caricature src={HeadShot} alt="Caricature of Chris" />
        <TextSection>
          <h3>The short version</h3>
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
        </TextSection>
      </BioSection>
    </PageWrapper>
  );
}

export default About;
