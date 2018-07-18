import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Navigation from './Navigation'
import Browse from './Browse'
import Home from './Home'
import Login from './Login'
import Search from './Search'
import Profile from './Profile'
import NewHikeForm from './NewHikeForm'
import Guide from './Guide'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import constants from './../constants'
const { c } = constants
import * as actions from './../actions'
import Footer from './Footer'


class App extends React.Component {
  componentWillMount(){
    const { dispatch } = this.props
    const { watchFirebaseHikesRef } = actions
    dispatch(watchFirebaseHikesRef())
    console.log(this.props)
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
            `}</style>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/browse" component={Browse}/>
          <Route path="/search" render= {()=><Search hikeList={this.props.masterHikeList}/>}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/admin" component={NewHikeForm}/>
          <Route path="/guide" component={Guide}/>
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
