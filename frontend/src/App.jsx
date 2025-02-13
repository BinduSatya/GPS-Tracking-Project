import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import Home from "./pages/home";
import UseProtectedWrapper from "./pages/useProtectedWrapper";
import UserLogout from "./pages/UserLogout";

// import { useContext } from "react";
// import { UserDataContext } from "./assets/context/userContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UseProtectedWrapper>
              <Home />
            </UseProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UseProtectedWrapper>
              <UserLogout />
            </UseProtectedWrapper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
      </Routes>
    </>
  );
}

export default App;
