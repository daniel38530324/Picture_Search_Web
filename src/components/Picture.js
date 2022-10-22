import React from "react";
import icon from "../pictures/download.png";
import icon2 from "../pictures/nocollect.png";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
        <div className="icon">
          <a target="_blank" href={data.src.large}>
            <img src={icon} alt="" />
          </a>
          <a href="/Login">
            <img src={icon2} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Picture;
