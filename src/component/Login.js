import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersList = JSON.parse(localStorage.getItem("users"));

    const userMatched = usersList.some(
      (el) => el.email === user.email && el.password === user.password
    );
    if (userMatched) {
      localStorage.setItem("loggedin", true);

      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
      />
      <button type="submit">Login</button>
      <p>{error && "Invalid Username or Password"}</p>
      <Link to={"/register"}>Don't have account ?</Link>
    </form>
  );
};

export default Login;
