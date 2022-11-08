import React from "react";
import { Outlet } from "react-router-dom";

import Sketching from "../../assets/img/sketch.jpg";
import DigiArt from "../../assets/img/digital-art.jpg";
import TradArt from "../../assets/img/traditional-art.jpg";
import MusicImg from "../../assets/img/music-art.jpg";
import BoardImg from "../../assets/img/board-art.jpg";
import ComissionImg from "../../assets/img/comissions.jpg";

import {
  PageBody,
  GalleryHeader,
  SiteTitle,
  NavBar,
  LinkFix,
  PreviewImg,
} from "./galleryMainPageStyle";

function Gallery() {
  return (
    <PageBody>
      <GalleryHeader>
        <SiteTitle>Gallery</SiteTitle>
      </GalleryHeader>
      <NavBar>
        <LinkFix to="/gallery/sketches">
          <PreviewImg src={Sketching} />
          <h3>Sketches</h3>
        </LinkFix>
        <LinkFix to="/gallery/digital">
          <PreviewImg src={DigiArt} />
          <h3>Digital Art</h3>
        </LinkFix>
        <LinkFix to="/gallery/traditional">
          <PreviewImg src={TradArt} />
          <h3>Traditional Art</h3>
        </LinkFix>
        <LinkFix to="/gallery/music">
          <PreviewImg src={MusicImg} />
          <h3>Music Art</h3>
        </LinkFix>
        <LinkFix to="/gallery/boards">
          <PreviewImg src={BoardImg} />
          <h3>Board Art</h3>
        </LinkFix>
        <LinkFix to="/gallery/comissions">
          <PreviewImg src={ComissionImg} />
          <h3>Comissions</h3>
        </LinkFix>
      </NavBar>
      <Outlet />
    </PageBody>
  );
}

export default Gallery;
