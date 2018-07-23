import React from 'react';
import Hike from './Hike';
import PropTypes from 'prop-types';
import SearchFilters from './SearchFilters';
function Search(props){
  // function searchingFor(term){
  //   return function(x){
  //     return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  //   }
  // }
  const listOfHikes = props.hikeList.masterHikeList;
  const hikeListArray = Object.values(props.hikeList.masterHikeList);

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
  // searchText: PropTypes.string,
  // searchHandler: PropTypes.func
}
export default Search
