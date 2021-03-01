import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import explore_img from '../components/images/explore.png';
import GenereTile from '../components/ExploreTile';
import back2 from '../UI Images/back2.jpg'



class Explore extends React.Component {





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





    render() {
        return (
            <Grid container align="center" style={{ backgroundImage: 'url(' + back2 + ')' }}>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12} style={{ marginTop: "5%" }} >
                    <img src={explore_img} alt='explore' />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: '10%' }}>
                    <GenereTile />
                </Grid>
            </Grid>

        )
    }
}

export default Explore;