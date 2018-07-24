import React from 'react';
import Hike from './Hike';
import PropTypes from 'prop-types';
import SearchFilters from './SearchFilters';
import HikeDetail from './HikeDetail';

function Search(props){

  const listOfHikes = props.hikeList.masterHikeList;

  let currentHike = null;
  if(props.selectedHike != null ){
    <HikeDetail selectedHike = {props.selectedHike}/>
  }

  return(
    <div className='search-wrapper transition-wrapper'>
      <style>{`
        .search-wrapper{
          display: grid;
          grid-template-columns: 1fr 2fr;
          height: 75vh;
        }
        .search-results{
          overflow-y: auto;
        }
        .search-results::webkit-scrollbar {
          width: 0;
        }
      `}</style>
      <div className='search-results'>
        <SearchFilters/>
        {Object.keys(listOfHikes).map(function(hikeId){
          var hike = listOfHikes[hikeId];
          return <Hike
            onHikeSelection = {props.onHikeSelection}
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
            hikeId = {hikeId}
            />
        })}
      </div>
      <div className='map'>
        <div className='selected-hike'>
          {currentHike}
        </div>
      </div>
    </div>
  )
}
Search.propTypes = {
  hikeList: PropTypes.object,
  searchText: PropTypes.string,
  searchLength: PropTypes.number,
  searchDifficulty: PropTypes.string,
  handleTextChange: PropTypes.func,
  handleLengthChange: PropTypes.func,
  handleDifficultyChange: PropTypes.func,
  onHikeSelection: PropTypes.func
}
export default Search
