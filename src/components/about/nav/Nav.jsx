import React from 'react'
import './nav.css'
import db from '../../../data.json'




const Nav = (props) => {




  return (
    <nav>
      {
        db.nav.map(({}, index) => {
        
        return <a className='btn from-top' key={`a${index}`} href={db.nav[index].href}>{props.lang ? db.nav[index].kara : db.navara[index].kara}</a>
      })
      }
      {/* <a href="#header">home</a>
      <a href="#experience">services</a>
      <a href="#services">about us</a>
      <a href="#contact">contact us</a> */}
    </nav>
  )
}

export default Nav