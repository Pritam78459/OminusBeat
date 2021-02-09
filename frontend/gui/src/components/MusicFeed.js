import React, { Component, Fragment } from 'react'
import axios from 'axios';
import play from '../components/images/play.png'
export class MusicFeed extends Component {

  render() {
    return (
      <Fragment>
        <div className="list-group">
          {
            this.props.music.map((song) =>
              <a href="#" style={{ textAlign: 'left' }} className="list-group-item list-group-item-action"><p style={{ float: 'left' }} >{song.songname}</p> <a style={{ float: 'right' }}> <img style={{ width: 30 }} src={play} /> </a> </a>
            )

          }
        </div>
      </Fragment>
    )
  }
}

export default MusicFeed
