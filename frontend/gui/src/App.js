import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import MusicList from './containers/OminusBeatMusic';
import BaseRouter from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <BaseRouter/>
        </Router>
    </div>
  );
}

export default App;
