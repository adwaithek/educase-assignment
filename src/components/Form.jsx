import React, { useState } from "react";
import logo from "../image/react.png";
// import Input from "./Input";
import '../App.css'

import Login from "./Login";
const Form = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="container">
    {/* //Header Container or logo container */}
      <article>
        <img src={logo} alt="logo" className="logo" />
        <p className="logo_text">
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
      </article>

{/* //Main Container of Form Container */}

      <div>
        <div className="btn-container">
          <button type="button" className={ login ? 'btn active' : 'btn'} onClick={() => setLogin(true)}>
            Login
          </button>
          <button type="button" className={ !login ? 'btn active' : 'btn'}  onClick={() => setLogin(false)}>
            Signup
          </button>
        </div>


        {/* //Main Form where user enters detail */}

        <form className="form-center">
          <input type="email" placeholder="Email Address" className='form-Input' />
          <input type="password" placeholder="Password" className='form-Input' />
          {!login && <input type="password" placeholder="Confirm Password" className='form-Input' />}
          <button type="button" className="login-Button">
            {login ? "LOGIN" : "SIGNUP"}
          </button>
          {login && <p className="forgot_password">Forgot Password?</p>}
          <p className="loginWith">
            {login ? "or login with" : "or signup with"}
          </p>
        </form>

{/* //Login OPtions like google facebook twitter */}

        <Login/>
      </div>
    </div>
  );
};

export default Form;