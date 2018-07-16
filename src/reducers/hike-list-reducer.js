import constants from './../constants';
const { c } = constants;

export default (state = {}, action) =>{
  switch (action.type){
  case 'ADD_HIKE':
    const { name, start, end, type, length, gain, difficulty, season, family, crowded, features } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        name: name,
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
    });
    return newState;
  default:
    return state;
  }
};
