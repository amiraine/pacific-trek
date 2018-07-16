import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const hikes = firebase.database().ref('hikes');

export function addHike(_name, _start, _end, _type, _length, _gain, _difficulty, _season, _family, _crowded, _features){
  return ()=> hikes.push({
    name = _name,
    start = _start,
    end = _end,
    type = _type,
    length = _length,
    gain = _gain,
    difficulty = _difficulty,
    season = _season,
    family = _family,
    crowded = _crowded,
    features = _features
  });
}
