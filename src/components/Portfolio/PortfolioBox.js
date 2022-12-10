import React from "react";

const PortBox = ({image , ImgClass ,CLName}) => {
  return (
    <div className={CLName}>
      <img src={image} alt="5" className={ImgClass} />
      <div className="port-content">
        <h3 className="port-box-title">55</h3>
      </div>
    </div>
  );
};

export default PortBox;
