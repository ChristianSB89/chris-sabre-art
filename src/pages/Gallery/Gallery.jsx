import React from "react";
import { Outlet } from "react-router-dom";

import {
  PageBody,
  NavBar,
  LinkFix,
  GalleryHeader,
  SiteTitle,
  Description,
  CategoryFlex,
  GalleryIntro,
} from "./galleryMainPageStyle";

function Gallery() {
  return (
    <PageBody>
      <NavBar>
        <LinkFix to="/gallery/sketches">Sketches</LinkFix>
        <LinkFix to="/gallery/digital">Digital Art</LinkFix>
        <LinkFix to="/gallery/traditional">Traditional Art</LinkFix>
        <LinkFix to="/gallery/patterns">Patterns</LinkFix>
        <LinkFix to="/gallery/music">Music Art</LinkFix>
        <LinkFix to="/gallery/boards">Board Design</LinkFix>
        <LinkFix to="/gallery/comissions">Comissions</LinkFix>
      </NavBar>
      <Outlet />

      <GalleryHeader>
        <SiteTitle>Gallery</SiteTitle>
      </GalleryHeader>
    </PageBody>
  );
}

export default Gallery;
