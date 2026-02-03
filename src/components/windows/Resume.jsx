import React from 'react'
import './resume.scss'
import Macwindows from './Macwindows'

const Resume = ({windowName, setWindowOpen}) => {
  return (
  <Macwindows windowName={windowName} setWindowOpen={setWindowOpen}>
     <div className="resume-window">
    <iframe src='/Rahul_Mohite.pdf' frameBorder={0}>

    </iframe>
   </div>
  </Macwindows>
  )
}

export default Resume
