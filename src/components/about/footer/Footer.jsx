import React from 'react'
import CTA from "../header/CTA";
import "./footer.css";
import Image from './Image';
import db from "../../../data.json";

const Footer = (props) => {
  const imageList = [
    {
      src: '/assets/gal1.jpg'
    },
    {
      src: '/assets/gal2.jpg'
    },
    {
      src: '/assets/gal3.jpg'
    },
    {
      src: '/assets/gal4.jpg'
    },
  ]
  
  let k = 0 ;
  // let i = 0;
  let j = imageList.length;
  function translate() {
    
    // i++
    k++
    imageList.map(({src}, index)=> {
      if (k === 1) {
        document.getElementById(`imgcont${index}`).style.transform = `translateX(${k}px)`
        k--
      }else {
        if (props.screenWidth < 550) {
          document.getElementById(`imgcont${index}`).style.transform = `translateX(${326 * k}px)`
        }else{
          document.getElementById(`imgcont${index}`).style.transform = `translateX(${384 * k}px)`
        }
        
      }

      
    })
    
    
    
  }
  function translateleft() {
    console.log('hhhh')
    k--
    imageList.map(({src}, index)=> {
      if (-k === j) {
        document.getElementById(`imgcont${index}`).style.transform = `translateX(${384 * -j}px)`
        k++
      }else {
        if (props.screenWidth < 550) {
          document.getElementById(`imgcont${index}`).style.transform = `translateX(${326 * k}px)`
        }else {
          document.getElementById(`imgcont${index}`).style.transform = `translateX(${384 * k}px)`
        }
        
      }
      
      
    })
    
    
  }
  return (
    <section id="aboutus_section">
      <img className='waves_five' src="/assets/waves2.png" alt="" />
      <img className='waves_six' src="/assets/wave1.png" alt="" />
      <img className='luna_one' src="/assets/luna1.png" alt="" />
      <div className="about_us_container">
        <div className="aboutus_imgs_animated_container">
          <div className="left_button" onClick={translateleft}>
            <img src="/assets/next.png" alt="" />
          </div>
          {
            imageList.map(({src}, index) => {
              return(
              <Image 
              key={`img${index}`}
              src={src}
              index={index}
              />
              )
              
            })
          }
          {/* <Image /> */}
          <div className="right_button" onMouseDown={translate}>
          <img src="/assets/next.png" alt="" />
          </div>
        </div>
        <div className="aboutus_description_container">
            <h4>{props.lang ? db.aboutus[0].h1 : db.aboutusara[0].h1}</h4>
            <p>
              {props.lang ? db.aboutus[0].p : db.aboutusara[0].p}<br />{props.lang ? db.aboutus[0].ptwo : db.aboutusara[0].ptwo}<br />{props.lang ? db.aboutus[0].pthree : db.aboutusara[0].pthree}
            </p>
            <CTA 
            color='var(--color-white)'
            bgcolor='var(--color-bg)'
            lang={props.lang}
            />
        </div>
      </div>
    </section>
  )
}

export default Footer