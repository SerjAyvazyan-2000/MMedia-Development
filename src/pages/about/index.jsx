import React from 'react';
import aboutLogo from "../../assets/images/home1.jpg"
import "./style.scss"

const About = () => {
    return <section className="about_section">
        <div style={{backgroundImage: `url(${aboutLogo})`}} className="about_image G-image">
            <div className="about_bg"></div>
            <div className="G-container">
                <div className="about_body">
                    <div className="about_title">
                        <h3>About us!</h3>
                        <span>From Real Estate Paralegal to Strategic Role in Digital</span>
                    </div>

                    <div className="about_content">
                        <div className="about_content_text">
                            <div className="about_content_text_item">
                                <span>A long story short:</span>
                                <p>
                                    Get to know Mauricio Moreira, the CEO of MMedia Development Group. A real
                                    professional
                                    who nowadays is adding a special touch to help businesses thrive in today's
                                    competitive
                                    digital world thanks to his more than 10 years of experience in the real estate
                                    sector
                                    as a
                                    Real Estate Paralegal and Mortgage Broker, as well as his skills in digital
                                    marketing.
                                </p>
                            </div>
                            <div className="about_content_text_item">
                                <span>  But from where he started?</span>
                                <p>
                                    During his working years as a real estate paralegal, he has handled challenging
                                    legal
                                    situations while ensuring that clients' transactions go smoothly.
                                    He was creating a strong bridge between people and businesses in obtaining finance
                                    for
                                    their ideal residences as a mortgage broker. The practical knowledge that he has
                                    gained
                                    from his experience has helped him understand the potential and
                                    difficulties that mortgage brokers, real estate agents, and real estate lawyers
                                    encounter.
                                </p>
                            </div>
                        </div>

                        <div className="about_content_description">
                            <div className="about_content_description_item">
                                <h3>But then something changed and he understood that it was time to
                                    <span>BUILD</span> marketing for those who are building the <span>BUILDINGS</span>.
                                    And
                                    it was a beginning of a long journey.</h3>
                            </div>
                            <div className="about_content_description_item">
                                <p>
                                    His passion for digital marketing led him to establish MMedia Development Group,
                                    where
                                    he has merged his extensive industry knowledge with cutting-edge marketing
                                    strategies.
                                    His knowledge and background about real estate and mortgage sectors helped
                                    him to craft tailored digital marketing solutions that resonate with exact target
                                    audience.
                                </p>
                            </div>
                        </div>


                        <div className="about_content_media_recurse">
                            <div className="about_content_media_recurse_title">
                                <p>What can you expect from Mauricio Moreira and MMedia Development Group?</p>
                            </div>
                            <div className="about_content_media_recurse_content">
                                <li>
                                    Our CEO and Founder knows all the pros and cons of industry, allowing him to provide
                                    you with effective strategies that drive results.
                                </li>

                                <li>
                                    He believes in the power of personalized service and building strong relationships
                                    with clients. He takes the time to understand your unique goals, challenges, and
                                    target audience, allowing him to develop customized strategies that align with your
                                    business objectives.
                                </li>
                                <li>
                                    Our team is committed to staying at the forefront of the ever-evolving digital
                                    marketing landscape.
                                </li>
                                <li>
                                    We constantly refine our skills, leverage the latest tools and technologies, and
                                    employ data-driven strategies to optimize your online presence.
                                </li>
                                <li>
                                    By partnering with MMedia Development Group, you gain access to a team of experts
                                    who are passionate about helping you grow your business, increase leads, and achieve
                                    remarkable success.
                                </li>
                            </div>
                        </div>

                        <div className="about_content_mauricio_info">
                            <div className="about_content_mauricio_info_title">
                                <h3><span>2</span>words from Mauricio </h3>
                            </div>
                            <div className="about_content_mauricio_content">
                                <p>
                                    I invite you to reach out and schedule a consultation to discuss your digital
                                    marketing needs. Let's work together to leverage my industry expertise and digital
                                    marketing prowess to elevate your brand and drive your business forward.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
};

export default About;