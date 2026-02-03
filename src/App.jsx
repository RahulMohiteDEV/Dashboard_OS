import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

const App = () => {

  const[windowOpen, setWindowOpen] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  })


  return (
   <main>
    <Nav/>
    <Dock windowOpen={windowOpen} setWindowOpen={setWindowOpen} />
    {windowOpen.github && <Github windowName="github" setWindowOpen={setWindowOpen}/>}
    {windowOpen.note && <Note windowName="note" setWindowOpen={setWindowOpen}/>}
    {windowOpen.resume && <Resume windowName="resume" setWindowOpen={setWindowOpen}/>}
    {windowOpen.spotify && <Spotify windowName="spotify" setWindowOpen={setWindowOpen}/>}
    {windowOpen.cli && <Cli windowName="cli" setWindowOpen={setWindowOpen}/>}
   </main>
  )
}

export default App
