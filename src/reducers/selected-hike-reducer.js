import constants from './../constants';
const { types } = constants;

export default (state = {}, action) =>{
  switch (action.type){
    case types.SELECT_HIKE:
      return action.hikeId;
    default:
      return state;
  }
};
