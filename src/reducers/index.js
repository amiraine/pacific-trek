import hikeListReducer from './hike-list-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  masterHikeList: hikeListReducer
})

export default rootReducer
