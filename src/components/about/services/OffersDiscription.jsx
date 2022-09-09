import React from 'react'


function OffersDiscription(props) {
  return (
    <div className="offers_container">
        {
          
          props.data.map(({offer}, index) => {
            
            if (index > 6) {
              return (
                <p style={{gridRow: `${index-6}/${index-5}`}} className='left_side one_offer' key={`par${index}`}>
                  <img src="/assets/check.png" alt="" />
                  {offer}
                </p>
              )
            }else {
              return (
                <p className='one_offer' key={index}>
                  <img src="/assets/check.png" alt="" />
                  {offer}
                </p>
              )
            }
        }
        )}
    </div>
  )
}

export default OffersDiscription