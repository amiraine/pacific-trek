import React from 'react';
import google from '../../src/assets/images/google.png';

function Login(){
  return(
    <div className='login-wrapper transition-wrapper'>
      <style jsx>{`
        .login-wrapper{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h2{
          font-family: sans-serif;

        }
        .login-module{
          background-color: #d8ffbf;
          height: 500px;
          width: 400px;
          border-radius: 5px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .login-module img{
          max-width: 200px;
        }
        .login-module input{
          width: 200px;
          padding: 3px;
          border-radius: 3px;
          border: 0;
          outline: none;
          margin: 10px;
        }
        .login-module button{
          width: 150px;
          padding: 10px;
          border: 0;
          background-color: #3cadff;
          color: white;
          font-size: 1em;
          border-radius: 5px;

        }
      `}</style>
      <div className='login-module'>
        <h2>Login</h2>
        <input type='text' placeholder='Email'/><br/>
        <input type='password' placeholder='Password'/><br/>
        <button>Sign in</button><br/>

        <img src={google}/>

      </div>
    </div>
  )
}

export default Login
