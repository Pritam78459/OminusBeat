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
            <Fragment>
                <div class="row">
                    <div class="col-sm-12"><Navbar /></div>

                </div>
                <hr />
                <div class="row  ">
                    <div class="col-sm-2 jumbotron "><Playlist /></div>
                    <hr />
                    <div class="col-sm-10"><MusicFeed music={this.state.music} /></div>
                </div>
                <hr />
            </Fragment >

        )
    }
}

export default Rock;