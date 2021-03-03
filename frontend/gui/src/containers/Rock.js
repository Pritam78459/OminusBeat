import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import rock_title from '../components/musicthumbnails/rock/title.png';
import MusicControlCard from '../components/MusicCard';
import MusicFeed from '../components/MusicFeed';
import { Fragment } from 'react';
import Playlist from '../components/Playlist';
import Player from '../components/Player';
import playerback from '../UI Images/playerback.jpg';
import btn from '../UI Images/button.png';



class Rock extends React.Component {




    state = {
        music: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/song/')
            .then(res => {
                this.setState({
                    music: res.data
                });
                console.log(res.data)
            })
    };




    render() {
        return (

            <div style={{ backgroundImage: 'url(' + playerback + ')', backgroundSize: 'cover' }} >
                <div className="container-fluid d-flex  flex-column justify-content-center align-items-center" style={{ height: '91vh', marginTop: '5%', marginBottom: '10%' }}>
                    <h1 className="display-4 text-center font-weight-bold text-danger">Music Feed</h1>
                    <div className="container d-flex justify-content-center" style={{ height: '100%' }}>
                        <ul className="list-group text-danger w-50" style={{ textShadow: '3px 3px 10px red', fontSize: '20px' }}>
                            {this.state.music.map((song) =>
                                <li className="list-group-item bg-transparent
                         border-light border-left-0 border-right-0 "><b>{song.songname}
                                        <span className="float-right">{song.songlength} &nbsp;
                        <button><img src={btn} className="img-fluid" style={{ width: 25 }} ></img></button>
                                        </span></b></li>
                            )}
                        </ul>
                    </div>

                </div>
            </div >

        );
    }
}

export default Rock;