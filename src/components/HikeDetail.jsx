import React from 'react';
import PropTypes from 'prop-types';
import Error404 from './Error404';
function HikeDetail(props){
  const currentLocation = props.urlId;
  const currentHikeObject = props.hikeList.masterHikeList;
  console.log(currentHikeObject);
  // Solution with a for loop
  // for(var i = 0; i < props.hikeList.length; )
  // add this conditional
  // if(props.hikeList.hikeId != currentLocation){
  //   return(
  //     <Error404/>
  //   );
  // } else {
  //   return(
  //     <div>
  //       <h1>{props.hikeList.name}</h1>
  //     </div>
  //   );
  // };
  return(
    <div>
      tet
    </div>
  )
}
HikeDetail.propTypes = {
  resetUrlId: PropTypes.func,
  hikeList: PropTypes.object
}
export default HikeDetail;
