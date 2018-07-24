import constants from './../constants';
const { c } = constants;

const initialState = {
  
}
export default (state = {}, action) =>{
  switch(action.type){
    case c.SEARCH:
    const {value} = action;
    const hikeList = state.contents.filter((val) => val.includes(value));
    return {state, value, works};
  }
  default:
    return state;
}
