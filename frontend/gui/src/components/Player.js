import React from 'react'


export default function Player() {

  const data = [
    {
      src: 'http://localhost:8000/Music/rock/AC_DC - Code Red (Official Audio).mp3',
      artist: 'Señorita',
      name: 'Shawn Mendes',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OT9jsAGPLRZkcy-dKDIMHAHaEK%26pid%3DApi&f=1',
      id: '66575568423123',
    },
  ]

  return (
    <div className="jumbotron" >
      <audio style={{ width: '100%' }} controls="controls">
        <source src='/Music/rock/AC_DC - Code Red (Official Audio).mp3' />
      </audio>
    </div>
  )
}
