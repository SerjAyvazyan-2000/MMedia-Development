import React, { useState } from 'react';
import "./style.scss"
const Spoiler = ({item,openSpoiler,index}) => {
    let elementState = item.state ?  " active " : ''

    return<>
        <div className="services_spoiler_item">
                <div  className="services_spoiler_title_content active">
                    <div onClick={()=>openSpoiler(index)} className= { "services_spoiler_title"} >
                        <span className= {'icon-circle-down' + elementState}></span>
                        <p>{item.title}</p>
                    </div>
                    <div onClick={()=>openSpoiler(index)} className= { 'services_spoiler_title_text' + elementState }>
                        <p>
                            {item.text}
                        </p>
                    </div>
                </div>
        </div>
        </>


};

export default Spoiler;