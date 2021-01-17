import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



class Synthwave extends React.Component {

    
    


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
                <Typography variant="h1" component="h1">
                    Synthwave
                </Typography>
              </Grid>
              
            </Grid>
            
        )        
    }
}

export default Synthwave;