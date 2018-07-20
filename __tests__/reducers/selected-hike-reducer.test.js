import selectedHikeReducer from './../../src/reducers/selected-hike-reducer';
import c from './../../src/constants';


describe('selectedHikeReducer', ()=>{
  test('should return default state if no action type is recognized', ()=>{
    expect(selectedHikeReducer({}, { type: null})).toEqual({});
  });
  test('should record which hike has been selected by user', ()=>{
    expect(selectedHikeReducer({}, { type: c.SELECT_HIKE, hikeId: 1})).toEqual(1);
  });
});
