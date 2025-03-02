import React from 'react'
import './HeaderCSS.css'

function Header() {
  return (
    <div className='Parent'>
        <div className='Child'>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <p className='section' style={{ fontSize: '24px' }}>GeekFoods</p>
        </div>
        <div className='Child'>
            <p className='section'>Home</p>
            <p className='section'>Quote</p>
            <p className='section'>Resturants</p>
            <p className='section'>Foods</p>
            <p className='section'>Contacts</p>
        </div>
        <div className='Child'>
            <p className='section' id='headerBtn'>Get started</p>
        </div>
    </div>
  )
}

export default Header