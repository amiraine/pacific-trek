export default (state = {}, action) =>{
  switch (action.type){
  case 'ADD_HIKE':
    const { name, img, start, end, type, length, gain, difficulty, season, family, crowded, features } = action;
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
        features: features,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
