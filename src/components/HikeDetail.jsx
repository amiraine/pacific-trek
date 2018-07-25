import React from 'react';
import PropTypes from 'prop-types';

function HikeDetail(props){
  const INLINE = {
    textAlign: 'center'
  }
  if(props.selectedHike === null){
    return(
      <div className='hike-detail none-selected'>
        <style jsx>{`
          .none-selected{
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      <h2>No hike selected. Click a hike to show its details</h2>
      </div>
    )
  } else {
    return (
      <div className='hike-detail all-details'>
        <style jsx>{`
          .all-details{
            display: grid;
            grid-template-columns: 236px 1fr;
          }
          .all-details img{
            object-fit: cover;
            height: 236px;
            width: 236px;
          }
          .detail-module{
            padding: 20px;
          }
          .text-details{
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        `}</style>
        <div>
          <img src={props.hikeList[props.selectedHike].img}/>
        </div>
        <div className = 'detail-module'>
          <h2>{props.hikeList[props.selectedHike].name}</h2>
          <div className='text-details'>
            <h4>Starting point: {props.hikeList[props.selectedHike].start}</h4>
            <h4>Ending point: {props.hikeList[props.selectedHike].end}</h4>
            <h4>Difficulty: {props.hikeList[props.selectedHike].difficulty}</h4>
            <h4>Trail type: {props.hikeList[props.selectedHike].type}</h4>
            <h4>Length: {props.hikeList[props.selectedHike].length} miles</h4>
            <h4>Elevation gain: {props.hikeList[props.selectedHike].gain} feet</h4>
            <h4>Best seasons: {props.hikeList[props.selectedHike].season.join(', ')}</h4>
            <h4>Family-friendly: {props.hikeList[props.selectedHike].family}</h4>
            <h4>Crowded: {props.hikeList[props.selectedHike].crowded}</h4>
          </div>
          <h4 style={INLINE}>Notable features: {props.hikeList[props.selectedHike].features.join(', ')}</h4>
        </div>
      </div>
    );
  }
}

HikeDetail.propTypes = {
  hikeList: PropTypes.object,
  selectedHike: PropTypes.string
};

export default HikeDetail;
