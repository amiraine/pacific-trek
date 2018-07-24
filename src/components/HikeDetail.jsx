import React from 'react';
import PropTypes from 'prop-types';

function HikeDetail(props){
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
          .text-details{
            padding: 20px;
          }
        `}</style>
        <div>
          <img src={props.hikeList[props.selectedHike].img}/>
        </div>
        <div className = 'text-details'>
          <h2>{props.hikeList[props.selectedHike].name}</h2>
          <p>Starting point: {props.hikeList[props.selectedHike].start}</p>
          <p>Ending point: {props.hikeList[props.selectedHike].end}</p>
          <p>Trail type: {props.hikeList[props.selectedHike].type}</p>
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
