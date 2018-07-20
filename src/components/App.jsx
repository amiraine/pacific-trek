import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Browse from './Browse';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Profile from './Profile';
import NewHikeForm from './NewHikeForm';
import Guide from './Guide';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
const { c } = constants;
import * as actions from './../actions';
import Footer from './Footer';
import Error404 from './Error404';
import HikeDetail from './HikeDetail';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      searchTerm: '',
      urlId: '',
      showModal: false,
      selectedHikeId: null
    }
    //code if trying to use dynamic routes
    this.handleUrlId = this.handleUrlId.bind(this);
    this.handleResetUrlId = this.handleUrlId.bind(this);
    //code if trying to just open a modal on top of the page
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  //functions for dynamic routing
  handleUrlId(id){
    this.setState({
      urlId: id
    });
  }
  handleResetUrlId(){
    this.setState({
      urlId: ''
    });
  }
  //functions for prompting modals
  handleOpenModal(hikeId){
    this.setState({
      showModal: true,
      selectedHikeId: hikeId
    });
  }
  handleCloseModal(){
    this.setState({
      showModal: false
    })
  }
  componentWillMount(){
    const { dispatch } = this.props
    const { watchFirebaseHikesRef } = actions
    dispatch(watchFirebaseHikesRef())
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
            render= {(props)=>
            <Search hikeList={this.props.masterHikeList}
            handleUrlId={this.handleUrlId}
            handleOpenModal = {this.handleOpenModal}
            handleCloseModal = {this.handleCloseModal}
            showModal = {this.state.showModal}
            selectedHikeId = {this.state.selectedHikeId}/>
          }/>
          <Route
            path="/login"
            component={Login}/>
          <Route
            path="/profile"
            component={Profile}/>
          <Route
            path="/admin"
            component={NewHikeForm}/>
          <Route
            path="/guide"
            component={Guide}/>
          <Route
            path="/hike/:id"
            render={(props)=>
            <HikeDetail hikeList={this.props.masterHikeList}
            resetUrlId={this.handleResetUrlId}/>
          }/>
          <Route
            component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

App.propTypes ={
  masterHikeList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterHikeList: state
  }
}

export default withRouter(connect(mapStateToProps)(App))
