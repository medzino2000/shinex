import React from 'react'

function Image(props) {
  return (
    <div id={`imgcont${props.index}`} className="imgs_container">
            <img id={`img${props.index}`} src={props.src} alt="" />
    </div>
  )
}

export default Image