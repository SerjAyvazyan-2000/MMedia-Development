import "./style.scss";
import React, { useState } from "react";

const ServicesItem = ({ item, index, handleClick }) => {
  return (
    <div className="services_item_content">
      {item.reverse ? (
        <>
          <div onClick={() => handleClick(index, item)} className={"services_item"}>
            <div className="services_item_text">
              <p> {item.title}</p>
            </div>
            <div className="services_item_img">
              <img src={item.img} alt="" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div onClick={() => handleClick(index, item)} className={"services_item "}>
            <div className="services_item_img">
              <img src={item.img} alt="" />
            </div>
            <div className="services_item_text">
              <p> {item.title}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ServicesItem;
