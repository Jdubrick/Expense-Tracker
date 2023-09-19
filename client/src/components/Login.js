import React from "react";
import { useState } from "react";

const Login = () => {
  const [onSignup, setOnSignup] = useState(false);

  return <div>{onSignup ? <LoginScreen /> : <SignupScreen />}</div>;
};

const LoginScreen = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="" className="login-signup">
        <div className="input-boxes">
          <label className="input-labels">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="input-boxes">
          <label className="input-labels">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const SignupScreen = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form action="" className="login-signup">
        <div className="input-boxes">
          <label className="input-labels">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="input-boxes">
          <label className="input-labels">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="input-boxes">
          <label className="input-labels">Confirm Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
