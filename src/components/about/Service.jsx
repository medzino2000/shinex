import React from 'react'
import "./Service.css";


function Service(props) {
    function name(params) {
        if (params === 'right') {
            // const left = document.querySelector('.right')
            // return (`left: ${props.PositionOfText}`)
            return {left: `${props.PositionOfText}`}
        } else {
                // return (`right: ${props.PositionOfText}`)
            return {right: `${props.PositionOfText}`,}
        } 
    } 

    function papa(params) {
        if (params === 'right') {
            return {left: `${props.PositionOfWave}`,width: `${props.WidthOfWave}`} 
        } else {
            return {right: `${props.PositionOfWave}`,width: `${props.WidthOfWave}`} 
        }
    }

  return (
    <div className='global_service_container'>
        <div className={`service_container ${props.margin}`}>
            <img className='service_img' src={props.src} alt="" />
            <img style={papa(props.margin)} className='wave' src={props.wave} alt="" />
            <h4 style={name(props.margin)}>{props.type.toUpperCase()}</h4>
        </div>
    </div>
  )
}

export default Service