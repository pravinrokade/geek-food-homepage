import React from 'react'
import './BodyCSS.css'
import Btn from './Btn'

function Body() {
  return (
    <div className='BodyMain'>
        <div className='BodyParent'>
        <div>
            <h1>Let us find your</h1>
            <h1>Forever Food.</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className='BtnDiv'>
            <Btn name='Search Now' bgcolor='rgb(225,29,72)' color='white' />
            <Btn name='Know more' bgcolor='white'  color='rgb(225,29,72)'/>
        </div>
    </div>
    </div>
  )
}

export default Body