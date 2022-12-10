import React from "react";
import "./scss/Index.scss";
import Navbar from "./components/Navbar/Navbar";
import SlideArea from "./components/SlideSec/SlideArea";
import Description from "./components/Description/Description";

function App() {
  return (
    <>
      <Navbar />
      <SlideArea />
      <Description />
    </>
  );
}

export default App;
