import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import constants from './../constants'
const { c } = constants

function Hike(props){
  const hikeInfo = <div className='hike-module'>
    <style jsx>{`
      .hike-module{
        height: 10vw;
        display: grid;
        grid-template-columns: 10vw 1fr;
        margin-bottom: 10px;
        background-color: #D6FD83;
        color: #002e3a;
        font-family: 'Helvetica Neue', sans-serif;
      }
      .hike-name{
        margin-bottom: 10px;
      }
      .hike-info{
        padding:10px;
      }
      img{
        object-fit: cover;
        width: 10vw;
        height: 10vw;
      }
      .hike-module:hover{
        background-color: #f4ffdd;
      }
    `}</style>
    <div className="image">
      <img src={props.img}/>
    </div>
    <div className='hike-info'>
      <div className='hike-name'>
        <strong>{props.name}</strong><br/>
      </div>
      Difficulty: {props.difficulty}<br/>
      {props.length} miles<br/>
      {props.gain} ft. elevation gain
    </div>
  </div>
  return(
    <div onClick={() => {props.onHikeSelection(props.hikeId)}}>
      {hikeInfo}
    </div>
  );
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
  features: PropTypes.array.isRequired,
  onHikeSelection: PropTypes.func,
  selectedHike: PropTypes.object
}
export default connect()(Hike);
