import React from 'react';
import { Link } from 'react-router-dom';
import trees from '../../src/assets/images/logo.svg';

function Navigation(){
  return(
    <div>
      <style jsx>{`
        img {
          max-width: 500px;
          position: relative;
          top: -260px;
          left: -50px;
          z-index: 1;
        }
        Link{
          text-decoration: none;
        }
        .logo{
          height: 1px;
        }
        .bar{
          display: flex;
          justify-content: space-between;
          max-width: 100vw;
          height: 120px;
          position: relative;
          top: 25px;
          background-color: #557D00;
          padding: 0 50px 0 500px;
        }
        .nav-link{
          line-height: 120px;
          z-index: 2;
          font-family: 'Alegreya Sans SC', sans-serif;
          weight: 500;
          font-size: 2em;
        }
      `}</style>

      <div className='logo'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <img src={trees}/>
        </Link>
      </div>
      <div className='bar'>
        <div className='nav-link'>
          <Link to='/browse' style={{ textDecoration: 'none', color: 'white' }}>Browse Hikes</Link>
        </div>
        <div className='nav-link'>
          <Link to='/search' style={{ textDecoration: 'none', color: 'white' }}>Search Hikes</Link>
        </div>
        <div className='nav-link'>
          <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Log in/Sign up</Link>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
