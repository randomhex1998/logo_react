import React, { useState } from "react";
import { MenuUl } from "./Menu";
import { BarsIco } from "./Bars";
import { LogoNav } from "./Logo";

const Navbar = () => {
  const [bar, setBar] = useState(false);

  const barHandler = () => {
    setBar(!bar);
  };

  return (
    <nav className="navbar container">
      <section className="navbar-container">
        <LogoNav />
        <BarsIco fuckClick={barHandler} />
        <MenuUl classAct={bar} />
      </section>
    </nav>
  );
};

export default Navbar;
