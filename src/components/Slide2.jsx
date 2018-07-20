import React from 'react'
import { Link } from 'react-router-dom'

function Slide2(){
  return(
    <div className='slide two'>
      <style jsx>{`
        .two{
          background-image: url('http://kcbariatric.com/wp-content/uploads/2018/03/hiking.jpg');
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
