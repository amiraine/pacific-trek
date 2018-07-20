import constants from './../constants';
const {firebaseConfig, types} = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const hikes = firebase.database().ref('hikes');

export function addHike(_name, _img, _start, _end, _type, _length, _gain, _difficulty, _season, _family, _crowded, _features){
  return () => hikes.push({
    name: _name,
    img: _img,
    start: _start,
    end: _end,
    type: _type,
    length: _length,
    gain: _gain,
    difficulty: _difficulty,
    season: _season,
    family: _family,
    crowded: _crowded
    features: _features
  })
}

function receiveHike(hikeFromFirebase){
  return{
    type: types.RECEIVE_HIKE,
    hike: hikeFromFirebase
  };
}

export function watchFirebaseHikesRef(){
  return function(dispatch){
    hikes.on('child_added', data =>{
      const newHike = Object.assign(
        {},
        data.val(),
        {
          id : data.getKey(),
        }
      );
      dispatch(receiveHike(newHije))
    });
  }
}
