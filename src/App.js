import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import './App.css';

import Landing from './Components/Landing'
import LoginForm from './Components/LoginForm'
import GoToChurch from './Components/GoToChurch'
import OnAir from './Components/OnAir'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
    };

    ReactGA.initialize('G-4EV0VVCEZL');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/church" component={GoToChurch} />
        <Route path="/onair" component={OnAir} />
      </HashRouter>
    );
  }
}

export default App;
