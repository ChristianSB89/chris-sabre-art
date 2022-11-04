import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Gallery from "../../pages/Gallery/Gallery";
import Services from "../../pages/Services/Services";
import Shop from "../../pages/Shop/Shop";
import Media from "../../pages/Media/Media";

import Logo from "../../assets/img/logo.png";

import {
  LinkDeco,
  ListDeco,
  NavItems,
  NavWrapper,
  HeaderLogo,
} from "./navBarStyle";

function NavBar() {
  return (
    <Router>
      <NavWrapper>
        <section>
          <HeaderLogo src={Logo} alt="CSB logo" />
        </section>
        <NavItems>
          <ListDeco>
            <LinkDeco exact to="/" end>
              Home
            </LinkDeco>
          </ListDeco>
          <ListDeco>
            <LinkDeco to="/about">About</LinkDeco>
          </ListDeco>
          <ListDeco>
            <LinkDeco to="/gallery">Gallery</LinkDeco>
          </ListDeco>
          <ListDeco>
            <LinkDeco to="/services">Services</LinkDeco>
          </ListDeco>
          <ListDeco>
            <LinkDeco to="/shop">Shop</LinkDeco>
          </ListDeco>
          <ListDeco>
            <LinkDeco to="/media">Media</LinkDeco>
          </ListDeco>
        </NavItems>
      </NavWrapper>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
