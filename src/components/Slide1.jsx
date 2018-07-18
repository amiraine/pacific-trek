import React from 'react'

function Slide1(){
  return(
    <div className='slide'>
      <style jsx>{`
        .slide{
          width: 100%;
          background-image: url('https://images.pexels.com/photos/213825/pexels-photo-213825.jpeg');
          max-height: 1500px;
          min-height: 50vh;
          background-position: center bottom;
          background-attachment: fixed;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          font-size: 4em;
          font-family: 'Alegreya Sans SC', sans-serif;
        }
      `}</style>
      <h1>Explore the Pacific Northwest</h1>
    </div>
  )
}
export default Slide1
