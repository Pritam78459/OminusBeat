import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import MusicList from './containers/OminusBeatMusic';
import BaseRouter from './routes';
import Player from './components/Player'
import Navbar from './components/Navbar'


function App() {



  return (
    <div className="App">
      <Navbar />
      <Router>
        <BaseRouter />
      </Router>
      <div className="align-items-end" style={{ position: 'fixed', width: '100vw', marginBottom: '0', bottom: 0 }} >
        <Player />
      </div>
    </div>
  );
}

export default App;
