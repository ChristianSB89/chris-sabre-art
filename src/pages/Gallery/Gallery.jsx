import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import Sketching from "../../assets/img/sketch.jpg";
import DigitalArt from "../../assets/img/digital-art.jpg";
import TradArt from "../../assets/img/traditional-art.jpg";
import Patterns from "../../assets/img/pattern.jpg";
import MusicArt from "../../assets/img/music-art.jpg";
import BoardDesign from "../../assets/img/board-art.jpg";
import Comission from "../../assets/img/comissions.jpg";

import {
  CategoryFlex,
  CategoryText,
  Description,
  FlexRow,
  GalleryHeader,
  GalleryIntro,
  HeaderTxt,
  NavBar,
  PageBody,
  SectionImg,
  SiteTitle,
  TxtStroke,
} from "./galleryStyle";

function Gallery() {
  return (
    <PageBody>
      <NavBar>
        <Link to="/gallery/sketches">Sketching</Link>
        <Link to="/gallery/digital">Digital Art</Link>
        <Link to="/gallery/traditional">Traditional Art</Link>
        <Link to="/gallery/patterns">Patterns</Link>
        <Link to="/gallery/music">Music Art</Link>
        <Link to="/gallery/boards">Board Design</Link>
        <Link to="/gallery/comissions">Comissions</Link>
      </NavBar>
      <Outlet />

      <GalleryHeader>
        <SiteTitle>Gallery</SiteTitle>
      </GalleryHeader>
      <Description>
        <CategoryFlex>
          <GalleryIntro>
            As you will see in this gallery, I am always exploring new
            techniques and styles. Below you can read a little bit about my
            thoughts and experience for each category.
          </GalleryIntro>
        </CategoryFlex>
        <FlexRow>
          <SectionImg src={Sketching} alt="Drawing supplies and paper" />
          <CategoryFlex>
            <TxtStroke>
              <HeaderTxt>Sketches</HeaderTxt>
            </TxtStroke>
            <CategoryText>
              Sketching is quite a relaxing activity. I usually do sketching
              while I'm doing other things. Back in the day when I was a student
              I was always drawing during classes. On a rare occasion I could
              get caught. Man, if the teachers would know that studies have
              shown that drawing in class helps you remember things being
              taught.
            </CategoryText>
            <CategoryText>
              I've always loved looking at sketches from different artists, so I
              decided to share my sketches with you. But truth be told,
              sketching are just an artists way of brainstorming so don't expect
              too much fancyness.
            </CategoryText>
          </CategoryFlex>
          <SectionImg src={Sketching} alt="Drawing supplies and paper" />
        </FlexRow>
        <FlexRow>
          <SectionImg src={DigitalArt} alt="An half-open laptop" />
          <CategoryFlex>
            <TxtStroke>
              <HeaderTxt>Digital Art</HeaderTxt>
            </TxtStroke>
            <CategoryText>
              I got my first drawing tablet back in 2009. I don't remember the
              brand, but I do remember that it didn't have a display. A couple
              of years later I got a Wacom Cintiq 21UX tablet, which I still use
              to this day.
            </CategoryText>
            <CategoryText>
              I got introduced to Adobe Photoshop back in 2008, but it took me a
              while to wrap my head around how to use layers etc. Since then
              I've switched to{" "}
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
              , both from a company named Affinity. (Not sponsored by the way,
              but they deserve a shoutout!)
            </CategoryText>
          </CategoryFlex>
          <SectionImg src={DigitalArt} alt="An half-open laptop" />
        </FlexRow>
        <FlexRow>
          <SectionImg src={TradArt} alt="An empty easel" />
          <CategoryFlex>
            <TxtStroke>
              <HeaderTxt>Traditional Art</HeaderTxt>
            </TxtStroke>
            <CategoryText>
              What I've been doing the longest. But hey, it's the most
              accessible form of art! I remember getting excited for getting new
              colored pencils and other art supplies when I was younger. (Still
              getting excited, though) I enjoyed art so much that I studied art
              in High School.
            </CategoryText>
            <CategoryText>
              Here you can find works done with acrylics, pencil, markers and
              ink. Right now Posca on canvas is my favorite medium. To be
              honest, I favor traditional art over digital. There is something
              special about the smell of paint and the feel of the surface you
              work on.
            </CategoryText>
          </CategoryFlex>
          <SectionImg src={TradArt} alt="An empty easel" />
        </FlexRow>
        <FlexRow>
          <SectionImg src={Patterns} alt="A colorful wall of Lego" />
          <CategoryFlex>
            <TxtStroke>
              <HeaderTxt>Patterns</HeaderTxt>
            </TxtStroke>
            <CategoryText>
              In my later years at elementary school I used to make geometric
              patterns with ruler, drawing compass and grid paper. These
              patterns usually comes when I have artist's block and I can spend
              hours making these patterns.
            </CategoryText>
          </CategoryFlex>
          <SectionImg src={Patterns} alt="A colorful wall of Lego" />
        </FlexRow>
        <FlexRow>
          <SectionImg src={MusicArt} alt="A collection of vinyls" />
          <CategoryFlex>
            <TxtStroke>
              <HeaderTxt>Music Art</HeaderTxt>
            </TxtStroke>
            <CategoryText>
              My family is quite musical. My parents play the stereo, my two
              younger siblings play the guitar and I play drums and make music
              on pc. I've always been fascinated by album covers, in particular
              illustrated covers. And since I used to be the drummer in a band
              back in the day I've made a ton of sketches and mock-ups for
              potential album covers and CD's.
            </CategoryText>
            <CategoryText>
              I also enjoy customize items, so naturally I've made some drum
              head designs as well.
            </CategoryText>
          </CategoryFlex>
          <SectionImg src={MusicArt} alt="A collection of vinyls" />
        </FlexRow>
        <FlexRow>
          <SectionImg src={BoardDesign} alt="A collection of vinyls" />
          <CategoryFlex>
            <TxtStroke>
              <HeaderTxt>Board Designs</HeaderTxt>
            </TxtStroke>
            <CategoryText>
              Being a gamer for a long time, I've played my share of Tony Hawk
              games. But one game in particular made me interested in board
              designs, and that game was Tony Hawk's American Wasteland. That's
              where I discovered the art of Jimbo Phillips for the first time.
            </CategoryText>
            <CategoryText>
              In my younger days I wanted to become a pro skater, but the only
              thing I learned was to do an ollie. So I'd rather stick to
              painting boards.
            </CategoryText>
          </CategoryFlex>
          <SectionImg src={BoardDesign} alt="A collection of vinyls" />
        </FlexRow>
        <FlexRow>
          <SectionImg src={Comission} alt="Stacks of paper" />
          <CategoryFlex>
            <TxtStroke>
              <HeaderTxt>Comissions</HeaderTxt>
            </TxtStroke>
            <CategoryText>
              I've done a lot of comissions. Everything from drawing parts for
              window bars to logos for gamers. My first comission ever, I think,
              was making a logo for a local club for veteran tractors.
            </CategoryText>
          </CategoryFlex>
          <SectionImg src={Comission} alt="Stacks of paper" />
        </FlexRow>
      </Description>
    </PageBody>
  );
}

export default Gallery;
