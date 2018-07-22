import constants from './../constants'
const { firebaseConfig, c } = constants
import firebase from 'firebase'

firebase.initializeApp(firebaseConfig);
const hikes = firebase.database().ref('hikes');

export function addHike(_name, _img, _start, _end, _hikeType, _length, _gain, _difficulty, _season, _family, _crowded, _features){
  return () => hikes.push({
    name: _name,
    img: _img,
    start: _start,
    end: _end,
    hikeType: _hikeType,
    length: _length,
    gain: _gain,
    difficulty: _difficulty,
    season: _season,
    family: _family,
    crowded: _crowded,
    features: _features
  });
}

function receiveHike(hikeFromFirebase){
  return{
    type: c.RECEIVE_HIKE,
    hike: hikeFromFirebase
  };
}

export function watchFirebaseHikesRef(){
  return function(dispatch){
    hikes.on('child_added', data =>{
      const newHike = Object.assign(
        {}, data.val(), { id: data.getKey(),
      });
      // console.log(newHike); -- this log actually retrieves every hike object
      dispatch(receiveHike(newHike));
    });
  };
}
