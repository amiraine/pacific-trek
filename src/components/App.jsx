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
import constants from './../constants';
const { c } = constants;


function App(){

  return(
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,500,700');
        * {
          margin: 0;
          padding: 0;

        }
        div{
          border: 1px dashed grey;
        }
      `}</style>
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

App.propTypes ={
  masterHikeList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterHikeList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));
