import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  let today = new Date();
  let year = today.getFullYear();
  return(
    <div className='footer'>
      <style jsx>{`
        .footer{
          text-align: center;
          position: absolute;
          bottom: 0;
          height: 25px;
          width: 99%;
        }
      `}</style>
      <sub>©{year} PacificTrek & Ami Cooper <Link to='/admin'>add new hikes</Link></sub>
    </div>
  );
}
export default Footer;
