import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="left">
        <h1 className="title">Board.</h1>
      </div>
      <div className="right">
        <div className="right-container">
          <div className="title">Sign In</div>
          <div className="title-desc">Sign in to your account</div>
          <div className="sign-in-options">
            <div className="google-sign-in">
            <img src="./google-icon.png" alt="google-icon" />
              <div>Sign in with Google</div>
            </div>
            <div className="apple-sign-in">
              <img src="./apple-icon.png" alt="apple-icon" />
              <div>Sign in with Apple</div>
            </div>
          </div>
          <div className="simple-signon-container">
            <form>
              <div className="email-field">
                <div className="email-label">Email or Username</div>
                <input type="text" className="text-input" />
              </div>
              <div className="password-field">
                <div className="email-label" >Password</div>
                <input type="password" className="text-input" />
              </div>
              <div className="password-forget">
                Forgot password?
              </div>
              <button type="submit" className="primary-btn">
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="register-link">
          Don't have an account? <span>Register here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
