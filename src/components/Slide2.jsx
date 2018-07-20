import React from 'react'
import { Link } from 'react-router-dom'

function Slide2(){
  return(
    <div className='slide'>
      <style jsx>{`
        .slide{
          width: 100%;
          background-image: url('http://kcbariatric.com/wp-content/uploads/2018/03/hiking.jpg');
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
      <Link to='/guide' style={{ textDecoration: 'none', color: 'white'}}>
        <h1>New to this site?</h1>
        <h2>Click here to check out our guide</h2>
      </Link>
    </div>
  )
}
export default Slide2
