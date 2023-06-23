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
                                     <img src={footerLogo} alt=""/>
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
                                   <p>Effective Pay Per Click  Marketing</p>
                                   <p>Conversion Rate Optimization</p>
                                   <p>Professional Web Design Services</p>
                                   <p>SEO Content Writing</p>
                                   <p>Professional Video Production</p>
                                   <p>Effective Search Engine Optimization</p>
                                   <p>Strategic Social Media Marketing</p>
                               </div>

                           </div>

                         <div className="footer_contact_us">
                            <div className="footer_contact_us_title"></div>
                             <div className="footer_contact_us_items">
                                 <span className="icon-mi_location"></span><p>100 King St West, Suite 5700, Toronto, ON M5X 1C7</p>
                                  <span className="icon-lucide_mail"></span><p>info@mmediadevelopment.com </p>
                             </div>
                         </div>
                     </div>

                  </div>
            </div>

        </footer>
};

export default Footer;