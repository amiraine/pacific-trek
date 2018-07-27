import React from 'react';
import { Link } from 'react-router-dom';
import family from '../../src/assets/images/family.png';
import viewpoints from '../../src/assets/images/viewpoint.png';
import wildflowers from '../../src/assets/images/wildflowers.png';
import petfriendly from '../../src/assets/images/petfriendly.png';
import waterfall from '../../src/assets/images/waterfall.png';
import backpack from '../../src/assets/images/backpack.png';
import free from '../../src/assets/images/free.png';
function Browse(){
  return(
    <div className='wrapper browse-wrapper transition-wrapper'>
      <style jsx>{`
        .browse-wrapper{
          display: flex;
          font-family: 'Alegreya Sans SC', sans-serif;
          flex-wrap: wrap;
          align-items: center;
        }
        .browse-icon-group img{
          max-height: 200px;
        }
        .browse-icon-group{
          text-align: center;
          margin: 25px;

        }
      `}</style>
      <div className='browse-icon-group'>
        <img src={family} on/>
        <h1>Family-friendly</h1>
      </div>
      <div className='browse-icon-group'>
        <img src={viewpoints}/>
        <h1>Viewpoints</h1>
      </div>
      <div className='browse-icon-group'>
        <img src={wildflowers}/>
        <h1>Wildflowers</h1>
      </div>
      <div className='browse-icon-group'>
        <img src={petfriendly}/>
        <h1>Pet-Friendly</h1>
      </div>
      <div className='browse-icon-group'>
        <img src={waterfall}/>
        <h1>Waterfalls</h1>
      </div>
      <div className='browse-icon-group'>
        <img src={backpack}/>
        <h1>Backpacking</h1>
      </div>
      <div className='browse-icon-group'>
        <img src={free}/>
        <h1>No fees</h1>
      </div>
    </div>
  )
}

export default Browse
