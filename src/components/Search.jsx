import React from 'react';
import Hike from './Hike';
import PropTypes from 'prop-types';

function Search(props){
  console.log(props.hikeList.masterHikeList);
  return(
    <div>
      {Object.keys(props.hikeList.masterHikeList).map(function(hikeId){
        var hike = props.hikeList.masterHikeList[hikeId];
        console.log(hike);
        return <Hike
          name = {hike.name}
          start = {hike.start}
          end = {hike.end}
          type = {hike.type}
          length = {hike.length}
          gain = {hike.gain}
          difficulty = {hike.difficulty}
          season = {hike.season}
          family = {hike.family}
          crowded = {hike.crowded}
          features = {hike.features}
          key = {hikeId}
          hikeId = {hikeId}/>;
      })}
    </div>
  );
}
Search.propTypes = {
  hikeList: PropTypes.object,

}
export default Search;
