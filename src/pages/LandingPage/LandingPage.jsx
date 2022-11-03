import React from "react";
import {
  FloatingTxt,
  HeroImg,
  Illustrations,
  ImageSection,
  WhiteTxt,
} from "./LandingPageStyle";
import Studio from "../../assets/img/studio.jpg";
import Delivery from "../../assets/traditionalArt/delivery.png";
import SkiPropeller from "../../assets/traditionalArt/ski propeller.png";
import Snowpiercer from "../../assets/traditionalArt/snowpiercer.png";

function LandingPage() {
  return (
    <section>
      <HeroImg src={Studio} />
      <FloatingTxt>
        <WhiteTxt>
          "My illustrations doesn't have any deep meaning. I'm not that clever."
        </WhiteTxt>
      </FloatingTxt>
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
      <section></section>
    </section>
  );
}

export default LandingPage;
