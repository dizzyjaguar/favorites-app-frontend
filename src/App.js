import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Search from './Search.js';
import Favorites from './Favorites.js';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/' component={Favorites} />
        </Switch>
        </div>
      </BrowserRouter>      
  );
}

export default App;
