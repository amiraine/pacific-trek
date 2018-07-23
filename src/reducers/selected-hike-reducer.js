import constants from './../constants';
const { c } = constants;

export default (state = {}, action) =>{
  switch (action.type){
    case c.SELECT_HIKE:
      return action.hikeId;
    default:
      return state;
  }
};
