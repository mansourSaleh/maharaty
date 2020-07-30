import React from 'react';

import MyNav from './components/MyNav';

import {
  HashRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './views/Home';



function About() {
  return<> 
  <h2>About</h2> 
  <h2>About</h2> 
  <h2>About</h2> 
  <h2>About</h2> 
  <h2>About</h2> 
  <h2>About</h2> 
  <h2>About</h2> 
  </>;
}

function Users() {
  return <> 
  <h2>Contact </h2> 
  <h2>Contact </h2> 
  <h2>Contact </h2> 
  <h2>Contact </h2> 
  <h2>Contact </h2> 
  <h2>Contact </h2> 
  <h2>Contact </h2> 
  </>;
}


function App() {
  return (
    <Router>
      <MyNav />
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
