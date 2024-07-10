import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    userId: nanoid(),
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUserList = JSON.parse(localStorage.getItem("users")) || [];

    const curUserEmail = user.email;
    const userExists = storedUserList.some((el) => el.email === curUserEmail);

    if (userExists) {
      setError(true);
    } else {
      const updatedUserList = [...storedUserList, user];
      localStorage.setItem("users", JSON.stringify(updatedUserList));
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Sign Up</h1>
      <input
        name="name"
        type="text"
        placeholder="User Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
      <p>{error && "User already exist"}</p>
      <Link to={"/login"}>Already have account ?</Link>
    </form>
  );
};

export default SignUp;
