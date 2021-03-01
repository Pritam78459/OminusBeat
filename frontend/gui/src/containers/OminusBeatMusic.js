import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';
import Title from '../components/Title';
import back1 from '../UI Images/back1.jpg'
import title from '../UI Images/title.png'
import back2 from '../UI Images/back2.jpg';
import rock from '../UI Images/rock.jpg';
import synthwave from '../UI Images/synthwave.jpg';
import pop from '../UI Images/pop.jpg';
import blues from '../UI Images/blues.jpg';
import classical from '../UI Images/classical.jpg';
import rap from '../UI Images/rap.jpg'


class MusicList extends React.Component {





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
            <div class="container-fluid" style={{ margin: '0' }}>
                <div class="jumbotron jumbotron-fluid text-light d-flex " style={{ backgroundImage: 'url(' + back1 + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', margin: '0' }}>
                    <div class="container" >
                        <img className="mb-5 " src={title} ></img>
                        <h4 style={{ color: '#ff1a75', marginLeft: '10%' }} >Add music to your life...</h4>
                    </div>
                </div>
                <div class="container-fluid " style={{ backgroundImage: 'url(' + back2 + ')', height: 'auto', margin: '0' }}>
                    <h3 class="display-3 text-center text-light">Explore</h3>
                    <div class="row">
                        <div class="col-sm-6 p-5">
                            <img src={rock} className="img-thumbnail" />
                            <h5 class="text-light text-center">Rock</h5>
                        </div>
                        <div class="col-sm-6 p-5">
                            <img src={classical} className="img-thumbnail" />
                            <h5 class="text-light text-center">Classical</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 p-5">
                            <img src={pop} className="img-thumbnail img-fluid" />
                            <h5 class="text-light text-center">Pop</h5>
                        </div>
                        <div class="col-sm-6 p-5">
                            <img src={rap} className="img-thumbnail img-fluid" />
                            <h5 class="text-light text-center">Rap</h5>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default MusicList;