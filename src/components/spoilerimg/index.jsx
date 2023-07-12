import "./style.scss"
import React, {useState} from 'react';

const SpoilerImg = ({title, text, reverse, img,index}) => {
    const [showSpoiler, setShowSpoiler] = useState(false);
    const [active, setActive] = useState('')
    const [indexState,setIndexState ] = useState(-1)


    const toggleSpoiler = () => {
        setShowSpoiler(!showSpoiler)

    };


    return <div className="spoiler_img_block">
        {reverse ? <>
                <div onClick={()=>toggleSpoiler(index)} className={"spoiler_img_item"}>

                    <div className="spoiler__block_text">
                        <p>  {title}</p>
                    </div>
                    <div className="spoiler_block_img">
                        <img src={img} alt=""/>
                    </div>
                    <span className={ !showSpoiler   ? "icon-circle-down" : "icon-circle-down active"}></span>


                </div>
                <div onClick={toggleSpoiler} className={!showSpoiler   ? "spoiler_img_text" : "spoiler_img_text active"}>
                    <p>{text.textNumber1}</p>
                    <p>{text.textNumber2}</p>
                    <p>{text.textNumber3}</p>
                    <p>{text.textNumber4}</p>
                    <p>{text.textNumber5}</p>
                </div>


            </> :
            <>
                <div onClick={toggleSpoiler} className={"spoiler_img_item"}>
                    <span className={ !showSpoiler   ? "icon-circle-down" : "icon-circle-down active"}></span>
                    <div className="spoiler_block_img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="spoiler__block_text">
                        <p>  {title}</p>
                    </div>
                </div>


                <div onClick={toggleSpoiler} className={!showSpoiler   ? "spoiler_img_text" : "spoiler_img_text active"}>
                    <p>{text.textNumber1}</p>
                    <p>{text.textNumber2}</p>
                    <p>{text.textNumber3}</p>
                    <p>{text.textNumber4}</p>
                    <p>{text.textNumber5}</p>

                </div>
            </>


        }


    </div>
}
export default SpoilerImg