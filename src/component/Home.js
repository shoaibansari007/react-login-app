import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div>
      <p className="welcome" style={{ textAlign: "center" }}>
        Welcome <br /> Home Page
      </p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Home;