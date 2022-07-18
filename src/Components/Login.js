import "../Assets/allindex.css"
import React from "react";
const Login = () => {
  return (
    <>
      <form action="">
        <div className="Login_container">
          <div className="Left_side">
            <div className="round_1">
              <h1>Login</h1>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="passwprd" />
            </div>
            <button type="submit">Login</button>
            <div>
              <label>
                <input type="checkbox" />
                Remember me &nbsp;
              </label>
              <button type="Forget-Password"> Forget Password?</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
