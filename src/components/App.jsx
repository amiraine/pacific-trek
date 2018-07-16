import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Browse from './Browse';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Profile from './Profile';
import NewHikeForm from './NewHikeForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function App(){

  return(
    <div>
      <Navigation/>
      <NewHikeForm/>
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

App.propTypes ={
  masterHikeList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterHikeList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));
