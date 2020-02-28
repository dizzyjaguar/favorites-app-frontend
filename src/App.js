import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/' component={Favorites} />
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
