export default (state = {}, action) =>{
  switch (action.type){
    case 'SELECT_HIKE':
      return action.hikeId;
    default:
      return state;
  }
};
