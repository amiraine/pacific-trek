import React from 'react';
import Hike from './Hike';
import PropTypes from 'prop-types';
import SearchFilters from './SearchFilters';
import HikeDetail from './HikeDetail';

function Search(props){

  const listOfHikes = props.hikeList.masterHikeList;


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
        .search-results::-webkit-scrollbar {
          width: 2px;
        }
        .map{
          background-image: url('https://i.imgur.com/HaQsbuu.png');
          background-size: 100%;
          background-position: center right;
          max-height: 900px;
          min-height: 56vh;
        }
      `}</style>
      <div className='search-results'>
        <SearchFilters
          onSearchDifficulty = {props.onDifficultyChange}
          searchDifficulty = {props.searchDifficulty}
          onDifficultyChange = {props.onDifficultyChange}
          searchLength = {props.searchLength}
          onLengthChange = {props.onLengthChange}
          searchText = {props.searchText}
          onTextChange = {props.onLengthChange}
          />
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
      <div>
        <div className='selected-hike'>
          <HikeDetail
          selectedHike = {props.selectedHike}
          hikeList = {props.hikeList.masterHikeList}/>
        </div>
        <div className='map'>
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
