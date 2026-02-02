import React from 'react'
import './dock.scss'

const Dock = () => {
  return (
    <footer className='dock'>
        <div className='icon github'> <img src="/dock_icon/github.svg" alt="Icon"></img></div>
        <div className='icon calendar'> <img src="/dock_icon/calendar.svg" alt="Icon"></img></div>
        <div className='icon clipboard'> <img src="/dock_icon/clipboard.svg" alt="Icon"></img></div>
        <div className='icon file'> <img src="/dock_icon/file.svg" alt="Icon"></img></div>
        <div className='icon link'> <img src="/dock_icon/link.svg" alt="Icon"></img></div>
        <div className='icon mail'> <img src="/dock_icon/mail.svg" alt="Icon"></img></div>
        <div className='icon note'> <img src="/dock_icon/note.svg" alt="Icon"></img></div>
        <div className='icon spotify'> <img src="/dock_icon/spotify.svg" alt="Icon"></img></div>
    </footer>
  )
}

export default Dock
