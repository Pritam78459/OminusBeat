import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import rock_title from '../components/musicthumbnails/rock/title.png';
import MusicControlCard from '../components/MusicCard';



class Rock extends React.Component {

    
    


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
            <Grid container align="center">
              <Grid item xs={12}>
            <Navbar/>
              </Grid>
              <Grid item xs={12} style={{marginTop:"5%"}} >
                <img src={rock_title} alt='rock'/>
              </Grid>
              <Grid item xs ={12} style={{marginTop:"3%"}} >
                  <MusicControlCard  />
              </Grid>
            </Grid>
            
        )        
    }
}

export default Rock;