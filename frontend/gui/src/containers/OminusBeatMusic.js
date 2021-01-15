import React from 'react';
import OminusBeat from '../components/OminusBeat';
import axios from 'axios';
import Player from '../components/Player';
import * as $ from "jquery";
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';



export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = "556c1c2e48fd4a05a55aa7a9d0dfb6b7";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";


class MusicList extends React.Component {

     constructor() {
    super();
    this.state = {
      token: null,
    item: {
      album: {
        images: [{ url: "" }]
      },
      name: "",
      artists: [{ name: "" }],
      duration_ms:0,
    },
    is_playing: "Paused",
    progress_ms: 0
  };
  this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }
  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
        });
      }
    });
  }

    


    state = {
        music: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                music: res.data
            });
            console.log(res.data)
        })
    };

    componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }
    



    render() {
        return (
            <div>
                 
            
            <OminusBeat/>
            {!this.state.token && (
        <Link style={{marginTop:"40%"}}
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
            
          Login to Spotify
          
        </Link>
      )}
      {this.state.token && (
        <Player
          item={this.state.item}
          is_playing={this.state.is_playing}
          progress_ms={this.progress_ms}
        />
      )}
            </div>
        )        
    }
}

export default MusicList;