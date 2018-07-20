import constants from './../constants'
const { c } = constants

export default (state = {}, action) =>{
  switch (action.type){
  case c.ADD_HIKE:
    const { name, img, start, end, type, length, gain, difficulty, season, family, crowded, features } = action
    let newState = Object.assign({}, state, {
      [id]: {
        name: name,
        img: img,
        start: start,
        end: end,
        type: type,
        length: length,
        gain: gain,
        difficulty: difficulty,
        season: season,
        family: family,
        crowded: crowded,
        features: features
      }
    })
    return newState;
  default:
    return state;
  }
};
  //
  // case c.RECEIVE_HIKE:
  //   newState = Object.assign({}, state)
  //   newState[action.hike.id] = action.hike
  //   return newState
  //
  // default:
  //   return state
  // }
