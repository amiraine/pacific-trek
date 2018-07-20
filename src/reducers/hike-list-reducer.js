import constants from './../constants';
const { types } = constants;

export default (state = {}, action) =>{
  let newState;
  const { name, img, start, end, hikeType, length, gain, difficulty, season, family, crowded, features} = action;

  switch (action.type){
    case types.RECEIVE_HIKE:
      newState = Object.assign({}, state);
      newState[action.hike.id] = action.hike;
      return newState;

    case types.ADD_HIKE:
      newState = Object.assign({}, state, {
        [id]: {
          name: name,
          img: img,
          start: start,
          end: end,
          hikeType: hikeType,
          length: length,
          gain: gain,
          difficulty: difficulty,
          season: season,
          family: family,
          crowded: crowded,
          features: features,
        }
      });
      return newState;
    default:
      return state;
  }
};
