import React from 'react';
import PropTypes from 'prop-types';


function SearchFilters(props){
  let _text = null;
  let _diff = null;
  let _leng = null;
  let _type = null;

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
        .select-grid{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .results-banner{
          font-family: 'Alegreya Sans SC', sans-serif;
          color: white;
          background-color: #238a3a;
          padding: 8px;
          border-bottom: 8px solid #a0c949;
        }
      `}</style>
    <div className='search-filter-wrapper'>
      <form>
        <label for='search-criteria'>Find a hike</label><br/>
        <div className='text-filter'>
          <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
          </button>
          <input
            type='text'
            placeholder='Search'
            ref={(input)=>{_text = input;}}
            onChange = {props.onTextChange}
            />
        </div>
        <div className='select-grid'>
          <div className='select-wrapper'>
            <label>Difficulty</label><br/>
            <select
              ref={(input)=>{_diff = input;}}
              onChange = {props.onDifficultyChange}
              value ={props.searchDifficulty}
              >
              <option value =''>Select a difficulty</option>
              <option value = 'Easy'>Easy</option>
              <option value = 'Moderate'>Moderate</option>
              <option value = 'Difficult'>Difficult</option>
            </select>
          </div>
          <div className='select-wrapper'>
            <label>Length</label><br/>
            <select
              ref={(input) =>{_leng = input;}}
              onChange = {props.onLengthChange}
              value = {props.searchLength}>
              <option value=''>Select a length</option>
              <option value='less4'>Less than 4 miles</option>
              <option value='4+'>More than 4 miles</option>
            </select>
          </div>
          <div className='select-wrapper'>
            <label>Hike type</label><br/>
            <select
              ref={(input) => {_type = input;}}
              onChange = {props.onTypeChange}
              value={props.searchType}>
              <option value = ''>Select hike type</option>
              <option value = 'Out-and-Back'>Out-and-Back</option>
              <option value = 'Loop'>Loop</option>
              <option value = 'Lollipop'>Lollipop</option>
            </select>
          </div>
        </div>
      </form>
    </div>
      <div className='results-banner'>
        <p>RESULTS</p>
      </div>
    </div>
  )
}
SearchFilters.propTypes = {
  onDifficultyChange: PropTypes.func,
  searchDifficulty: PropTypes.string,
  onTypeChange: PropTypes.func,
  searchType: PropTypes.string,
  onLengthChange: PropTypes.func,
  searchLength: PropTypes.string,
  onTextChange: PropTypes.func,
  searchText: PropTypes.string
}
export default SearchFilters;
