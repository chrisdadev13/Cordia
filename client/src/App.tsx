import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/room" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
