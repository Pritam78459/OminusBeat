import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import MusicList from './containers/OminusBeatMusic';
import BaseRouter from './routes';
import Player from './components/Player'


function App() {



  return (
    <div className="App">
      <Router>
        <BaseRouter />
      </Router>
      <div style={{ verticalAlign: 'bottom' }} >
        <Player />
      </div>
    </div>
  );
}

export default App;
