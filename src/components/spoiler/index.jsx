import React, { useState } from 'react';
import "./style.scss"
const Spoiler = ({item,openSpoiler,index}) => {
    const [showSpoiler, setShowSpoiler] = useState(false);

    const toggleSpoiler = () => {
        setShowSpoiler(!showSpoiler);
    };


    return<>
        <div className="services_spoiler_item">
                <div  className="services_spoiler_title_content active">
                    <div onClick={()=>openSpoiler(index)} className= { "services_spoiler_title"} >
                        <span className= { !showSpoiler ? "icon-circle-down" : "icon-circle-down  active"}></span>
                        <p>{item.title}</p>
                        <i className={!showSpoiler ? "icon-fa-solid_question" : "icon-Vector-3"}></i>
                    </div>
                    <div onClick={()=>openSpoiler(index)} className= { !showSpoiler ? "services_spoiler_title_text" : "services_spoiler_title_text active"}>
                        <p>
                            {item.text}
                        </p>
                    </div>
                </div>
        </div>
        </>


};

export default Spoiler;