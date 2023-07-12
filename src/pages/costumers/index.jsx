import React, {useEffect} from 'react';
import custumerImg from "../../assets/images/custumerImgDark.png";
import "./style.scss"
import {useInformation} from "../../hooks/useInformation";
import CostumersList from "./components/costumersList";

const Costumers = () => {
    const {costumersList} = useInformation()
    return <div className="costumers_section">
        <div style={{backgroundImage: `url(${custumerImg})`}} className="costumers_image G-image">
            <div className="costumers_bg"></div>
            <div className="G-container">
                <div className="costumers_body">
                    <div className="costumers_title">
                        <h3>Our Customers</h3>
                    </div>

                    <div className="costumers_content">
                        <div className="costumers_list">
                            {costumersList.map((item,index)=>{
                                return  <CostumersList reverse={item.reverse} key={item.id} item={item}/>
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Costumers;