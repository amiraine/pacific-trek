import hikeListReducer from './hike-list-reducer';
import selectedHikeReducer from './selected-hike-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterHikeList: hikeListReducer,
  selectedHike: selectedHikeReducer
});

export default rootReducer;
