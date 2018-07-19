import React from 'react'
import family from '../../src/assets/images/family-icon.png';
import points from '../../src/assets/images/points.png';

import { Link } from 'react-router-dom'

function Browse(){
  return(
    <div className='wrapper browse-wrapper'>
      <style jsx>{`
        .browse-wrapper{
          display: flex;
          height: 70vh;
          padding: 75px;
          font-family: 'Alegreya Sans SC', sans-serif;
          flex-wrap: wrap;
        }
        .browse-icon-group img{
          max-height: 215px;
        }
        .browse-icon-group{
          text-align: center;
          margin: 25px;
        }
      `}</style>
      <div className='browse-icon-group'>
        <img src={family}/>
        <h1>Family-friendly</h1>
      </div>
      <div className='browse-icon-group'>
        <img src={points}/>
        <h1>Viewpoints</h1>
      </div>
    </div>
  )
}

export default Browse
