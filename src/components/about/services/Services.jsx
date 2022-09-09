import React, { useState } from 'react'
import './Services.css'
import OneService from './OneService'
import Offer from "./offer";
import db from "../../../data.json";
import CTA from '../header/CTA'













const Services = (props) => {
  const [active, setactive] = useState('firstOffer') ;
  
  
  return (
    <section id="services">
      <img className='bg_two' src="/assets/bgtwo.png" alt="" />
      <img className='waveTwo' src="/assets/waves2.png" alt="" />
      <img className='waveThree' src="/assets/waves2.png" alt="" />
      <img className='aboutus_bub' src="/assets/bub.png" alt="" />
      <h4>{props.lang ? db.services[0].h1 : db.servicesara[0].h1}</h4>
      
          <div className='services'>

            <div className='packages'>
              
          <OneService 
          lang={props.lang}
          number={0}
          activeId='firstOffer'
          settingActive={setactive}
          pakageId='first'
          pakageType={props.lang ? db.services[1].packages[0].package : db.servicesara[1].packages[0].package}
          pakageName=''
          preStyle='transparent'
          windowWidth={props.screenWidth}
          />
          <OneService
          lang={props.lang}
          number={1}
          activeId='secondOffer'
          settingActive={setactive}
          pakageId='second'
          pakageType={props.lang ? db.services[1].packages[1].package : db.servicesara[1].packages[1].package}
          pakageName=''
          preStyletwo='0 16px 0 0'
          windowWidth={props.screenWidth}
          />
          <OneService
          lang={props.lang}
          number={2}
          activeId='thirdOffer'
          settingActive={setactive}
          pakageId='third'
          pakageType={props.lang ? db.services[1].packages[2].package : db.servicesara[1].packages[2].package}
          pakageName=''
          windowWidth={props.screenWidth}
          />
          <OneService
          lang={props.lang}
          number={3}
          activeId='fourthOffer'
          settingActive={setactive}
          pakageId='fourth'
          pakageType={props.lang ? db.services[1].packages[3].package : db.servicesara[1].packages[3].package}
          pakageName=''
          windowWidth={props.screenWidth}
          />
          
            </div>

            <div className="services_discreption">
            {
            active === 'firstOffer' && <Offer
            dataa={props.lang ? db.services[1].service_description_data[0] : db.servicesara[1].service_description_data[0]}
            Nprice={props.lang ? '50dh' : '50دإ'}
            Hprice={props.lang ? '40dh' : '40دإ'}
            />
            }
            {
            active === 'secondOffer' && <Offer
            dataa={props.lang ? db.services[1].service_description_data[1] : db.servicesara[1].service_description_data[1]}
            Nprice={props.lang ? '90dh' : '90دإ'}
            Hprice={props.lang ? '70dh' : '70دإ'}
            />
            }
            {
            active === 'thirdOffer' && <Offer
            dataa={props.lang ? db.services[1].service_description_data[2] : db.servicesara[1].service_description_data[2]}
            Nprice={props.lang ? '150dh' : '150دإ'}
            Hprice={props.lang ? '120dh' : '120دإ'}
            />
            }
            {
            active === 'fourthOffer' && <Offer
            dataa={props.lang ? db.services[1].service_description_data[3] : db.servicesara[1].service_description_data[3]}
            Nprice={props.lang ? '300dh' : '300دإ'}
            Hprice={props.lang ? '250dh' : '250دإ'}
            />
            }
            </div>
              
          </div>
          <CTA 
            color='var(--color-white)'
            bgcolor='var(--color-bg)'
            lang={props.lang}
          />
    </section>
  )
}

export default Services