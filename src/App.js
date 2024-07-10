import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import ProtectedRoute from "./component/services/ProtectedRoute";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        margin: "0",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="*"
            element={<div className="not-found">404 - Page Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <SignOut /> */}
    </div>
  );
}

export default App;
