import React from 'react'
import Macwindows from './Macwindows'
import './spotify.scss'

const Spotify = ({windowName, setWindowOpen}) => {
  return (
   <Macwindows windowName={windowName} setWindowOpen={setWindowOpen}>
    <div className="spotify-window">
  <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }}
 src="https://open.spotify.com/embed/playlist/37i9dQZF1DWX76Z8XDsZzF?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
   </Macwindows>
  )
}

export default Spotify
