import React, {useState} from 'react';
import "./style.scss"
import servicesLogo from "../../assets/images/home1.jpg"
import business from "../../assets/images/busines.png"

import Spoiler from "../../components/spoiler";
import SpoilerImg from '../../components/spoilerimg';
import img1 from "../../assets/images/Untitled-1-01 2.png"
import img2 from "../../assets/images/Untitled-1-03 2 (1).png"
import img3 from "../../assets/images/Untitled-1-04.png"
import img4 from "../../assets/images/Untitled-1-05.png"
import img5 from "../../assets/images/Untitled-1-06.png"
import img6 from "../../assets/images/Untitled-1-07.png"
import {useInformation} from "../../hooks/useInformation";
import img from "../../assets/images/Untitled-1-02 1.png";


const Services = () => {
    const [ourServicesList, setOurServicesList] = useState([
        {
            title: 'Why Choose Our Video Production Services?',
            img: img,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your' +
                ' expertise, showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and meaningful' +
                ' content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ensuring ' +
                'that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ensure' +
                ' that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy,' +
                ' optimize your campaigns, and deliver measurable results that align with your business goals.',
            state: '',
            id: 1
        },
        {
            title: 'Why Choose Our Pay Per Click Marketing Services?',
            img: img1,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your' +
                ' expertise, showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and meaningful' +
                ' content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ensuring ' +
                'that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ensure' +
                ' that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy,' +
                ' optimize your campaigns, and deliver measurable results that align with your business goals.',
            reverse: true,
            state: '',

            id: 2
        },
        {
            title: 'Why Choose Our SEO Services?',
            img: img2,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your' +
                ' expertise, showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and meaningful' +
                ' content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ensuring ' +
                'that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ensure' +
                ' that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy,' +
                ' optimize your campaigns, and deliver measurable results that align with your business goals.',
            state: '',

            id: 3
        },

        {
            title: 'Why Choose Our Conversion Rate Optimization Service?',
            img: img3,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your' +
                ' expertise, showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and meaningful' +
                ' content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ensuring ' +
                'that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ensure' +
                ' that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy,' +
                ' optimize your campaigns, and deliver measurable results that align with your business goals.',
            reverse: true,
            state: '',

            id: 4
        },

        {
            title: 'Why Choose Our Social Media Marketing Services?',
            img: img4,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your' +
                ' expertise, showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and meaningful' +
                ' content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ensuring ' +
                'that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ensure' +
                ' that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy,' +
                ' optimize your campaigns, and deliver measurable results that align with your business goals.',
            state: '',

            id: 5
        },
        {
            title: 'Why Choose Our Web Design Services?',
            img: img5,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your' +
                ' expertise, showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and meaningful' +
                ' content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ensuring ' +
                'that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ensure' +
                ' that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy,' +
                ' optimize your campaigns, and deliver measurable results that align with your business goals.',
            reverse: true,
            state: '',

            id: 6
        },

        {
            title: 'Why Choose Our SEO Content Writing Services?',
            img: img6,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your' +
                ' expertise, showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and meaningful' +
                ' content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ensuring ' +
                'that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ensure' +
                ' that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy,' +
                ' optimize your campaigns, and deliver measurable results that align with your business goals.',
            state: '',

            id: 7
        },
    ])
    const [checked, setChecked] = useState(-1)

    const [showSpoiler, setShowSpoiler] = useState(false);


    const toggleSpoiler = (index) => {
        if (!ourServicesList[index].state && checked === -1) {
                setChecked(index)
                ourServicesList[index].state = 'active'
                setOurServicesList([...ourServicesList])
        }
        if(checked === index && ourServicesList[index].state){
            ourServicesList[index].state = ''
            setOurServicesList([...ourServicesList])
            setChecked(-1)

        }

        if(!ourServicesList[index].state && checked !== index ){
            ourServicesList[checked].state = ''
            ourServicesList[index].state = 'active'
            setOurServicesList([...ourServicesList])
            setChecked(index)
        }





    };
    const Compare = (index) => {
        if(index !== checked){
            ourServicesList[checked].state = ''
            ourServicesList[index].state = 'active'
            setOurServicesList([...ourServicesList])


        }
    }

    return <section className="services_section">
        <div style={{backgroundImage: `url(${business})`}} className='our_services_image G-image'>
            <div className="our_services_bg"></div>
            <div className='G-container'>
                <div className="our_services_title">
                    <h3>Our Services</h3>
                    <p>Together, we will dive deeper into your goals, challenges, and opportunities. Our team will
                        develop a customized digital marketing strategy that aligns with your vision and helps you
                        achieve sustainable growth. Let's embark on this exciting journey and take your business to new
                        heights.</p>
                </div>
                <div className="our_services_body">
                    {ourServicesList.map((item, index) => {
                        return <SpoilerImg
                            item={item}
                            index={index}
                            img={item.img}
                            title={item.title}
                            text={item}
                            reverse={item.reverse}
                            showSpoiler={showSpoiler}
                            toggleSpoiler={toggleSpoiler}
                        />

                    })}


                </div>
            </div>
        </div>

        <div style={{backgroundImage: `url(${servicesLogo})`}} className="services_choose_us_image G-image">
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
            </div>
        </div>


    </section>
};

export default Services;