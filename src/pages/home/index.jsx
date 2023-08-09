import React, { useRef, useState } from "react";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import homeImg1 from "../../assets/images/home1.jpg";
import homeImg2 from "../../assets/images/home2.jpg";
import homeImg from "../../assets/images/buying-new-house-concept.png";
import whyChose from "../../assets/images/abstractDrawing.jpg";
import businessData from "../../assets/images/businessData.png";
import portraitGroup from "../../assets/images/portraitGroup.png";
import teamProcess from "../../assets/images/teamProcess1.png";
import thinkOutside from "../../assets/images/thinkOutside.png";
import sixDart from "../../assets/images/sixDart.png";
import actionpic from "../../assets/images/actionpic.png";
import classicHouse from "../../assets/images/classicHouse.jpg";
import services1 from "../../assets/images/Untitled-1-02 1.png";
import services2 from "../../assets/images/Untitled-1-01 2.png";
import services3 from "../../assets/images/Untitled-1-03 2 (1).png";
import services4 from "../../assets/images/Untitled-1-04.png";
import services5 from "../../assets/images/Untitled-1-05.png";
import services6 from "../../assets/images/Untitled-1-06.png";
import services7 from "../../assets/images/Untitled-1-07.png";
import group from "../../assets/images/hands-typing-laptop.jpg";
import choseUs1 from "../../assets/images/1 (2).png";
import choseUs2 from "../../assets/images/2.png";
import choseUs3 from "../../assets/images/3.png";
import choseUs4 from "../../assets/images/4.png";
import choseUs5 from "../../assets/images/5.png";
import * as emailjs from "@emailjs/browser";
import { scrollToUp } from "../../utils/scrollToUp";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Contact from "./../cotact/index";

const Home = () => {
  const [loadMore, setLoadMore] = useState(false);
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const openLoadMore = () => {
    setLoadMore(!loadMore);
  };

  return (
    <section className="home_section">
      {/*=========================SECTION IMAGE  START====================*/}
      <Slider {...settings}>
        <div>
          <div style={{ backgroundImage: `url(${homeImg})` }} className="home_image G-image">
            <div className="home_image_bg"></div>
            <div className="home_body">
              <div className="G-container">
                <div className="home_text">
                  <p>
                    Welcome to MMedia Development , your premier digital marketing partner specializing in driving
                    growth for mortgage brokers, real estate agents and real estate lawyers.
                  </p>
                  <div className="home_more_btn">
                    <a href="#home_why_choose">
                      <button>More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${homeImg1})` }} className="home_image G-image">
            <div className="home_image_bg"></div>
            <div className="home_body">
              <div className="G-container">
                <div className="home_text">
                  <p>
                    {" "}
                    With our proven strategies and industry expertise, we're here to help you stand out from the
                    competition and maximize your business potential.
                  </p>
                  <div className="home_more_btn">
                    <button>More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: `url(${homeImg2})` }} className="home_image G-image">
            <div className="home_image_bg"></div>
            <div className="home_body">
              <div className="G-container">
                <div className="home_text">
                  <p>
                    SMM for real estate acts as an excellent resource for people looking to buy a house and has a
                    significant influence on every step of a buyer's decision-making journey.
                  </p>
                  <div className="home_more_btn">
                    <button>More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/*=========================SECTION IMAGE END====================*/}
      {/*=========================SECTION Contact Start====================*/}

      <div className="home_contact_us">
        <div className="home_contact_us_bg">
          <div className="G-container">
            <div className="home_contact_us_body">
              <div className="home_contact_us_title">
                <p>
                  Ready to unlock the full potential of your mortgage broker, real estate lawyer, or real estate agent
                  business?
                </p>
                <span>Contact us today to schedule a consultation.</span>
              </div>

              <div className="home_contact_us_form">
                <div className="home_contact_email">
                  <label htmlFor="">
                    <input name="text" type="email" placeholder="Enter email address" />
                    <button>SEND</button>
                  </label>
                </div>
                <div className="home_contact_call">
                  <a href="tel:+1-647-493-8100" id="home_why_choose">
                    CALL
                  </a>
                </div>

                {/* <div className="home_contact_call">
                    <a href="tel:+1-647-493-8100" id="home_why_choose">
                      CALL
                    </a>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=========================SECTION Contact END====================*/}

      {/*=========================SECTION home_why_choose start===================*/}

      <div className="home_why_choose">
        <div style={{ backgroundImage: `url(${whyChose})` }} className="home_why_choose_image G-image">
          <div className="home_why_choose_image_bg"></div>
          <div className="home_why_choose_body">
            <div className="G-container">
              <div className="home_why_choose_body_title">
                <p>Why Choose Us?</p>
              </div>
              <div className="home_why_choose_content">
                <div className="home_why_choose_items_rowLeft">
                  <div className="home_why_choose_rowLeft_item">
                    <img src={choseUs1} alt="" />
                    <p>Industry Expertise</p>
                  </div>
                  <div className="home_why_choose_rowLeft_item">
                    <img src={choseUs2} alt="" />
                    <p> Data-Driven Approach</p>
                  </div>
                </div>

                <div className="home_why_choose_items_center">
                  <div className="home_why_choose_center_item">
                    <img src={choseUs3} alt="" />
                    <p style={{ color: "gold" }}> Targeted Strategies</p>
                  </div>
                </div>

                <div className="home_why_choose_items_rowRight">
                  <div className="home_why_choose_item_rowRight">
                    <img src={choseUs4} alt="" />
                    <p>Comprehensive Services</p>
                  </div>
                  <div className="home_why_choose_item_rowRight">
                    <img src={choseUs5} alt="" />
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
        <div style={{ backgroundImage: `url(${actionpic})` }} className="media_development_description_image G-image">
          <div className="media_development_description_bg "></div>
          <div className="G-container">
            <div className="media_development_description_body">
              <div className="media_development_description_title">
                <p>Unlock Limitless Success in the Mortgage, Legal, and Real Estate Industry with Our Support</p>
              </div>
              <Link to="/contactUs">
                <div className="media_development_description_call">
                  <a href="">CALL</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*=========================SECTION media_development_description end===================*/}

      {/*=========================SECTION home_our_services START===================*/}
      <div className="home_our_services">
        <div style={{ backgroundImage: `url(${classicHouse})` }} className="home_our_services_image G-image">
          <div className="home_our_services_bg"></div>
          <div className="home_our_services_body">
            <div className="G-container">
              <div className="home_our_services_title">
                <p>Our Services</p>
              </div>
              <div className="home_our_services_content">
                <div className="home_our_services_content_rowLeft">
                  <div className="home_our_services_content_rowCenter_item_mobile">
                    <img src={services4} alt="" />
                    <p>Conversion Rate Optimization</p>
                  </div>
                  <div className="home_our_services_content_rowLeft_item">
                    <img src={services1} alt="" />
                    <p>Professional Video Production</p>
                  </div>
                  <div className="home_our_services_content_rowLeft_item">
                    <img src={services2} alt="" />
                    <p>Effective Pay Per Click Marketing</p>
                  </div>
                  <div className="home_our_services_content_rowLeft_item">
                    <img src={services3} alt="" />
                    <p>Effective Search Engine Optimization</p>
                  </div>
                </div>

                <div className="home_our_services_content_rowCenter">
                  <div className="home_our_services_content_rowCenter_item">
                    <img src={services4} alt="" />

                    <p style={{ color: "gold" }}>Conversion Rate Optimization</p>
                  </div>
                </div>

                <div
                  className={
                    !loadMore ? "home_our_services_content_rowRight" : "home_our_services_content_rowRight active"
                  }
                >
                  <div className="home_our_services_content_rowRight_item">
                    <img src={services5} alt="" />
                    <p>Strategic Social Media Marketing</p>
                  </div>
                  <div className="home_our_services_content_rowRight_item">
                    <img src={services6} alt="" />
                    <p>Professional Web Design Services</p>
                  </div>
                  <div className="home_our_services_content_rowRight_item">
                    <img src={services7} alt="" />
                    <p>SEO Content Writing</p>
                  </div>
                </div>
                <div className={!loadMore ? "load_more_services" : "load_more_services active"}>
                  <button onClick={openLoadMore}>
                    {!loadMore ? "Load More" : "Load Less"}
                    <span className="icon-circle-down load_more_services_icon"></span>
                  </button>
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
                <p>
                  Why Choose MMedia Development as your Mortgage Brokering, Real Estate Agent and Real Estate Lawyer
                  Digital Marketing Agency?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=========================SECTION home_user_question end===================*/}

      <div className="home_media_development_info">
        <div style={{ backgroundImage: `url(${group})` }} className="home_media_development_info_bg_image G-image">
          <div className="home_media_development_info_bg"></div>
          <div className="home_media_development_info_body">
            <div className="G-container">
              <div className="home_media_development_info_text">
                <div className="home_media_development_info_text_row1">
                  <p>Mission Statement:</p>
                  <p> MMedia Development  is a full-service digital marketing agency</p>
                </div>

                <p>Attract,Impress,and Convert more leads online and get results with MMedia Development .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
