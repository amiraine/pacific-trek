import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Hike(props){
  function handleSavingHike(hikeId){
    const {dispatch} = props;
    const action = {
      type: 'SELECT_HIKE',
      hikeId: hikeId
    };
    dispatch(action);
  }
  return(
    <div>
      {props.name}
    </div>
  )
}
export default Hike;
