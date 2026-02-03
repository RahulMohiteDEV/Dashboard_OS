import React from 'react'
import Macwindows from './Macwindows'
import Terminal from 'react-console-emulator'

const Cli = ({ windowName, setWindowOpen }) => {

  const commands = {
   

    about: {
      description: 'Developer profile',
      usage: 'about',
      fn: () => `
Rahul Mohite
MERN Full Stack Developer

Passionate about building scalable,
responsive web applications using
React, Node.js, MongoDB.
      `
    },

    skills: {
      description: 'Show skills',
      usage: 'skills',
      fn: () => `
Frontend:
- React.js
- JavaScript (ES6+)
- HTML5, CSS3, Tailwind

Backend:
- Node.js
- Express.js
- REST APIs

Database:
- MongoDB, MySQL
      `
    },

    projects: {
      description: 'Show projects',
      usage: 'projects',
      fn: () => `
Soil Test Generator
- Reduced report generation time to 10 min

Task Management System
- Offline-first task tracking system
      `
    },

    education: {
      description: 'Education details',
      usage: 'education',
      fn: () => `
M.Sc Computer Science (2023–25)
CGPA: 7.23

B.Sc Computer Science (2020–23)
CGPA: 8.76
      `
    },

    contact: {
      description: 'Contact info',
      usage: 'contact',
      fn: () => `
Email: mohiterahul8380@gmail.com
Phone: +91 9922935750
LinkedIn: rahul-mohite
      `
    },

   

    exit: {
      description: 'Close terminal window',
      usage: 'exit',
      fn: () => {
        setWindowOpen(prev => ({ ...prev, [windowName]: false }))
        return 'Closing terminal...'
      }
    }
  }

  return (
    <Macwindows windowName={windowName} setWindowOpen={setWindowOpen}>
      <Terminal
        commands={commands}
        welcomeMessage={`Welcome Rahul 
    Type "help" to see available commands`}
        promptLabel="rahul@mac:~$"
      />
    </Macwindows>
  )
}

export default Cli
