import React, { useContext } from "react";
import Navbar from "./Navbar";
import { LoginContext } from "./Context/LoginContext";

function Login() {
  const { updateLogin } = useContext(LoginContext);
  return (
    <>
      <Navbar />
      <div className="login-form">
        <label htmlFor="" className="e-mail">
          E-mail
        </label>
        <input type="text" className="name" />
        <label htmlFor="" className="password">
          Password
        </label>
        <input type="password" className="password" />
        <button className="log-in" onClick={() => updateLogin(true)}>
          Log In
        </button>
      </div>
    </>
  );
}

export default Login;
