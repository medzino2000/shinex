import React from 'react'
import db from "../../../data.json";
import { BsWhatsapp } from "react-icons/bs";


function CTA(props) {
  const custom = {
    color: `${props.color}`,
    backgroundColor: `${props.bgcolor}`
  }
  return (
    <a style={custom}  href="https://api.whatsapp.com/send?phone=0505030056" className='cta'>
        <BsWhatsapp />
        {props.lang ? db.CTA[0].a : db.CTAara[0].a}
    </a>
  )
}

export default CTA