import React from 'react';
import "./style.scss"
const CostumersList = ({item,reverse}) => {
    return <>
        {reverse ?
            <>
                <div className="costumers_item">

                    <div className="costumers_item_img">
                        <img src={item.img} alt=""/>
                    </div>

                    <div className="costumers_item_title">
                        <p>{item.title}</p>
                    </div>


                </div>

            </>


            :  <>

                <div className="costumers_item">

                    <div className="costumers_item_title">
                        <p>{item.title}</p>
                    </div>

                    <div className="costumers_item_img">
                        <img src={item.img} alt=""/>
                    </div>

                </div>

            </>}


        </>
};

export default CostumersList;