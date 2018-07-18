import React from 'react'
import Hike from './Hike'
import PropTypes from 'prop-types'

function Search(props){
  console.log(props.hikeList.masterHikeList);
  return(
    <div className='search-wrapper'>
      <style>{`
        .search-wrapper{
          display: grid;
          grid-template-columns: 1fr 2fr;
          height: 75vh;
        }
        .search-results{
          overflow-y: auto;
        }
      `}</style>
      <div className='search-results'>
        {Object.keys(props.hikeList.masterHikeList).map(function(hikeId){
          var hike = props.hikeList.masterHikeList[hikeId]
          return <Hike
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
      <div className='map'>
        map goes here
      </div>
    </div>
  )
}
Search.propTypes = {
  hikeList: PropTypes.object,
}
export default Search
