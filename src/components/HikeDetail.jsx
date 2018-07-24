import React from 'react';
import PropTypes from 'prop-types';

function HikeDetail(props){
  if(props.selectedHike == null){
    return(
      <div>
        <h3>No hike selected. Click a hike to show its details</h3>
      </div>
    )
  } else {
    return (
      <div>
        <h5>{props.selectedHike.name}</h5>
        <p>Start: {props.selectedHike.start}</p>
      </div>
    );
  }
}

HikeDetail.propTypes = {
  selectedHike: PropTypes.object
};

export default HikeDetail;
