import React from 'react'
import '../App.css'

function Player() {



  return (
    <div className="container-fluid bg-secondary p-2" style={{ height: '10%', padding: '0 !important', textAlign: 'center' }} >
      <marquee><h4 className="disply-4">'songname'</h4></marquee>
      <audio style={{ width: '100%' }} controls="controls">

        <source src='/Music/rock/AC_DC - Code Red (Official Audio).mp3' />
      </audio>
    </div>
  )
}


export default Player;
