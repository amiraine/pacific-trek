import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  return(
    <div>
      <h1>Oops! The page you're trying to access does not exist</h1>
      <Link to="/"><h3>Click here to return to the homepage.</h3></Link>
    </div>
  )
}
