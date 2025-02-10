import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import { useContext } from "react";
import { UserDataContext } from "./assets/context/userContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
      </Routes>
    </>
  );
}

export default App;
