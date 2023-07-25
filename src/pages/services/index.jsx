import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import "./style.scss"
import servicesLogo from "../../assets/images/home1.jpg"
import business from "../../assets/images/busines.png"

import Spoiler from "../../components/spoiler";
import img from "../../assets/images/Untitled-1-01 2.png"
import img5 from "../../assets/images/Untitled-1-03 2 (1).png"
import img6 from "../../assets/images/Untitled-1-04.png"
import img4 from "../../assets/images/Untitled-1-05.png"
import img2 from "../../assets/images/Untitled-1-06.png"
import img3 from "../../assets/images/Untitled-1-07.png"
import {useInformation} from "../../hooks/useInformation";
import img1 from "../../assets/images/Untitled-1-02 1.png";
import MyModal from "../../UI/myModal";
import ServicesItem from "../../components/servicesItem";


const Services = () => {
    const [ourServicesList, setOurServicesList] = useState([
        {
            title: 'Why Choose Our Video Production Services?',
            mobileTitle: 'Professional Video Production Services:',
            img: img,
            textNumber1: '1. Niche-Specific Scriptwriting: We understand the unique needs and messaging requirements of the mortgage brokering, real estate agent, and real estate lawyer industries. Our experienced scriptwriters specialize in crafting scripts that address the pain points, challenges, and opportunities specific to these industries. We will provide you with a customized script that highlights your expertise, key' +
                ' services, and value proposition, ensuring your videos speak directly to your target audience.',
            textNumber2: '2. Self-Filming Convenience: With our Video Production Services, you have the flexibility to film on your own schedule and in your preferred location. Armed with our expertly crafted scripts, you can capture the footage using your smartphone or chosen recording equipment. This convenience allows you to showcase your unique selling points, provide insightful tips, or share' +
                ' client success stories while maintaining a personal touch that resonates with your audience.',
            textNumber3: '3. Professional Editing and Post-Production: Once you have filmed your content, our skilled video editors take over to transform your raw footage into high-quality, professional videos. We employ industry-leading software and techniques to enhance the visual quality, optimize audio, and seamlessly merge your clips. Our editing team adds branding elements, ' +
                'graphics, and captions as needed, creating engaging videos that align with your brand aesthetics.',
            textNumber4: '4. Establish Trust and Credibility: As a mortgage broker, real estate agent, or real estate lawyer, building trust and credibility with your audience is vital. Our Video Production Services help you achieve just that. Through professional video production, you can present yourself as an authority in ' +
                'your industry, delivering valuable insights and demonstrating your expertise. This fosters trust, enhances your brand reputation, and positions you as a go-to professional in your field.',
            textNumber5: '5. Customization for Your Brand: We understand the importance of maintaining brand consistency. Our team works closely with you to ensure that the final videos align with your brand guidelines and maintain a cohesive visual identity. We incorporate your branding elements, such as logos, colors, and fonts, to create a seamless integration with your existing marketing materials. The result is a' +
                ' set of videos that reinforce your brand\'s unique identity and resonate with your target audience.',
            state: '',
            mobileText: 'At MMedia Development Group, we offer Professional Video Production Services tailored specifically for mortgage brokers, real estate agents, and real estate lawyers. Our unique approach empowers you to showcase your expertise through video content that resonates with your target audience. With our expert scriptwriting and video editing, we will help you communicate your value proposition effectively, all while leveraging the convenience of self-filming.',
            id: 1
        },
        {
            title: 'Why Choose Our Pay Per Click Marketing Services?',
            mobileTitle: 'Effective Pay Per Click (PPC) Marketing:',
            mobileText: 'At MMedia Development Group, we offer Effective Pay Per Click (PPC) Marketing services specifically designed for mortgage brokers, real estate agents, and real estate lawyers. Our expertise in leveraging PPC advertising empowers you to position your brand in front of high-converting clients, increase ' +
                'search engine visibility, and achieve immediate results in the digital landscape.',
            img: img2,
            textNumber1: '1. Fast and Immediate Results: In the competitive landscape of mortgage brokering, real estate, and legal services, time is of the essence. Our PPC Marketing services provide you with fast and immediate results. By strategically placing your ads on search engines and relevant platforms, we can drive' +
                ' targeted traffic to your website or landing pages, generating leads and conversions quickly.',
            textNumber2: '2. High-Converting Client Targeting: We understand that reaching the right audience is essential for success. Through our PPC campaigns, we will implement advanced targeting techniques to ensure your ads are seen by individuals actively seeking mortgage services, real estate assistance, or legal counsel. By focusing on high-converting client targeting, we maximize ' +
                'your chances of connecting with potential clients who are ready to take action',
            textNumber3: '3. Enhanced Search Engine Visibility: Our PPC Marketing strategies go hand in hand with improving your search engine visibility. By carefully selecting keywords, optimizing ad copy, and leveraging best practices, we will enhance your presence on search engine results pages (SERPs). This increased visibility not only boosts your brand\'s ' +
                'credibility but also positions you ahead of your competition, driving more qualified leads to your website.',
            textNumber4: '4. Customized Ad Campaigns: We recognize that each business has unique goals and target audiences. Our team will work closely with you to understand your specific requirements and develop customized ad campaigns that align with your brand and objectives. Whether you need ads for mortgage services, real estate listings, or legal services, ' +
                'we will create compelling and persuasive ad copy that entices potential clients to click and convert.',
            textNumber5: '5. Continuous Monitoring and Optimization: PPC campaigns require constant monitoring and optimization to deliver optimal results. Our team will closely monitor your campaigns, analyze performance metrics, and make data-driven adjustments to ensure maximum return on investment (ROI). We will refine your targeting parameters, optimize your ad spend, and ' +
                'continuously improve your campaign performance, ensuring you get the best results possible.',
            reverse: true,
            state: '',

            id: 2
        },
        {
            title: 'Why Choose Our SEO Services?',
            mobileText: 'At MMedia Development Group, we offer Effective Search Engine Optimization (SEO) services specifically designed for mortgage brokers, real estate agents, and real estate lawyers. We understand the importance of a strong online presence in today\'s digital world, and our expert team is dedicated to helping you optimize your' +
                ' existing webpage to expand your online presence, increase leads, and grow your business',
            mobileTitle: "Effective Search Engine Optimization (SEO) Services:",
            img: img4,
            textNumber1: '1. Customized SEO Strategies: We recognize that every business is unique, with specific goals and target audiences. Our SEO services are customized to suit the needs of mortgage brokers, real estate agents, and real estate lawyers. We will conduct a comprehensive analysis of your website, identifying areas for improvement and developing a tailored SEO strategy that aligns with your objectives. From optimizing on-page elements to improving site structure and navigation, ' +
                'we will ensure that search engines recognize and rank your webpages for relevant keywords.',
            textNumber2: '2. Expanded Online Presence: In the competitive landscape of mortgage brokering, real estate, and legal services, a strong online presence is crucial for success. Our SEO services are designed to expand your visibility across search engines, directories, and online platforms. We will optimize your website content, meta tags, and other crucial elements to improve your search engine rankings. This increased visibility not only attracts more organic traffic ' +
                'but also enhances your brand\'s credibility and authority in your industry.',
            textNumber3: '3. Increased Leads and Conversions: Ranking high on search engine results pages (SERPs) is just the first step. Our SEO strategies are focused on driving qualified leads to your website. By optimizing your webpages for relevant keywords and implementing conversion-focused techniques, we will attract visitors who are actively seeking mortgage services, real estate assistance, or legal counsel. With targeted traffic and optimized user experience, your website becomes a ' +
                'powerful lead generation tool, increasing the chances of converting visitors into clients.',
            textNumber4: '4. Content Optimization and Marketing: Engaging and valuable content is a crucial element of SEO. Our team of skilled content marketers will optimize your website content, ensuring it is relevant, informative, and engaging to both search engines and your target audience. We will conduct keyword research, develop content strategies, and create compelling blog posts, articles, and landing pages that position you as a trusted authority in your industry. This content optimization and ' +
                'marketing approach not only boosts your SEO but also enhances your overall brand reputation.\n',
            textNumber5: '5. Ongoing Performance Monitoring and Refinement: SEO is an ongoing process that requires constant monitoring and refinement. Our team will continuously monitor the performance of your SEO efforts, analyzing metrics such as organic traffic, keyword rankings, and user engagement. With this data in hand, we will make data-driven adjustments to your strategy, ensuring that your SEO campaigns are constantly optimized for maximum results. We will keep you informed with regular performance reports and ' +
                'provide recommendations to further enhance your online visibility and conversion rates.',
            state: '',

            id: 3
        },
        {
            title: 'Why Choose Our Conversion Rate Optimization Service?',
            mobileText: 'At MMedia Development Group, we specialize in Conversion Rate Optimization (CRO) services that help mortgage brokers, real estate agents, and real estate lawyers reach new levels of success. We understand that driving traffic to your website is only part of the equation. To maximize your business\'s growth and revenue potential, it is crucial to convert those visitors into valuable leads and paying clients. Our expert team will work closely with you to develop a solid CRO' +
                ' marketing strategy that is expertly tailored to your unique business requirements.',
            mobileTitle: 'Conversion Rate Optimization (CRO) Services:',
            img: img5,
            textNumber1: '1. Tailored CRO Strategies: We recognize that every business has unique goals, target audiences, and conversion challenges. Our CRO services are customized to suit the needs of mortgage brokers, real estate agents, and real estate lawyers. Through in-depth analysis and research, we will identify areas of improvement in your conversion funnel and develop a tailored strategy to optimize each stage. From landing page optimization to call-to-action enhancements, ' +
                'we will ensure your website is designed to drive conversions and maximize your return on investment (ROI).',
            textNumber2: '2. Expert Data Analysis: Data-driven decision-making is at the core of our CRO approach. Our team of experienced analysts will conduct thorough data analysis to gain insights into user behavior, identify bottlenecks, and uncover opportunities for improvement. By tracking and measuring key performance indicators (KPIs), such as conversion rates, bounce rates, and click-through rates, we will' +
                ' provide actionable recommendations to optimize your website and improve overall conversion metrics.',
            textNumber3: '3. User Experience (UX) Optimization: Providing a seamless and user-friendly experience is key to increasing conversions. Our CRO services include comprehensive user experience (UX) optimization, where we analyze your website\'s usability, navigation, and overall design to ensure it aligns with best practices. By enhancing the user journey, streamlining forms and checkout processes, and addressing any friction points, we will create an' +
                ' intuitive and engaging website experience that encourages visitors to take desired actions.',
            textNumber4: '4. A/B Testing and Experimentation: We believe in continuous improvement through A/B testing and experimentation. Our CRO agency will conduct rigorous testing to evaluate different variations of your website elements, such as headlines, images, call-to-action buttons, and page layouts. By systematically testing and measuring the impact of these variations, we will identify the most effective elements that drive conversions. This iterative' +
                ' approach allows us to fine-tune your website and constantly optimize its performance.',
            textNumber5: '5. Maximizing ROI and Business Growth: Ultimately, our Conversion Rate Optimization services are focused on maximizing your ROI and driving business growth. By optimizing your conversion funnel, we will help you convert a higher percentage of website visitors into leads and clients. This translates into increased revenue, higher customer acquisition rates, and a stronger competitive edge. With our expertise in CRO,' +
                ' you can expect tangible results that have a significant impact on your bottom line.',
            reverse: true,
            state: '',

            id: 4
        },

        {
            title: 'Why Choose Our Social Media Marketing Services?',
            mobileTitle: 'Strategic Social Media Marketing:',
            mobileText: 'At MMedia Development Group, we offer Strategic Social Media Marketing (SMM) services specifically designed for mortgage brokers, real estate agents, and real estate lawyers. Our expertise in leveraging social media platforms empowers you to build brand awareness, forge meaningful connections' +
                ' with your clients, and drive business growth in the digital age.',

            img: img1,
            textNumber1: '1. Targeted Brand Awareness: We understand the importance of establishing a strong brand presence in the highly competitive mortgage brokering, real estate agent, and real estate lawyer industries. Through our Social Media Marketing services, we will create targeted campaigns that increase your brand visibility among your ideal target audience. We will craft compelling content that highlights your expertise,' +
                ' showcases your unique selling points, and captures the attention of potential clients.',
            textNumber2: '2. Engaging Content Strategy: Our team of skilled social media marketers excels at creating engaging content that resonates with your target audience. We will develop a content strategy tailored to your industry, delivering valuable information, industry insights, tips, and trends that position you as a trusted authority. By consistently providing relevant and' +
                ' meaningful content, we will keep your audience engaged, nurtured, and primed for conversion.',
            textNumber3: '3. Meaningful Client Connections: Social media platforms offer invaluable opportunities to connect with your clients on a personal level. We will assist you in fostering meaningful relationships by engaging in conversations, responding to inquiries, and addressing client concerns promptly. Through strategic community management, we will build trust and loyalty, ' +
                'ensuring that your clients feel valued and appreciated, resulting in repeat business and positive referrals.',
            textNumber4: '4. Targeted Advertising Campaigns: Our Social Media Marketing services include targeted advertising campaigns that reach your ideal clients with precision. We will utilize advanced targeting techniques to identify and reach individuals actively seeking mortgage services, real estate assistance, or legal counsel. By optimizing your ad spend and refining your targeting parameters, we will ' +
                'ensure that your ads are seen by the most relevant audience, maximizing your return on investment.',
            textNumber5: '5. Analytics and Performance Tracking: We believe in data-driven strategies. Our team will monitor and analyze the performance of your social media campaigns, providing you with valuable insights into audience engagement, campaign reach, and conversion rates. With these metrics in hand, we can continuously refine your strategy, optimize your campaigns, and deliver measurable results that align with your business goals.',
            state: '',

            id: 5
        },
        {
            title: 'Why Choose Our Web Design Services?',
            mobileTitle: 'Professional Web Design Services:',
            mobileText: 'At MMedia Development Group, we offer Professional Web Design Services specifically tailored for mortgage brokers, real estate agents, and real estate lawyers. We understand the importance of a strong online presence in today\'s digital landscape, and our expert team is dedicated to helping you leverage your existing business by building a visually stunning and highly functional website. From design and development to ' +
                'search engine optimization and ongoing site maintenance, we have you covered.',
            img: img3,
            textNumber1: '1. Tailored Websites for Your Industry: We understand the unique needs and requirements of the mortgage brokering, real estate agent, and real estate lawyer industries. Our team of experienced web designers will collaborate with you to create a website that reflects your brand identity and effectively communicates your expertise and services. We will design a user-friendly interface that guides visitors through your ' +
                'site, showcasing your listings, services, testimonials, and other essential information.',
            textNumber2: '2. Responsive and Mobile-Friendly Design: With the majority of internet users accessing websites through mobile devices, having a responsive and mobile-friendly design is crucial. Our web design services ensure that your website looks stunning and functions seamlessly across all devices and screen sizes. Whether your clients are browsing on a desktop computer, tablet, or smartphone, they' +
                ' will have a smooth and engaging user experience, enhancing their interaction with your brand.',
            textNumber3: '3. Search Engine Optimization (SEO) Integration: A beautiful website is only effective if it can be found by potential clients. Our web design services incorporate search engine optimization techniques to improve your website\'s visibility in search engine rankings. We will optimize your site structure, meta tags, content, and other crucial elements to ensure that search engines recognize and rank your website for relevant ' +
                'keywords. This helps drive organic traffic and increases the chances of attracting qualified leads.',
            textNumber4: '4. Ongoing Site Maintenance and Support: Building a website is just the beginning. To ensure your website remains up-to-date, secure, and optimized, we provide ongoing site maintenance and support. Our team will handle regular updates, security patches, and backups, ensuring your website is protected from vulnerabilities and potential issues. We will also provide technical support and address any' +
                ' website-related concerns promptly, so you can focus on your core business activities.',
            textNumber5: '5. Seamless Integration with Existing Systems: We understand that you may already have established systems in place for your mortgage brokering, real estate agency, or legal practice. Our web design services seamlessly integrate with your existing systems, such as client management tools, CRM platforms, and lead generation systems. This ensures a cohesive workflow ' +
                'and allows for streamlined processes, maximizing efficiency and productivity.',
            reverse: true,
            state: '',
            id: 6
        },

        {
            mobileTitle: 'SEO Content Writing Services:\n',
            mobileText: 'At MMedia Development Group, we offer comprehensive SEO Content Writing Services specifically designed for mortgage brokers, real estate agents, and real estate lawyers. We understand the power of compelling and optimized content in driving organic traffic, engaging potential clients, and establishing your brand as an industry authority. Our content marketing agency handles all aspects of SEO content creation, from keyword research and content strategy development to content writing and marketing, helping you ' +
                'reach untapped demographics and build a strong reputation in the digital landscape.',
            title: 'Why Choose Our SEO Content Writing Services?',
            img: img6,
            textNumber1: '1. Expert Keyword Research: Effective SEO content begins with thorough keyword research. Our experienced team will identify the most relevant and high-converting keywords for your industry, focusing on mortgage brokering, real estate, and legal services. By strategically incorporating these keywords into your content, we will improve your website\'s visibility on search engine results pages (SERPs),' +
                'attracting targeted traffic from potential clients actively searching for your services.',
            textNumber2: '2. Content Strategy Development: A well-planned content strategy is essential for success in SEO. Our content marketing experts will work closely with you to develop a comprehensive content strategy that aligns with your business goals and target audience. Whether it is informative blog posts, engaging articles, or persuasive landing pages, we will create a roadmap that ensures your content ' +
                'meets the needs of your audience, drives engagement, and supports your overall marketing objectives.',
            textNumber3: '3. Engaging and Optimized Content Writing: Our team of skilled content writers specializes in crafting engaging and optimized content that resonates with your target audience. We will develop captivating headlines, informative blog posts, and persuasive website copy that not only captures the attention of potential clients but also ranks well on search engines. By seamlessly integrating relevant keywords and implementing best SEO practices, we will ensure your content ' +
                'performs well in organic search results, driving organic traffic and increasing your online visibility.',
            textNumber4: '4. Content Marketing at the Backend: Creating great content is only part of the equation. Our content marketing agency will also assist you with content distribution and promotion. We will leverage various channels, such as social media, email marketing, and content syndication, to amplify your content\'s reach and attract a wider audience. By engaging with your target demographics across different platforms, we will help you build brand awareness,' +
                ' foster meaningful connections, and establish your reputation as an industry leader.',
            textNumber5: '5. Reaching Untapped Demographics: Our SEO content writing services go beyond traditional marketing approaches. We will help you identify and reach untapped demographics within the mortgage brokering, real estate, and legal sectors. By understanding the unique needs and preferences of these demographics, we will tailor your content to resonate with their interests and challenges, positioning you as the go-to expert in your field. This targeted approach enhances ' +
                'your brand\'s visibility and attracts a diverse range of potential clients.',
            state: '',

            id: 7
        },
    ])
    const [whyChooseList, setWhyChooseList] = useState([
        {
            title: "1. Industry Expertise:",
            text: '1. Industry Expertise: With an extensive track record of working with professionals in the mortgage and real estate industry, we bring valuable insights and knowledge to the table. Our team is well-versed in the intricacies of the market, including the latest regulations, trends, and industry best practices. This expertise allows us to craft tailored strategies ' +
                'that address the unique challenges and opportunities you face, giving you a competitive edge.',
            id: 1,
            state: ''
        },
        {
            title: "2. Targeted Strategies: ",
            text: '2. Targeted Strategies: We understand that effective marketing is all about reaching the right audience at the right time. Our team takes the time to understand your business goals, target audience, and local market dynamics. Armed with this information, we develop customized marketing strategies that resonate with your potential clients, driving qualified leads to your business. Whether you are looking to attract first-time homebuyers, expand your referral network,' +
                ' or boost your online presence, our targeted approach ensures your message reaches the right people.',
            id: 2,
            state: ''

        },
        {
            title: "3. Comprehensive Services: ",
            text: '3. Comprehensive Services: As a full-service digital marketing agency, we provide a comprehensive suite of services to meet your specific needs. From search engine optimization (SEO) to social media marketing, pay-per-click (PPC) advertising to content creation, we have you covered. Our integrated approach ensures that all elements of your digital marketing strategy work together seamlessly, amplifying your reach and impact. We stay on top of the latest ' +
                'marketing trends and technologies, so you can focus on what you do best while we handle the rest.',
            id: 3,
            state: ''

        },
        {
            title: "4. Data-Driven Approach:  ",
            text: '4. Data-Driven Approach: We believe that data holds the key to unlocking your business\'s true potential. Our team utilizes advanced analytics tools to track and measure the performance of your campaigns. By analyzing key metrics and consumer behavior, we gain valuable insights into what\'s working and what needs improvement. This data-driven approach enables us to continuously optimize your marketing efforts, ' +
                'ensuring that every dollar you invest generates maximum return on investment (ROI).',
            id: 4,
            state: ''

        },
        {
            title: "5. Transparent Communication: ",
            text: '5. Transparent Communication: We value open and honest communication with our clients. Throughout our partnership, we keep you informed about the progress of your campaigns, providing regular updates and detailed reports. We believe that collaboration is the key to success, so we encourage your feedback and input every step of the way. Our dedicated team is readily available to address any questions or concerns' +
                ' you may have, ensuring that you have complete visibility into the work we\'re doing on your behalf.',
            id: 5,
            state: ''

        }
    ])

    const [checked, setChecked] = useState(-1)
    const [checkedWhyChoose, setCheckedWhyChoose] = useState(-1)
    const [activeSpoiler, setActiveSpoiler] = useState(null)

    const ref = useRef()
    const [openModal, setOpenModal] = useState(false)
    const [servicesItem, setServicesItem] = useState({
        title: '',
        mobileTitle: '',
        mobileText: '',
        img: null,
        textNumber1: '',
        textNumber2: '',
        textNumber3: '',
        textNumber4: '',
        textNumber5: '',
        state: '',
        id: 0
    })


    const handleClick = (index, item) => {
        setOpenModal(!openModal)
        if (openModal) {
            document.body.classList.remove('G-hidden')
        } else {
            document.body.classList.add('G-hidden')
        }
        if (!openModal && item) {
            setServicesItem(item)
            if (!ourServicesList[index].state && checked === -1) {
                setChecked(index)
                ourServicesList[index].state = 'active'
                setOurServicesList([...ourServicesList])
            }
            if (checked === index && ourServicesList[index].state) {
                ourServicesList[index].state = ''
                setOurServicesList([...ourServicesList])
                setChecked(-1)
            }
            if (!ourServicesList[index].state && checked !== index) {
                ourServicesList[checked].state = ''
                ourServicesList[index].state = 'active'
                setOurServicesList([...ourServicesList])
                setChecked(index)
            }
        }
    };
    const openSpoiler = (index) => {
        if (index === activeSpoiler) {
            setActiveSpoiler(null)
        } else {
            setActiveSpoiler(index)
        }
        // if (!whyChooseList[index].state && checkedWhyChoose === -1) {
        //     setCheckedWhyChoose(index)
        //     whyChooseList[index].state = 'active'
        //     setWhyChooseList([...whyChooseList])
        // }
        // if (checkedWhyChoose === index && whyChooseList[index].state) {
        //     whyChooseList[index].state = ''
        //     setWhyChooseList([...whyChooseList])
        //     setCheckedWhyChoose(-1)
        // }
        //
        // if (!whyChooseList[index].state && checkedWhyChoose !== index) {
        //     whyChooseList[checkedWhyChoose].state = ''
        //     whyChooseList[index].state = 'active'
        //     setWhyChooseList([...whyChooseList])
        //     setCheckedWhyChoose(index)
        // }
    }

    return <>
        <section className="services_section">
            <div style={{backgroundImage: `url(${business})`}} className='our_services_image G-image'>
                <div className="our_services_bg"></div>
                <div className='G-container'>
                    <div className="our_services_title">
                        <h3>Our Services</h3>
                        <p>Together, we will dive deeper into your goals, challenges, and opportunities. Our team will
                            develop a customized digital marketing strategy that aligns with your vision and helps you
                            achieve sustainable growth. Let's embark on this exciting journey and take your business to
                            new
                            heights.</p>
                    </div>
                    <div className="our_services_body">
                        {ourServicesList.length ?
                            <>
                                {ourServicesList.map((item, index) => {
                                    return <ServicesItem
                                        item={item}
                                        index={index}
                                        img={item.img}
                                        title={item.title}
                                        text={item}
                                        reverse={item.reverse}
                                        handleClick={handleClick}
                                    />

                                })}

                            </>

                            : null}


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
                        </div>
                        <div className="services_choose_us_spoiler">
                            {whyChooseList.length ? <>
                                {whyChooseList.map((item, index) => {
                                    return <Spoiler
                                        item={item}
                                        index={index}
                                        isActive={index === activeSpoiler}
                                        openSpoiler={openSpoiler}
                                    />
                                })}
                            </> : null}

                        </div>
                    </div>
                </div>
            </div>


        </section>

        <MyModal
            onClose={handleClick}
            active={openModal}
            item={servicesItem}/>

    </>
};

export default Services;