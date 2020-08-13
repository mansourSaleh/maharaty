import React from 'react';

import MyNav from './components/MyNav';

import {
  HashRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './views/Home';
import Main from './views/Main';



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
  <h1>السلام عليكم</h1>
  <h1>السلام عليكم</h1>
  <h1>السلام عليكم</h1>
  <h1 className="fff">السلام عليكم</h1>
  <h1 className="fff">السلام عليكم</h1>
  <h1>السلام عليكم</h1>
  <h1>السلام عليكم</h1>
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
          <Route exact path="/main">
            <Main />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
