import React from 'react'
import { Rnd } from 'react-rnd'
import './macwindow.scss'

const Macwindows = ({children}) => {
  return (
    <Rnd
    default={{
      height:"40vh",
      width:"40vw",
      x:300,
      y:200,

    }}
    >
         <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title"><p>rahulmohite - zsh 80*24</p></div>
            </div>
            <div className="main-containt">
                {children}
            </div>
         </div>
    </Rnd>
  )
}

export default Macwindows
