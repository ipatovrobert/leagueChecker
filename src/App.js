import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Summoner from './components/pages/Summoner';

import SummonerState from './context/summoner/SummonerState';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

const App = () => {
  return (
    <SummonerState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/summoner/:summonerName' component={Summoner}/>
          <Route exact path='/contact/' component={Contact}/>
          <Route exact path='/about/' component={About}/>
        </Switch>
      </Router>
    </SummonerState>
  );
}

export default App;
