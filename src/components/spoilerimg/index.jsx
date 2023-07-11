import "./style.scss"
import React, { useState } from 'react';

const SpoilerImg = ({title,text,reverse,img}) => {
    const [showSpoiler, setShowSpoiler] = useState(false);
    const [active,setActive] = useState('')

    const toggleSpoiler = () => {
        setActive("active");
        
        if(active){
            setActive('') 
        }
    };


    return <div className="spoiler_img_block">
        {reverse ?  <>
                    <div onClick={toggleSpoiler} className= { "spoiler_img_item"} >
                       
                            <div className="spoiler__block_text">
                             <p>  {title}</p>
                            </div>
                            <div className="spoiler_block_img">
                                <img src={img} alt="" />
                            </div>
                            <span className= { `icon-circle-down ${active}`}></span>

                            
                    </div>
                    <div onClick={toggleSpoiler} className= { `spoiler_img_text ${active}`}>
                        <p>{text}</p>
                    </div>
        </> : 
         <>
                 <div onClick={toggleSpoiler} className= { "spoiler_img_item"} >
        <span className= { `icon-circle-down ${active}`}></span>
            <div className="spoiler_block_img">
                <img src={img} alt="" />
            </div>
            <div className="spoiler__block_text">
            <p>  {title}</p>
            </div>
    </div>
         


         <div onClick={toggleSpoiler} className= {  `spoiler_img_text ${active}`}>
         <p>{text}</p>
                    </div>
         </>

        
        }
           


                    
    </div>
}
export default SpoilerImg