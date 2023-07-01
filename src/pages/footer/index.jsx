import React from 'react';
import "./style.scss"
import footerLogo from "../../assets/images/mmedia.jpg"
const Footer = () => {
    return<footer className="footer">
            <div className="footer_bg">
                  <div className="G-container">
                     <div className="footer_body">

                         <div className="footer_logo_text">
                                 <div className="footer_logo">
                                     <span className="icon-mmedia-new-logo"></span>
                                 </div>
                             <div className="footer_text">
                                 <p>There are many variations of pass Lorem Ipsum available there is ut
                                     duis vel quis dignissim nulla vel hendrerit maecenasctetur adipisicing elit,
                                     sed do eiusmod tempor incididunt ut labore et dolore gna aliqua quis nostrud consequat. .
                                 </p>
                             </div>
                         </div>

                           <div className="footer_services">
                               <div className="footer_services_title">
                                   <p>Our Service</p>
                               </div>
                               <div className="footer_services_items">
                                   <div className="footer_services_item">
                                       <span className="icon-Vector-2"></span>
                                       <p>Effective Pay Per Click  Marketing</p>
                                   </div>
                                   <div className="footer_services_item">
                                       <span className="icon-Vector-2"></span>
                                       <p>Conversion Rate Optimization</p>
                                   </div>
                                   <div className="footer_services_item">
                                       <span className="icon-Vector-2"></span>
                                       <p>Professional Web Design Services</p>
                                   </div>
                                   <div className="footer_services_item">
                                       <span className="icon-Vector-2"></span>
                                       <p>SEO Content Writing</p>
                                   </div>
                                   <div className="footer_services_item">
                                       <span className="icon-Vector-2"></span>
                                       <p>Professional Video Production</p>
                                   </div>
                                   <div className="footer_services_item">
                                       <span className="icon-Vector-2"></span>
                                       <p>Effective Search Engine Optimization</p>
                                   </div>
                                   <div className="footer_services_item">
                                       <span className="icon-Vector-2"></span>
                                       <p>Strategic Social Media Marketing</p>
                                   </div>

                               </div>

                           </div>

                         <div className="footer_contact_us">
                            <div className="footer_contact_us_title">
                                <p>Contact Us</p>
                            </div>
                             <div className="footer_contact_us_items">
                                 <div className="footer_contact_us_item">
                                     <span className="icon-mi_location"></span>
                                     <p>100 King St West, Suite 5700, Toronto, ON M5X 1C7</p>
                                 </div>
                                 <div className="footer_contact_us_item">
                                     <span className="icon-mail4"></span>
                                     <a href = "mailto: info@mmediadevelopment.com ">info@mmediadevelopment.com </a>
                                 </div>
                             </div>
                             <div className="footer_contact_us_icons">
                                 <span className="icon-teenyicons_instagram-solid"></span>
                                 <span className="icon-uil_facebook"></span>
                                 <span className="icon-uim_whatsapp"></span>

                             </div>
                         </div>
                     </div>

                  </div>
            </div>

        </footer>
};

export default Footer;