import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function HikeDetail(props){
  return(
    <div>
      <h1>TEST</h1>
      {props.name}
    </div>
  )
}
export default HikeDetail;
