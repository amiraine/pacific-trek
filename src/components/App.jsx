import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Browse from './Browse';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import NewHikeForm from './NewHikeForm';
import Guide from './Guide';
import PropTypes from 'prop-types';
import constants from './../constants';
import Footer from './Footer';
import Error404 from './Error404';
import firebase from 'firebase';
import * as actions from './../actions';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hikeListArray: Object.values(this.props.masterHikeList),
      searchText: '',
      searchLength: null,
      searchDifficulty: null,
      selectedHike: null
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleSelectedHike = this.handleSelectedHike.bind(this);
  }
  componentWillMount(){
    const { dispatch } = this.props
    const { watchFirebaseHikesRef } = actions
    dispatch(watchFirebaseHikesRef());
  }
  handleTextChange(event){
    this.setState({
      searchText: event.target.value
    });
  }
  handleLengthChange(event){
    this.setState({
      searchLength: event.target.value
    });
  }
  handleDifficultyChange(event){
    this.setState({
      searchDifficulty: event.target.value
    });
  }
  handleSelectedHike(hikeId){
    this.setState({
      selectedHike: hikeId
    });
    console.log(this.state.selectedhike);
  }
  render(){
    return(
      <div>
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,500,700');
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            *:focus{
              outline: none;
            }
            body{
              position: relative;
              min-height: 100vh;
              max-width: 100vw;
            }
            svg{
              height: 78px;
              width: 78px;

            }
            svg path{
              fill: white;
            }
            .next, .prev{
              z-index: 5;
              position: absolute;
            }
            .next{
              right: 0;
            }
            .wrapper{
              background-color: #d8ffbf;
            }
            .slide{
              width: 100vw;
              max-height: 1500px;
              min-height: 50vh;
              background-position: bottom;
              background-attachment: fixed;
              background-size: cover;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              text-align: center;
              font-size: 4em;
              font-family: 'Alegreya Sans SC', sans-serif;
              text-shadow: 2px 2px 5px black;
              animation: 1s fadein ease-in 0s 1;
            }
            .transition-wrapper{
              animation: 1s fadein ease-in 0s 1;
            }
            @keyframes fadein {
              0%{
                opacity: 0;
              }
              100%{
                opacity: 100;
              }
            }
            `}</style>
        <Navigation/>
        <Switch>
          <Route
            exact path="/"
            component={Home}/>
          <Route
            path="/browse"
            component={Browse}/>
          <Route
            path="/search"
            render= {()=><Search hikeList={this.props.masterHikeList}
            searchText = {this.state.searchText}
            searchLength = {this.state.searchLength}
            searchDifficulty = {this.state.searchDifficulty}
            handleTextChange = {this.handleTextChange}
            handleLengthChange = {this.handleLengthChange}
            handleDifficultyChange = {this.handleDifficultyChange}
            />}/>
          <Route
            path="/login"
            component={Login}/>
          <Route
            path="/admin"
            component={NewHikeForm}/>
          <Route
            path="/guide"
            component={Guide}/>
          <Route
            component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    )
  };
};

App.propTypes = {
  masterHikeList: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    masterHikeList: state,
  };
};

export default withRouter(connect(mapStateToProps)(App))
