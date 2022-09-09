import React from 'react'


function OneService(props) {

  let c = ['first', 'second', 'third', 'fourth'];



  function click(params) {
    props.settingActive(`${props.activeId}`);
    
    c.map(({}, index) => {
      document.getElementById(`${c[index]}`).style.background  = '#FF7C88'
      document.getElementById(`${c[index]}`).style.borderRadius = '0 0 0 0'
      
    })

    if (props.number === 0) {
      if (props.windowWidth <= 870) {
        document.getElementById(`${c[props.number]}`).style.background = 'transparent'
        document.getElementById(`${c[1]}`).style.borderRadius = '0 0  0 16px'
      }else{
        document.getElementById(`${c[props.number]}`).style.background = 'transparent'
        document.getElementById(`${c[1]}`).style.borderRadius = '0 16px 0 0'
      }

    }if (props.number === 3) {
      document.getElementById(`${c[props.number]}`).style.background = 'transparent'
      document.getElementById(`${c[2]}`).style.borderRadius = '0 0 16px 0'
    }if (props.number !== 0 && props.number !== 3) {
      if (props.windowWidth < 870) {
        document.getElementById(`${c[props.number]}`).style.background = 'transparent'
        document.getElementById(`${c[props.number - 1]}`).style.borderRadius = '0 0 16px 0'
        document.getElementById(`${c[props.number + 1]}`).style.borderRadius = '0 0 0 16px'
      }else {
        document.getElementById(`${c[props.number]}`).style.background = 'transparent'
        document.getElementById(`${c[props.number - 1]}`).style.borderRadius = '0 0 16px 0'
        document.getElementById(`${c[props.number + 1]}`).style.borderRadius = '0 16px 0 0'
      }

    }
    
    

  }

  return (
    <div style={{background: `${props.preStyle}`,borderRadius: `${props.preStyletwo}`}} id={props.pakageId} className={`package ${props.pakageName} ${props.number}`} onClick={click}>
            {/* package premuim */}
            <a>
              <span>{props.lang ? "PACKAGE" : "الباقة"}</span> {props.pakageType}
              {
                
              }
            </a>
    </div>
  )
}

export default OneService