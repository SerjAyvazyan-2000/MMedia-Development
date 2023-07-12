import React, {useState} from 'react';
import "./style.scss"
import servicesLogo from "../../assets/images/home1.jpg"
import business from "../../assets/images/busines.png"

import Spoiler from "../../components/spoiler";
import SpoilerImg from '../../components/spoilerimg';
import img from "../../assets/images/Untitled-1-02 1.png"
import img1 from "../../assets/images/Untitled-1-01 2.png"
import img2 from "../../assets/images/Untitled-1-03 2 (1).png"
import img3 from "../../assets/images/Untitled-1-04.png"
import img4 from "../../assets/images/Untitled-1-05.png"
import img5 from "../../assets/images/Untitled-1-06.png"
import img6 from "../../assets/images/Untitled-1-07.png"
import {useInformation} from "../../hooks/useInformation";


const Services = () => {
    const {ourServicesList} = useInformation()

    return<section className="services_section">
                  <div style={{backgroundImage:`url(${business})`}} className='our_services_image G-image'>
                    <div className="our_services_bg"></div>
                      <div className='G-container'>
                           <div className="our_services_title">
                           <h3>Our Services</h3>
                           <p>Together, we will dive deeper into your goals, challenges, and opportunities. Our team will develop a customized digital marketing strategy that aligns with your vision and helps you achieve sustainable growth. Let's embark on this exciting journey and take your business to new heights.</p>
                           </div>
                           <div className="our_services_body">
                               {ourServicesList.map((item,index)=>{
                                   return  <SpoilerImg
                                       img={item.img}
                                       title={item.title}
                                       text={ item}
                                       reverse={item.reverse}
                                       index={index}
                                   />

                               })}


                           </div>
                      </div>
                  </div>
      
              <div style={{backgroundImage:`url(${servicesLogo})`}} className="services_choose_us_image G-image">
                   <div className="services_choose_us_bg"></div>
                  <div className="G-container">
                       <div className="services_choose_us_body">
                             <div className="services_choose_us_title">
                                 <div className="services_choose_us_title_icon">
                                     <h3>Why Choose Us</h3><span className="icon-Vector"></span>
                                 </div>
                                 <span>Here are our answers!</span>
                             </div>
                           <div className="services_choose_us_spoiler">
                               <Spoiler
                                   title={"1. Industry Expertise:"}
                                   text={"  With an extensive track record of working with professionals in the\n" +
                                       "                            mortgage and real estate industry, we bring valuable insights and knowledge\n" +
                                       "                            to the table. Our team is well-versed in the intricacies of the market, including\n" +
                                       "                            the latest regulations, trends, and industry best practices. This expertise allows\n" +
                                       "                            us to craft tailored strategies that address the unique challenges and opportunities\n" +
                                       "                            you face, giving you a competitive edge."}
                               />
                               <Spoiler
                                   title={"2. Targeted Strategies: "}
                                   text={"     With an extensive track record of working with professionals in the\n" +
                                       "                                            mortgage and real estate industry, we bring valuable insights and knowledge\n" +
                                       "                                            to the table. Our team is well-versed in the intricacies of the market, including\n" +
                                       "                                            the latest regulations, trends, and industry best practices. This expertise allows\n" +
                                       "                                            us to craft tailored strategies that address the unique challenges and opportunities\n" +
                                       "                                            you face, giving you a competitive edge."}
                               />
                               <Spoiler
                                   title={"3. Comprehensive Services:"}
                                   text={"With an extensive track record of working with professionals in the\n" +
                                       "                                           mortgage and real estate industry, we bring valuable insights and knowledge\n" +
                                       "                                           to the table. Our team is well-versed in the intricacies of the market, including\n" +
                                       "                                           the latest regulations, trends, and industry best practices. This expertise allows\n" +
                                       "                                           us to craft tailored strategies that address the unique challenges and opportunities\n" +
                                       "                                           you face, giving you a competitive edge."}
                               />
                               <Spoiler
                                   title={"4. Data-Driven Approach:"}
                                   text={" With an extensive track record of working with professionals in the\n" +
                                       "                                           mortgage and real estate industry, we bring valuable insights and knowledge\n" +
                                       "                                           to the table. Our team is well-versed in the intricacies of the market, including\n" +
                                       "                                           the latest regulations, trends, and industry best practices. This expertise allows\n" +
                                       "                                           us to craft tailored strategies that address the unique challenges and opportunities\n" +
                                       "                                           you face, giving you a competitive edge."}
                               />
                               <Spoiler
                                   title={"5. Transparent Communication:"}
                                   text={"      With an extensive track record of working with professionals in the\n" +
                                       "                                           mortgage and real estate industry, we bring valuable insights and knowledge\n" +
                                       "                                           to the table. Our team is well-versed in the intricacies of the market, including\n" +
                                       "                                           the latest regulations, trends, and industry best practices. This expertise allows\n" +
                                       "                                           us to craft tailored strategies that address the unique challenges and opportunities\n" +
                                       "                                           you face, giving you a competitive edge."}
                               />



                           </div>

                       </div>
                  </div> </div>


        </section>
};

export default Services;