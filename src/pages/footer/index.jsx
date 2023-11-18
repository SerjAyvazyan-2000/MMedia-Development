import React from "react";
import "./style.scss";
import footerLogo from "../../assets/images/mmedia.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="G-container">
          <div className="footer_body">
            <div className="footer_logo_text">
              <div className="footer_logo">
                <span className="icon-mmedia-new-logo"></span>
              </div>
            </div>

            <div className="footer_services">
              <div className="footer_services_title">
                <p>OUR SERVICE</p>
              </div>
              <div className="footer_services_items">
                <div className="footer_services_item">
                  <span className="icon-checkmark"></span>
                  <p>Effective Pay Per Click Marketing</p>
                </div>
                <div className="footer_services_item">
                  <span className="icon-checkmark"></span>
                  <p>Conversion Rate Optimization</p>
                </div>
                <div className="footer_services_item">
                  <span className="icon-checkmark"></span>
                  <p>Professional Web Design Services</p>
                </div>
                <div className="footer_services_item">
                  <span className="icon-checkmark"></span>
                  <p>SEO Content Writing</p>
                </div>
                <div className="footer_services_item">
                  <span className="icon-checkmark"></span>
                  <p>Professional Video Production</p>
                </div>
                <div className="footer_services_item">
                  <span className="icon-checkmark"></span>
                  <p>Effective Search Engine Optimization</p>
                </div>
                <div className="footer_services_item">
                  <span className="icon-checkmark"></span>
                  <p>Strategic Social Media Marketing</p>
                </div>
              </div>
            </div>

            <div className="footer_contact_us">
              <div className="footer_contact_us_title">
                <p>CONTACT US</p>
              </div>
              <div className="footer_contact_us_items">
                <div className="footer_contact_us_item">
                  <div className="footer_contact_us_item_text">
                    <div className="footer_contact_us_item_text_row-1">
                      <span className="icon-location"></span>
                      <p>Canada: 100 King St West, Suite 5700, Toronto, Ontario M5X 1C7</p>
                    </div>
                    <div className="footer_contact_us_item_text_row-1">
                      <span className="icon-location"></span>
                      <p>USA : 550 West B Street, 4th Floor, San Diego, CA 92101</p>
                    </div>
                  </div>
                </div>

                <div className="footer_contact_us_item">
                  <span className="icon-mail4"></span>
                  <a href="mailto: info@mmediadevelopment.com ">info@mmediadevelopment.com </a>
                </div>
              </div>
              <div className="footer_contact_us_icons">
                <a target="_blank" href="https://www.instagram.com/mmediadevelopment/?igshid=OGQ5ZDc2ODk2ZA">
                  <span className="icon-teenyicons_instagram-solid"></span>
                </a>
                <a target="_blank"  href="https://www.facebook.com/profile.php?id=100095503748806&mibextid=LQQJ4d">
                  <span className="icon-uil_facebook"></span>
                </a>
                <a  target='_blank' href="https://wa.me/18059198069">
                  <span className="icon-uim_whatsapp icon_whatsapp"></span>

                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
