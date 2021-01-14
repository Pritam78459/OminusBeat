import React from 'react';
import OminusBeat from '../components/OminusBeat';
import axios from 'axios'; 

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
    }

    render() {
        return (
            <OminusBeat/>
        )        
    }
}

export default MusicList;