import React from 'react'
import Hike from './Hike'
import PropTypes from 'prop-types'

function SearchResults(props){
  return(
    <div>
      {Object.keys(props.hikeList.masterHikeList).map(function(hikeId){
        var hike = props.hikeList.masterHikeList[hikeId]
        return <Hike
          onClick = {props.handleUrlId(hikeId)}
          name = {hike.name}
          img = {hike.img}
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
          hikeId = {hikeId}/>
      })}
    </div>
  )
}
SearchResults.propTypes = {
  hikeList: PropTypes.object,
  handleUrlId: PropTypes.function
}
export default SearchResults;
