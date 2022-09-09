import React from 'react'
import Media from './Media';
import './Contact.css'
import db from "../../../data.json";

function Contact(props) {
  return (
    <section id='contact'>
      
      <div className="social_media">
        <h4 className='contact_us_header'>
          Contact Us
        </h4>
        <div className="social_media_icons">
          <img src="/assets/eclips_footer.png" alt="" />
          <Media 
          socialImg='/assets/instagram.png'
          des='its_shinex'
          />
          <Media 
          transform='scaleY'
          socialImg='/assets/whatsapp.png'
          des='0505030056'
          />
          <Media 
          id='location_img'
          socialImg='/assets/localisation.png'
          des='Dubai, UAE'
          />
          <Media 
          transform='scaleY email'
          socialImg='/assets/mail.png'
          des='zebdenya @example.com'
          />
        </div>
        <div className="email_form">
          <p>{props.lang ? db.contact[0].h1 : db.contactara[0].h1}</p>
          <form action="">
            <input type="text" name='name' placeholder={props.lang ? db.contact[0].input_name : db.contactara[0].input_name} required/>
            <input type="text" name='email' placeholder={props.lang ? db.contact[0].input_email : db.contactara[0].input_email} required />
            <textarea name='message' rows={5} placeholder={props.lang ? db.contact[0].input_message : db.contactara[0].input_message} required></textarea>
            <button type='submit'>{props.lang ? db.contact[0].button : db.contactara[0].button}</button>
          </form>
          
        </div>
      </div>
    </section>
  )
}

export default Contact