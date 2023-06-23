import React from 'react';
import "./style.scss"
import homeImg from "../../assets/images/home.png"
import whyChose from "../../assets/images/abstractDrawing.jpg"
import businessData from "../../assets/images/businessData.png"
import portraitGroup from "../../assets/images/portraitGroup.png"
import teamProcess from "../../assets/images/teamProcess1.png"
import thinkOutside from "../../assets/images/thinkOutside.png"
import sixDart from "../../assets/images/sixDart.png"
import actionpic from "../../assets/images/actionpic.png"
import classicHouse from "../../assets/images/classicHouse.jpg"
import services1 from "../../assets/images/services1.png"
import services2 from "../../assets/images/services2.png"
import services3 from "../../assets/images/services3.png"
import services4 from "../../assets/images/services4.png"
import services5 from "../../assets/images/services5.png"
import services6 from "../../assets/images/services6.png"
import services7 from "../../assets/images/services7.png"
import group from "../../assets/images/Group 11.png"

const Home = () => {
    return (
        <section className="home_section">
            {/*=========================SECTION IMAGE  START====================*/}
            <div style={{backgroundImage: `url(${homeImg})`}} className="home_image G-image">
                <div className="home_body">
                    <div className="G-container">
                        <div className="home_text">
                            <p>Welcome to MMedia Development Group, your premier digital marketing partner specializing
                                in driving growth for mortgage brokers, real estate agents and real estate lawyers.</p>
                            <div className="home_more_btn">
                                <button>More</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=========================SECTION IMAGE END====================*/}
            {/*=========================SECTION Contact Start====================*/}

            <div className="home_contact_us">
                <div className="home_contact_us_bg">
                    <div className="G-container">
                        <div className="home_contact_us_body">

                            <div className="home_contact_us_title">
                                <p>Ready to unlock the full potential of your mortgage broker,
                                    real estate lawyer, or real estate agent business?</p>
                                <span>Contact us today to schedule a consultation.</span>
                            </div>

                            <div className="home_contact_us_form">
                                <div className="home_contact_email">
                                    <label htmlFor="">
                                        <input type="text" placeholder="Enter email address"/>
                                        <button>SEND</button>
                                    </label>

                                </div>
                                <div className="home_contact_call">
                                    <a href="">CALL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=========================SECTION Contact END====================*/}

            {/*=========================SECTION home_why_choose start===================*/}

            <div className="home_why_choose">
                <div style={{backgroundImage: `url(${whyChose})`}} className="home_why_choose_image G-image">
                    <div className="home_why_choose_image_bg"></div>
                    <div className="home_why_choose_body">
                        <div className="G-container">
                            <div className="home_why_choose_body_title">
                                <p>Why Choose Us?</p>
                            </div>
                            <div className="home_why_choose_content">
                                <div className="home_why_choose_items_rowLeft">
                                    <div className="home_why_choose_rowLeft_item">
                                        <img src={teamProcess} alt=""/>
                                        <p>Industry Expertise</p>
                                    </div>
                                    <div className="home_why_choose_rowLeft_item">
                                        <img src={businessData} alt=""/>
                                        <p> Data-Driven Approach</p>
                                    </div>
                                </div>


                                <div className="home_why_choose_items_center">
                                    <div className="home_why_choose_center_item">
                                        <img src={sixDart} alt=""/>
                                        <p style={{color: 'gold'}}> Targeted Strategies</p>
                                    </div>
                                </div>


                                <div className="home_why_choose_items_rowRight">
                                    <div className="home_why_choose_item_rowRight">
                                        <img src={thinkOutside} alt=""/>
                                        <p>Comprehensive Services</p>

                                    </div>
                                    <div className="home_why_choose_item_rowRight">
                                        <img src={portraitGroup} alt=""/>
                                        <p>Transparent Communication</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=========================SECTION home_why_choose end===================*/}
            {/*=========================SECTION media_development_description START===================*/}

            <div className="media_development_description">
                <div style={{backgroundImage: `url(${actionpic})`}}
                     className="media_development_description_image G-image">
                    <div className="media_development_description_bg "></div>
                    <div className="G-container">
                        <div className="media_development_description_body">

                            <div className="media_development_description_title">
                                <p>At MMedia Development Group, we offer Professional Video Production Services
                                    tailored specifically for mortgage brokers, real estate agents, and real estate
                                    lawyers</p>
                            </div>
                            <div className="media_development_description_call">
                                <a href="">CALL</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/*=========================SECTION media_development_description end===================*/}


            {/*=========================SECTION home_our_services START===================*/}
            <div className="home_our_services">
                <div style={{backgroundImage: `url(${classicHouse})`}} className="home_our_services_image G-image">
                    <div className="home_our_services_bg"></div>
                    <div className="home_our_services_body">
                        <div className="G-container">
                            <div className="home_our_services_title">
                                <p>Our Services</p>
                            </div>
                            <div className="home_our_services_content">

                                <div className="home_our_services_content_rowLeft">
                                    <div className="home_our_services_content_rowLeft_item">
                                        <img src={services1} alt=""/>
                                        <p>Professional Video Production</p>
                                    </div>
                                    <div className="home_our_services_content_rowLeft_item">
                                        <img src={services2} alt=""/>
                                        <p>Effective Pay Per Click Marketing</p>
                                    </div>
                                    <div className="home_our_services_content_rowLeft_item">
                                        <img src={services3} alt=""/>
                                        <p>Effective Search Engine Optimization</p>
                                    </div>
                                </div>

                                <div className="home_our_services_content_rowCenter">
                                    <div className="home_our_services_content_rowCenter_item">
                                        <img src={services4} alt=""/>
                                        <p style={{color: 'gold'}}>Conversion Rate Optimization</p>
                                    </div>
                                </div>

                                <div className="home_our_services_content_rowRight">
                                    <div className="home_our_services_content_rowRight_item">
                                        <img src={services5} alt=""/>
                                        <p>Strategic Social Media Marketing</p>
                                    </div>
                                    <div className="home_our_services_content_rowRight_item">
                                        <img src={services6} alt=""/>
                                        <p>Professional Web Design Services</p>
                                    </div>
                                    <div className="home_our_services_content_rowRight_item">
                                        <img src={services7} alt=""/>
                                        <p>SEO Content Writing</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/*=========================SECTION home_our_services end===================*/}
            {/*=========================SECTION home_user_question START===================*/}

            <div className="home_user_question">
                <div className="home_user_question_bg">
                    <div className="G-container">
                        <div className="home_user_question_body">
                            <div className="home_user_question_text">
                                <p>Why Choose MMedia Development as your Mortgage
                                    Brokering, Real Estate Agent and Real Estate Lawyer Digital Marketing Agency?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=========================SECTION home_user_question end===================*/}

            <div className="home_media_development_info">
                <div style={{backgroundImage: `url(${group})`}} className="home_media_development_info_bg_image G-image">
                    <div className="home_media_development_info_bg"></div>
                    <div className="home_media_development_info_body">
                         <div className="G-container">
                             <div className="home_media_development_info_text">
                                 <div className="home_media_development_info_text_row1">
                                     <p>Mission Statement:</p>
                                     <p> MMedia Development Group is a full-service digital marketing agency</p>
                                 </div>

                                 <p>Attract,Impress,and Convert more leads online and get results with MMedia Development Group.</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;