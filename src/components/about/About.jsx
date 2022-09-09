import React from 'react'
import './About.css'
import Service from "./Service";
import db from "../../data.json";


const About = (props) => {
  return (
    <section id='about'>
      <div className="services_container">
      <img className='circl_three' src="/assets/circle1.png" alt="" />
      <img className='circl_four' src="/assets/circle1.png" alt="" />
        {
          db.about.map(({}, index)=> {
            return(
              <Service 
          key={`kara ${index}`}
          margin={db.about[index].margindata}
          src={db.about[index].srcdata}
          type={props.lang ? db.about[index].typedata : db.aboutara[index].typedata}
          wave={db.about[index].wavedata}
          PositionOfText={db.about[index].PositionOfTextdata}
          PositionOfWave={db.about[index].PositionOfWavedata}
          WidthOfWave={db.about[index].WidthOfWavedata}
          />
            )
            
        
          })
        }
      </div>
    </section>
  )
}

export default About