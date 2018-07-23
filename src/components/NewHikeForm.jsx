import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import constants from './../constants'
const { c } = constants
import { addHike } from './../actions/index'

function NewHikeForm(props){
  let _name = null;
  let _img = null;
  let _start = null;
  let _end = null;
  let _type = null;
  let _length = null;
  let _gain = null;
  let _difficulty = null;
  let _season = null;
  let _family = null;
  let _crowded  = null;
  let _fees = null;
  let _features = null;

  function handleNewHikeSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addHike(_name.value, _img.value, _start.value, _end.value, _type.value, parseFloat(_length.value), parseInt(_gain.value), _difficulty.value, _season.value.split(', '), _family.value, _crowded.value, _features.value.split(', ')));

    _name.value = '';
    _img.value = '';
    _start.value = '';
    _end.value = '';
    _type.value = '';
    _length.value = '';
    _gain.value = '';
    _difficulty.value = '';
    _season.value = ''
    _family.value = '';
    _crowded.value = '';
    _features.value = '';
  }

  return(
    <div className='form-container'>
      <style>{`
        .form-container{
          text-align:center;
          padding-top:200px;
        }
      `}</style>
      <form onSubmit={handleNewHikeSubmission}>
        <input
          required
          type='text'
          id='name'
          placeholder='Hike name'
          ref={(input) => {_name = input}}/><br/>
        <input
          required
          type = 'text'
          id = 'img'
          placeholder = 'image url'
          ref = {(input) => {_img = input}}/><br/>
        <input
          required
          type='text'
          id='start'
          placeholder='Start point'
          ref={(input) => {_start = input}}/><br/>
        <input
          required
          type='text'
          id='end'
          placeholder='End point'
          ref={(input) => {_end = input}}/><br/>
        <select required id='type' ref={(input) => {_type = input}}>
          <option disabled>hike type</option>
          <option value='Out-and-back'>Out-and-back</option>
          <option value='Loop'>Loop</option>
          <option value='Lollipop'>Lollipop</option>
          <option value='Point-to-point'>Point-to-point</option>
        </select><br/>
        <input
          required
          type='text'
          id='length'
          placeholder='Distance'
          ref={(input) => {_length = input}}/><br/>
        <input
          required
          type='text'
          id='gain'
          placeholder='Elevation gain'
          ref={(input) => {_gain = input}}/><br/>
        <select required id='difficulty' ref={(input) => {_difficulty = input}}>
          <option value='Easy'>Easy</option>
          <option value='Moderate'>Moderate</option>
          <option value='Difficult'>Difficult</option>
        </select><br/>
        <input
          required
          type='text'
          id='season'
          placeholder='Seasons lowercase'
          ref={(input) => {_season = input}}/><br/>
        <select required id='family' ref={(input) => {_family = input}}>
          <option disabled>Family friendly?</option>
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select><br/>
        <select required id='crowded' ref={(input) => {_crowded = input}}>
          <option disabled>Crowded?</option>
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select><br/>
        <input
          required
          type='text'
          id='features'
          ref={(input) => {_features = input}}
          placeholder='Features, lower-case separated by commas and spaces'/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default connect()(NewHikeForm)
