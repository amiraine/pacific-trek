import React from 'react';
import { connect } from 'react-redux';

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
