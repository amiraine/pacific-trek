import selectedHikeReducer from './../../src/reducers/selected-hike-reducer';

describe('selectedHikeReducer', ()=>{
  test('should return default state if no action type is recognized', ()=>{
    expect(selectedHikeReducer({}, { type: null})).toEqual({});
  });
  test('should record which hike has been selected by user', ()=>{
    expect(selectedHikeReducer({}, { type: 'SELECT_HIKE', hikeId: 1})).toEqual(1);
  });
});
