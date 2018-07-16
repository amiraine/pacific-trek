import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
import { c } = constants;

function NewHikeForm(props){
  let _name = null;
  let _start = null;
  let _end = null;
  let _type = null;
  let _length = null;
  let _gain = null;
  let _difficulty = null;
  let _season = null;
  let _family = null;
  let _crowded  = null;
  let _features = null;

  function handleNewHikeSubmission(e){
    const { dispatch } = props;
    e.preventDefault();
    const action = {
      type: c.ADD_HIKE,
      id: v4(),
      name: _name.value,
      start: _start.value,
      end: _end.value,
      type: _type.value,
      length: _length.value,
      gain: _gain.value,
      difficulty: _difficulty.value,
      season: _season.value,
      family: _family.value,
      crowded: _crowded.value,
      features: _features.value.split(', ')
    };
    dispatch(action);
    name: _name.value = '';
    start: _start.value = '';
    end: _end.value = '';
    type: _type.value = '';
    length: _length.value = '';
    gain: _gain.value = '';
    difficulty: _difficulty.value = '';
    season: _season.value = '';
    family: _family.value = '';
    crowded: _crowded.value = '';
    features: _features.value = '';
  }
  return(
    <div className='form-container'>
      <style>{`
        .form-container{
          margin-left: auto;
          width: 50vw;
          padding-top: 300px;
        }
      `}</style>
      <form onSubmit={handleNewHikeSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Hike name'
          ref={(input) => {_name = input;}}/><br/>
        <input
          type='text'
          id='start'
          placeholder='Start point'
          ref={(input) => {_start = input}}/><br/>
        <input
          type='text'
          id='end'
          placeholder='End point'
          ref={(input) => {_end = input}}/><br/>
        <input
          type='text'
          id='length'
          placeholder='Distance'
          ref={(input) => {_length = input}}/><br/>
        <input
          type='text'
          id='gain'
          placeholder='Elevation gain'
          ref={(input) => {_gain = input}}/><br/>
        <input
          type='text'
          id='difficulty'
          placeholder='Difficulty'
          ref={(input) => {_difficulty = input}}/><br/>
        <input
          type='text'
          id='season'
          placeholder='Season'
          ref={(input) => {_season = input}}/><br/>
        <select id='family' ref={(input) => {_family = input}}>
          <option disabled>Family friendly?</option>
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select><br/>
        <select id='crowded' ref={(input) => {_crowded = input}}>
          <option disabled>Crowded?</option>
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select><br/>
        <input
          type='text'
          id='features'
          placeholder='Features, lower-case separated by commas and spaces'/><br/>
        <button type='submit' id='submit'>Submit</button>
      </form>
    </div>
  )
}
export default connect()(NewHikeForm);
