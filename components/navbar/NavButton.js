"use client"
import React from 'react'

import './NavButton.scss'

const NavButton = ({handleClick, menu}) => {

  return (
    <div>
        <button className='nav_btn' onClick={handleClick}>{!menu ? 'Menu' : 'Close'}</button>
    </div>
  )
}

export default NavButton
