import React from "react";
import { MenuUl } from "./Menu";
import { BarsIco } from "./Bars";
import { LogoNav } from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar-container">
        <LogoNav />
        <BarsIco />
        <MenuUl />
      </section>
    </nav>
  );
};

export default Navbar;
