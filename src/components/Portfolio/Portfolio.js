import React from "react";
import Image1 from "../../Img/portfolio/2.jpg";
import Image2 from "../../Img/portfolio/3.jpg";
import Image3 from "../../Img/portfolio/4.jpg";
import Image4 from "../../Img/portfolio/5.jpg";
import Image5 from "../../Img/portfolio/6.jpg";
// import Image6 from "../../Img/portfolio/2.jpg";
import PortBox from "./PortfolioBox";

const Portfolio = () => {
  return (
    <section className="Portfolio pTB-3">
      <h3 className="MainTitles">برخی نمونه کارها</h3>
      <div className="container">
        <div className="row">
          <PortBox
            image={Image1}
            CLName="bitch column"
            ImgClass="imageBitch"
          />
          <PortBox
            image={Image2}
            CLName="bitch column"
            ImgClass="imageBitch"
          />
          <PortBox
            image={Image3}
            CLName="bitch column"
            ImgClass="imageBitch"
          />
        </div>
        <div className="row pt-2">
          <PortBox
            image={Image4}
            CLName="bitch column"
            ImgClass="imageBitch"
          />
          <PortBox
            image={Image5}
            CLName="bitch column"
            ImgClass="imageBitch"
          />
          <PortBox
            image={Image1}
            CLName="bitch column"
            ImgClass="imageBitch"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
