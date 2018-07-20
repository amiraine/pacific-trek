import hikeListReducer from './../../src/reducers/hike-list-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe('hikeListReducer', ()=>{
  let action;
  const sampleHikeData = {
    name: 'Triple Falls Loop',
    img: 'imagestring',
    start: 'somewhere in the gorge',
    end: 'somewhere in the gorge',
    type: 'loop',
    length: 3.5,
    gain: 200,
    difficulty: 'Easy',
    season: 'spring',
    family: 'true',
    crowded: 'true',
    features: 'waterfall',
    id: 'longstringfromfirebase'
  };

  test('should return default state if no action type is recognized', () => {
    expect(hikeListReducer({}, {type: null})).toEqual({});
  });

  test('should add new hike date to masterHikeList', () =>{
    const { name, img, start, end, type, length, gain, difficulty, season, family, crowded, features, id } = sampleHikeData;
    action = {
      type: c.ADD_HIKE,
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
    };
    expect(hikeListReducer({}, action)).toEqual({
      [id] : {
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
  });

});
