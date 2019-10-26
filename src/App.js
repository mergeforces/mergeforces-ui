import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';


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
      </Router>
    </div>
  );
}

export default App;
