import React from 'react'
import './dock.scss'

const dockItems = [
  { key: 'github', icon: '/dock_icon/github.svg', type: 'window' },
  { key: 'calendar', icon: '/dock_icon/calendar.svg', type: 'link', url: 'https://calendar.google.com/calendar/u/0/r' },
  { key: 'cli', icon: '/dock_icon/clipboard.svg', type: 'window' },
  { key: 'resume', icon: '/dock_icon/file.svg', type: 'window' },
  { key: 'linkedin', icon: '/dock_icon/link.svg', type: 'link', url: 'https://www.linkedin.com/in/rahul-mohite-5039162a1/' },
  { key: 'mail', icon: '/dock_icon/mail.svg', type: 'link', url: 'https://mail.google.com/mail/u/0/#inbox?compose=new' },
  { key: 'note', icon: '/dock_icon/note.svg', type: 'window' },
  { key: 'spotify', icon: '/dock_icon/spotify.svg', type: 'window' },
]

const Dock = ({ windowOpen, setWindowOpen }) => {

  const openWindow = (key) => {
    setWindowOpen(prev => {
      if (prev[key]) return prev 
      return { ...prev, [key]: true }
    })
  }

  return (
    <footer className="dock">
      {dockItems.map(item => (
        <div
          key={item.key}
          className={`icon ${item.key} ${windowOpen[item.key] ? 'active' : ''}`}
          onClick={() =>
            item.type === 'window'
              ? openWindow(item.key)
              : window.open(item.url, '_blank')
          }
        >
          <img src={item.icon} alt={item.key} />
          {windowOpen[item.key] && <span className="active-dot" />}
        </div>
      ))}
    </footer>
  )
}

export default Dock
