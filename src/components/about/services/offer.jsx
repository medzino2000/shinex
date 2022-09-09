import React, { Fragment } from 'react'
import OffersDiscription from "./OffersDiscription";



function Offer(props) {


  return (
    <Fragment>
        <OffersDiscription 
        data={props.dataa}
        />
        <div className="offers_prices">
            <div className='normal_price'>
                <p>{props.Nprice}</p>
            </div>
        
            <div className='hight_price'>
                <p>{props.Hprice}</p>
            </div>
        </div>
    </Fragment>
  )
}

export default Offer