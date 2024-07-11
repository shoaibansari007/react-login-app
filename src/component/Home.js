import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const curUser = JSON.parse(localStorage.getItem("currentUser"));
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div>
      <p className="welcome" style={{ textAlign: "center" }}>
        Welcome <br />{" "}
        <span style={{ color: "orange", fontSize: "60px" }}>
          {curUser[0].name}
        </span>
      </p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Home;
