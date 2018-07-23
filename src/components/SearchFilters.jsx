import React from 'react';
import PropTypes from 'prop-types';


function SearchFilters(){
  return(
    <div className='search-filter-wrapper'>
      <style jsx>{`
        .search-filter-wrapper{
          height: 200px;
          padding-left: 20px;
        }
        input{
          width: 70%;
          font-size: 1em;
          padding: 5px 0px;
        }
        svg{
          height: 20px;
          width: 20px;
        }
        button{
          height: 32px;
          width: 46px;
          padding: auto;
          background-color: #3cadff;
          border: transparent;
        }
        .text-filter{
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .radio-grid{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}</style>
        <label for='search-criteria'>Find a hike</label><br/>
      <div className='text-filter'>
        <input type='text'
          placeholder='Search'/>
        <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg></button>
      </div>
      <div className='radio-grid'>
        <div>
          
        </div>
      </div>
    </div>
  )
}
export default SearchFilters;
