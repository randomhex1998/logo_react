import React from "react";
import "./scss/Index.scss";
import Navbar from "./components/Navbar/Navbar";
import SlideArea from "./components/SlideSec/SlideArea";
import Description from "./components/Description/Description";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Reason from "./components/Reason/Reason";
import Consent from "./components/Consent/Consent";

function App() {
  return (
    <>
      <Navbar />
      <SlideArea />
      <Description />
      <Portfolio />
      <About />
      <Reason />
      <Consent />
    </>
  );
}

export default App;
