import React from "react";

const PortBox = ({image ,ImgAlt ,CLName , Title}) => {
  return (
    <div className={CLName}>
      <img src={image} alt={ImgAlt} className="port-img-class" />
      <div className="port-content">
        <h3 className="port-box-title">{Title}</h3>
      </div>
    </div>
  );
};

export default PortBox;
