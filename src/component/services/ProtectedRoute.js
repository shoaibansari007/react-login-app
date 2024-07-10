import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));

  return isLoggedIn ? <Outlet /> : <Navigate to={"/register"} />;
};

export default ProtectedRoute;
