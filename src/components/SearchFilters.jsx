import React from 'react';
import PropTypes from 'prop-types';


function SearchFilters(){
  return(
    <div>
      <style jsx>{`
        .search-filter-wrapper{
          padding: 20px;
          font-family: 'Helvetica Neue', sans-serif;
          background-color: #a0c949;
        }
        input{
          width: 70%;
          font-size: 1em;
          padding: 6px 0px 6px 10px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border: solid 1px grey;
          border-left: 0;
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
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .text-filter{
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .radio-title-grid{
          display: grid;
          grid-template-columns: 120px 1fr 1fr;
        }
        .radio-body-grid{
          display: grid;
          grid-template-columns: 18px 102px 18px 2fr 18px 2fr;
        }
        .results-banner{
          font-family: 'Alegreya Sans SC', sans-serif;
          color: white;
          background-color: #238a3a;
          padding: 8px;
        }
      `}</style>
    <div className='search-filter-wrapper'>
      <label for='search-criteria'>Find a hike</label><br/>
      <div className='text-filter'>
        <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg></button>
        <input type='text'
          placeholder='Search'/>
      </div>
      <div className='radio-title-grid'>
        <div className='radio-column-title'>
          <p>Difficulty</p>
        </div>
        <div className='radio-column-title'>
          <p>Length</p>
        </div>
        <div className='radio-column-title'>
          <p>Trail Features</p>
        </div>
      </div>
      <div className='radio-body-grid'>
        <div className='radio-buttons'>
          <input type='radio'/>
          <input type='radio'/>
          <input type='radio'/>
        </div>
        <div className='radio-label'>
          <p>Easy</p>
          <p>Moderate</p>
          <p>Hard</p>
        </div>
        <div className='radio-buttons'>
          <input type='radio'/>
          <input type='radio'/>
          <input type='radio'/>
          <input type='radio'/>
        </div>
        <div className='radio-label'>
          <p>Less than 2 miles</p>
          <p>2 to 5 miles</p>
          <p>5 to 7 miles</p>
          <p>More than 7 miles</p>
        </div>
        <div className='radio-buttons'>
          <input type='checkbox'/>
          <input type='checkbox'/>
          <input type='checkbox'/>
          <input type='checkbox'/>
          <input type='checkbox'/>
          <input type='checkbox'/>
        </div>
        <div className='radio-label'>
          <p>Pet-Friendly</p>
          <p>Waterfalls</p>
          <p>Wildlife</p>
          <p>Viewpoint</p>
          <p>Old Growth</p>
          <p>Fishing</p>
        </div>
      </div>
    </div>
      <div className='results-banner'>
        <p>RESULTS</p>
      </div>
    </div>
  )
}
export default SearchFilters;
