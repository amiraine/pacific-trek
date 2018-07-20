import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';
import {connect} from 'react-redux';

function Search(props){
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
        <SearchResults hikeList={props.hikeList}/>
      </div>
      <div className='map'>
        map goes here
      </div>
    </div>
  );
}
Search.propTypes = {
  hikeList: PropTypes.object
}


export default Search;
