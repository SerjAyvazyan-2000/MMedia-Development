import "./style.scss"
import React, {useState} from 'react';

const SpoilerImg = ({item,index,toggleSpoiler}) => {
    let elementState = item.state ?  " active " : ''
    return <div className="spoiler_img_block">
        {item.reverse ? <>
                <div onClick={()=>toggleSpoiler(index)} className={"spoiler_img_item"}>

                    <div className="spoiler__block_text">
                        <p>  {item.title}</p>
                    </div>
                    <div className="spoiler_block_img">
                        <img src={item.img} alt=""/>
                    </div>
                    <span className={  'icon-circle-down' + elementState }></span>


                </div>
                <div onClick={()=>toggleSpoiler(index)} className={ "spoiler_img_text" + elementState }>
                    <p>{item.textNumber1}</p>
                    <p>{item.textNumber2}</p>
                    <p>{item.textNumber3}</p>
                    <p>{item.textNumber4}</p>
                    <p>{item.textNumber5}</p>
                </div>


            </> :
            <>
                <div onClick={()=>toggleSpoiler(index)} className={"spoiler_img_item"}>
                    <span className={  'icon-circle-down' + elementState }></span>
                    <div className="spoiler_block_img">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="spoiler__block_text">
                        <p>  {item.title}</p>
                    </div>
                </div>


                <div onClick={()=>toggleSpoiler(index)} className={ "spoiler_img_text" + elementState }>
                    <p>{item.textNumber1}</p>
                    <p>{item.textNumber2}</p>
                    <p>{item.textNumber3}</p>
                    <p>{item.textNumber4}</p>
                    <p>{item.textNumber5}</p>

                </div>
            </>


        }


    </div>
}
export default SpoilerImg