import React from 'react'
import Nav from "../nav/Nav";
import './Header.css'
import db from '../../../data.json'




import CTA from '../header/CTA'

const Header = (props) => {
  
  return (
    <header>
        <img className='bubble_three' src='/assets/bubbles3.png' alt="" />
        <Nav
        lang={props.lang}
        />
        <div className="header_content">
          <img className='circl_one' src="/assets/circle1.png" alt="" />
          <img className='circl_two' src="/assets/circle1.png" alt="" />
          <div className="header_imgs_container">
            <img className='header_img' src='/assets/Header_img.png' alt="" />
            <img className='header_img_cover' src='/assets/Header_img_cover.png' alt="" />
            <img className='bubble_one' src='/assets/bubbles_one.png' alt="" />
            <img className='bubble_two' src='/assets/bubbles2.png' alt="" />
          </div>
          <div className="h_container">
            <img src="/assets/wave1.png" alt="" />
            <h1>
            {props.lang ? db.header[0].h1 : db.headerara[0].h1}<br />{props.lang ? db.header[1].h1 : db.headerara[1].h1}
            </h1>
            <p>
              {props.lang ? db.header[0].p : db.headerara[0].p}<br />{props.lang ? db.header[1].p : db.headerara[1].p}<br />{props.lang ? db.header[2].p : db.headerara[2].p}
            </p>
            <CTA 
                  lang={props.lang}
                  color='var(--color-bg)'
                  bgcolor='var(--color-white)'
            />
          </div>
        </div>
    </header>

  )
}

export default Header