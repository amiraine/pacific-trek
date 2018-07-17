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
    <div className='hike-module'>
      <style jsx>{`
        .hike-module{
          height: 250px;
          display: grid;
          grid-template-columns: 250px 1fr;
        }
        img{
          object-fit: cover;
          width: 250px;
          height: 250px;
        }
      `}</style>
    <div className="image">
      <img src={props.img}/>
    </div>
      {props.name}

    </div>
  )
}
Hike.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  gain: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  season: PropTypes.array.isRequired,
  family: PropTypes.string.isRequired,
  crowded: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired
}
export default connect()(Hike);
