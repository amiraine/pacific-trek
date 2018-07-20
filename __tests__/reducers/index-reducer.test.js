import rootReducer from './../../src/reducers/index';
import selectedHikeReducer from './../../src/reducers/selected-hike-reducer';
import hikeListReducer from './../../src/reducers/hike-list-reducer';
import {createStore} from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      masterHikeList: {},
      selectedHike: {}
    });
  });

  test('should contain hikeListReducer logic', () => {
    expect(store.getState().masterHikeList).toEqual(hikeListReducer(undefined, {type:null}));
  });

  test('should contain selectedHikeReducer logic', () => {
    expect(store.getState().selectedHike).toEqual(selectedHikeReducer(undefined, {type: null}));
  });

});
