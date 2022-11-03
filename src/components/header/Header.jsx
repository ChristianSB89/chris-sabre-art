import React from "react";
import NavBar from "../navBar/NavBar";
import Logo from "../../assets/img/logo.png";
import { HeaderLogo, HeaderWrapper } from "./HeaderStyle";

function Header() {
  return (
    <HeaderWrapper>
      <section>
        <HeaderLogo src={Logo} alt="CSB logo" />
      </section>
      <section>
        <NavBar />
      </section>
    </HeaderWrapper>
  );
}

export default Header;
