import constants from './../constants';
const { c } = constants;

export default (state = {}, action) =>{
  let newState;
  const { name, img, start, end, hikeType, length, gain, difficulty, season, family, crowded, features } = action;

  switch (action.type){
    case c.RECEIVE_HIKE:
      newState = Object.assign({}, state);
      newState[action.hike.id] = action.hike;
      return newState;

    case c.ADD_HIKE:
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
