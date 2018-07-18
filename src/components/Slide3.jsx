import React from 'react'

function Slide3(){
  return(
    <div className='slide'>
      <style jsx>{`
        .slide{
          width: 100%;
          background-image: url('https://images.pexels.com/photos/172510/pexels-photo-172510.jpeg');
          max-height: 1500px;
          min-height: 50vh;
          background-position: bottom;
          background-attachment: fixed;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          font-size: 4em;
          font-family: 'Alegreya Sans SC', sans-serif;
          text-shadow: 2px 2px 5px black;
        }
      `}</style>
      <h1>Take a hike!</h1>
    </div>
  )
}
export default Slide3
