import React from 'react'

function Btn(props) {
  return (
    <p style={{backgroundColor:props.bgcolor , color:props.color, fontWeight:'500', padding:'10px 50px', borderRadius:'10px'}}>{props.name}</p>
  )
}

export default Btn