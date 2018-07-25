import React from 'react';
import map from '../../src/assets/images/map.png';
import food from '../../src/assets/images/food.png';
import litter from '../../src/assets/images/litter.png';
import shoe from '../../src/assets/images/shoe.png';
import trail from '../../src/assets/images/trail.png';

function Guide(){
  return(
    <div className='transition-wrapper'>
      <style jsx>{`
        h1{
          font-family: 'Alegreya Sans SC', sans-serif;
        }
        h2{
          font-family: 'Helvetica Neue', sans-serif;
        }
        h1, h3, .info-module{
          text-align: center;
        }
        .guide-banner{
          background-color: #557D00;
          padding: 30px 0;
          color: white;
        }
        .guide{
          min-height: 70vh;
          padding: 50px;
          margin: 0 auto 25px auto;
          font-family: 'Helvetica Neue', sans-serif;
          display: flex;
          flex-wrap: wrap;
        }
        .info-module{
          width: 400px;
          min-height: 320px;
          background-color: #bee8e8;
          margin: 20px;
          padding: 10px;
        }
        .info-module h2{
          background-color: #61cccc;
          padding: 5px;
          margin-bottom: 10px;
        }
        .info-module img{
          object-fit: cover;
          height: 103px;
        }
      `}</style>
      <div className='guide-banner'>
        <h1>A Primer on Hiking</h1>
        <h3>Hiking can be a great hobby for both experiencing nature and getting some exercise, but it can be dangerous, so it's important to be prepared.</h3>
      </div>
      <div className='guide wrapper'>
        <div className='info-module'>
          <h2>Double-check trail information</h2>
          <img src={map}/>
          <h5>This website is maintained by one person and some information, such as if the trail is currently open may not be current. You can check the homepage to see when the site was last updated.</h5>
          <a href="https://gorgefriends.org/hike-the-gorge/trail-alerts.html" target='blank'>Click here to see trail alerts</a><br/>
        </div>
        <div className='info-module'>
          <h2>Wear comfortable clothing</h2>
          <img src={shoe}/>
          <h5>Hiking doesn't always have to be physically strenuous but it's important to still be dressed comfortably and appropriately for the weather.</h5>
        </div>
        <div className='info-module'>
          <h2>Bring water and food</h2>
          <img src={food}/>
          <h5>Hiking is no fun if you get dehydrated or hungry along the way! Bring a full water bottle and some snacks.</h5>
        </div>
        <div className='info-module'>
          <h2>Don't litter</h2>
          <img src={litter}/>
          <h5>Only throw away your garbage in designated trash cans or take it back with you to throw away at home.</h5>
        </div>
        <div className='info-module'>
          <h2>Stay on the trail</h2>
          <img src={trail}/>
          <h5>Going off the trail could land you in a patch of poison oak or cause erosion and damage the trail for your fellow hikers. Be conscientious and stay on the designated path.</h5>
        </div>
      </div>
    </div>
  )
}

export default Guide
