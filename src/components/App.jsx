import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';

function App(){

  return(
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={}/>
        <Route path="/browse" component={}/>
        <Route path="/search" component={}/>
        <Route path="/login" component={}/>
        <Route path="/profile" component={}/>
      </Switch>
    </div>
  );
}

export default App;
