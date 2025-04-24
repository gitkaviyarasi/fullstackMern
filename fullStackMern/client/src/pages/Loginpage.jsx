import { useState, FormEvent, ChangeEvent } from "react";

import Auth from "../utils/auth";
import { login } from "../api/authapi";

import "../assets/styles/Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null); // State for error messages

  const createAccount = () => {
    window.location.href = "/CreateAccount";
  };

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    console.log(e.target);
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      if (err) {
        setError(err.message || "An error occurred"); // Display error from API response
        console.error("Failed to login all error", err);
        setError("Username or password is incorrect. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
        //console.error('Failed to l mesage', err.response.data.message);
        console.log("Failed to login else error", err);
      }
      console.error("Failed to login outer loop", err);
      setLoginData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        {/* <h1>Sign In</h1> */}
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={loginData.username || ""}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password || ""}
          onChange={handleChange}
        />
        <button type="submit" className="lsignin">
          Sign in
        </button>
        <button
          type="button"
          onClick={createAccount}
          className="lcreateaccount"
        >
          Create An Account{" "}
        </button>
        {error && <p className="loginerror">{error}</p>}{" "}
        {/* Display error message */}
      </form>
    </div>
  );
};

export default Login;
