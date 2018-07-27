import React from 'react';
import Hike from './Hike';
import PropTypes from 'prop-types';
import SearchFilters from './SearchFilters';
import HikeDetail from './HikeDetail';

function Search(props){
//declaring constants for less redundant code
  const listOfHikes = props.hikeList.masterHikeList;
  let hikeSelectionModule = <HikeDetail
    selectedHike = {props.selectedHike}
    hikeList = {props.hikeList.masterHikeList}/>
  const searchFilterModule = <SearchFilters
    onSearchDifficulty = {props.onDifficultyChange}
    searchDifficulty = {props.searchDifficulty}
    onDifficultyChange = {props.onDifficultyChange}
    searchLength = {props.searchLength}
    onLengthChange = {props.onLengthChange}
    searchText = {props.searchText}
    onTextChange = {props.onLengthChange}
    searchType = {props.searchType}
    onTypeChange = {props.onTypeChange}
    />
  const searchStyles = <style jsx>{`
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

  if(props.searchText ==='' && props.searchLength === '' && props.searchDifficulty === ''){
    return (
      <div className='search-wrapper transition-wrapper'>
        {searchStyles}
          <div className='search-results'>
            {searchFilterModule}
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
              {hikeSelectionModule}
            </div>
            <div className='map'>
            </div>
          </div>
        </div>
      )
  } else if(props.searchDifficulty!=''){
    return(
      <div className='search-wrapper transition-wrapper'>
        {searchStyles}
          <div className='search-results'>
            {searchFilterModule}
            {Object.keys(listOfHikes).filter(hikeId=> listOfHikes[hikeId].difficulty === props.searchDifficulty).map(function(hikeId){
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
              {hikeSelectionModule}
            </div>
            <div className='map'>
            </div>
          </div>
        </div>
    )
  } else if(props.searchLength === 'less4'){
    return (
      <div className='search-wrapper transition-wrapper'>
        {searchStyles}
        <div className='search-results'>
          {searchFilterModule}
          {Object.keys(listOfHikes).filter(hikeId=> listOfHikes[hikeId].length < 4).map(function(hikeId){
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
            {hikeSelectionModule}
          </div>
          <div className='map'>
          </div>
        </div>
      </div>
    )
  } else if(props.searchLength === '4+'){
    return(
      <div className='search-wrapper transition-wrapper'>
        {searchStyles}
        <div className='search-results'>
          {searchFilterModule}
          {Object.keys(listOfHikes).filter(hikeId=> listOfHikes[hikeId].length > 4).map(function(hikeId){
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
            {hikeSelectionModule}
          </div>
          <div className='map'>
          </div>
        </div>
      </div>
    )
//final else if doesn't work.
  } else if(props.searchType != ''){
    return(
      <div>
        type works
      </div>
    )
  }
}
Search.propTypes = {
  hikeList: PropTypes.object,
  searchText: PropTypes.string,
  searchLength: PropTypes.string,
  searchDifficulty: PropTypes.string,
  handleTextChange: PropTypes.func,
  handleLengthChange: PropTypes.func,
  handleDifficultyChange: PropTypes.func,
  onHikeSelection: PropTypes.func,
  onTypeChange: PropTypes.func,
  searchType: PropTypes.string
}
export default Search
