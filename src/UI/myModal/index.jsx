import React from "react";
import "./style.scss";

const MyModal = ({ item, active, onClose }) => {
  return (
    <div onClick={onClose} className={!active ? "popup" : "popup active"}>
      <div className="popup_content">
        <div className="cross"></div>
        <div className="popup_body">
          <div className="popup_services_img">
            <img src={item.img} alt="" />
          </div>
          <div className="popup_services_big_title">
            <p>{item.mobileTitle}</p>
            <span>{item.mobileText}</span>
          </div>
          <div className="popup_services_title">
            <p>{item.title}</p>
          </div>
          <div className="popup_services_description">
            <p>{item.textNumber1}</p>
            <p>{item.textNumber2}</p>
            <p>{item.textNumber3}</p>
            <p>{item.textNumber4}</p>
            <p>{item.textNumber5}</p>
          </div>
          <div onClick={onClose} className="onclose_popup">
            <span className="icon-X "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
