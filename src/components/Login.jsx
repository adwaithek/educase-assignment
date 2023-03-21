import React from 'react'
import '../App.css'
 import google from "../image/google.svg";
 import facebook from "../image/facebook.svg";
 import twitter from "../image/twitter.svg";
const Login = () => {
  return (
    <div className="login-Options">
          <div className="loginIcons">
            <div className="icon">
              <img src={google} alt="google" />
            </div>
            <div className="icon">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="icon">
              <img src={twitter} alt="twitter" />
            </div>
          </div>
         <p className="form-Text">
            Don't have an Account? <span>Create new now!</span>
          </p>
          <p className="form-Text">
            By signing up, you are agree with our
            <span className="TandC">Term & Conditions</span>
          </p>
        </div>
  )
}

export default Login