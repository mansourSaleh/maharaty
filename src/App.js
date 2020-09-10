import React from 'react';

import MyNav from './components/MyNav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './views/Home';
import Main from './views/Main';






function App() {
  return (
    <Router>
      <MyNav />
      <Switch>
          
          <Route  path="/">
            <Home />
          </Route>
          {/* <Route exact path="/main">
            <Main />
          </Route> */}
        </Switch>
      
    </Router>
  );
}

export default App;
