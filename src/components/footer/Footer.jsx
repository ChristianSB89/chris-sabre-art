import React from "react";

import "./icons.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaSoundcloud } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { SiSociety6 } from "react-icons/si";
import { FaPatreon } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FooterStyle, IconSection } from "./FooterStyle";

function footer() {
  return (
    <FooterStyle>
      <section>
        <section></section>
        <section></section>
        <section></section>
      </section>
      <IconSection>
        <a href="https://www.facebook.com/ChrisSanBrei" target="_blank">
          <FaFacebookSquare className="social-icons" />
        </a>
        <a href="https://twitter.com/ChrisSanBrei" target="_blank">
          <FaTwitterSquare className="social-icons" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCXEEb1qmm6Pbh0jhdJ-H5dA"
          target="_blank"
        >
          <BsYoutube className="social-icons" />
        </a>
        <a href="https://soundcloud.com/chrismcsabre" target="_blank">
          <FaSoundcloud className="social-icons" />
        </a>
        <a href="" target="_blank">
          <FaTiktok className="social-icons" />
        </a>
        <a href="https://www.artstation.com/chrissabre" target="_blank">
          <FaArtstation className="social-icons" />
        </a>
        <a href="https://www.deviantart.com/chrismcsabre" target="_blank">
          <FaDeviantart className="social-icons" />
        </a>
        <a href="https://society6.com/chrismcsabre" target="_blank">
          <SiSociety6 className="social-icons" />
        </a>
        <a href="" target="_blank">
          <FaPatreon className="social-icons" />
        </a>
        <a href="https://www.twitch.tv/chrissanbrei" target="_blank">
          <FaTwitch className="social-icons" />
        </a>
      </IconSection>
    </FooterStyle>
  );
}

export default footer;
