import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Browse from './Browse';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Profile from './Profile';

function App(){

  return(
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/browse" component={Browse}/>
        <Route path="/search" component={Search}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
