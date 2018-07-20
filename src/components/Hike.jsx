import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import constants from './../constants'
const { c } = constants
import { Link } from 'react-router-dom';

function Hike(props){
  function handleSavingHike(hikeId){
    const {dispatch} = props
    const action = {
      type: 'SELECT_HIKE',
      hikeId: hikeId
    }
    dispatch(action)
  }

  return(
    <div className='hike-module' onClick = {() => props.handleOpenModal(props.hikeId)}>
      <style jsx>{`
        .hike-module{
          height: 10vw;
          display: grid;
          grid-template-columns: 10vw 1fr;
          margin-bottom: 10px;
          background-color: #8ce6ff;
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
      `}</style>
      <div className="image">
        <img src={props.img}/>
      </div>
      <div className='hike-info'>
        <div className='hike-name'>
          <Link to={`/hike/${props.hikeId}`}>
            <strong>{props.name}</strong><br/>
          </Link>
        </div>
        Difficulty: {props.difficulty}<br/>
        {props.length} miles<br/>
        {props.gain} ft. elevation gain
        {props.$key}
      </div>
    </div>
  )
}
Hike.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  key: PropTypes.string,
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
export default connect()(Hike)
