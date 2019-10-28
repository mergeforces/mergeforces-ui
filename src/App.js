import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import CreateEvent from './components/create-event';
import Event from './components/event';
import RSVP from './components/rsvp';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/'>
          <Hero />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/create'>
          <CreateEvent />
        </Route>
        <Route exact path='/event'>
          <Event />
        </Route>
        <Route exact path='/rsvp'>
          <RSVP />
        </Route>
      </Router>
    </div>
  );
}

export default App;
