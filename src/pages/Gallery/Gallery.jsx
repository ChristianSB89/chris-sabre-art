import React from "react";
import { Outlet } from "react-router-dom";

import {
  CategoryFlex,
  CategoryText,
  Description,
  FlexRow,
  GalleryHeader,
  GalleryIntro,
  HeaderTxt,
  LinkFix,
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
      <Description>
        <CategoryFlex>
          <GalleryIntro>
            As you will see in this gallery, I am always exploring new
            techniques and styles. Below you can read a little bit about my
            thoughts and experience for each category.
          </GalleryIntro>
        </CategoryFlex>
      </Description>
    </PageBody>
  );
}

export default Gallery;
