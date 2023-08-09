import React, { useEffect } from "react";
import contactImg from "../../assets/images/contactImg.jpg";
import "./stye.scss";
import { scrollToUp } from "../../utils/scrollToUp";

const Contact = () => {
  scrollToUp();

  return (
    <div className="contact_section">
      <div style={{ backgroundImage: `url(${contactImg})` }} className="contact_image G-image">
        <div className="contact_section_bg"></div>
        <div className="G-container">
          <div className="contact_title">
            <h3>Our Contacts</h3>
            <p>
              Empowering Mortgage Brokers, Real Estate Lawyers, and Real Estate Agents to Maximize their Business
              Potential
            </p>
          </div>

          <div className="contact_body">
            <div className="contact_list">
              <div className="contact_list_item_phoneNumber">
                <p>Phone number:</p>
                <a href="https://wa.me/18059198069" target="_blank">
                  +1-805-919-8069
                </a>
                <div className="contact_list_item_phoneNumber_icon">
                  <span className="icon-fa6-solid_phone-1"></span>
                </div>
              </div>
              <div className="contact_list_item_email_location">
                <div className="contact_list_item_location">
                  <p>Office Locations:</p>
                  <span>Canada: 100 King St West, Suite 5700, Toronto, Ontario M5X 1C7</span>
                  <div className="contact_list_item_location_icon">
                    <span className="icon-mi_location"></span>
                  </div>
                </div>
                <div className="contact_list_item_email">
                  <p>E-mail:</p>
                  <a href="mailto: info@mmediadevelopment.com ">info@mmediadevelopment.com </a>
                  <div className="contact_list_item_email_icon">
                    <span className="icon-mi_location"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
