import React from 'react'
import './nav.scss'
import Datetime from './Datetime'


const Nav = () => {
  return (
    <nav>
 <div className="left">
    <div className="nav-icon">
        <img src="/nav-icons/apple.svg" alt="Apple" />
    </div>

    <div className="nav-item">
        <p>Rahul Mohite</p>
    </div>

    <div className="nav-item">
        <p>File</p>
    </div>

    <div className="nav-item">
        <p>Terminal</p>
    </div>

    <div className="nav-item">
        <p>Windows</p>
    </div>
 </div>


 <div className="right">
    <div className="nav-icon">
        <img src="/nav-icons/wifi.svg" alt="Apple" />
    </div>

  <div className="nav-item">
        <Datetime/>
    </div>

 </div>
    </nav>
  )
}

export default Nav
