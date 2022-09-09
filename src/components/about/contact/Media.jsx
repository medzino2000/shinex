import React from 'react'

function Media(props) {
  return (
    <a href="" className={`media ${props.transform}`} >
        <img src={props.socialImg} alt="" id={props.id} />
        <p>{props.des}</p>
    </a>
  )
}

export default Media