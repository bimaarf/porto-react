import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/auth/Login";
import axios from "axios";
import { Register } from "./pages/auth/Register";
import Tweets from "./pages/Tweets";
import { Experiences } from "./pages/Experiences";
// -----------------------------
axios.defaults.baseURL = "https://api-porto.bimarf.in/";
// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] =
  "application/json/x-www-form-urlencoded; charset=UTF-8; multipart/form-data";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
function App() {
  const [authCheck, setAuthCheck] = useState()
  useEffect(() => {
    if(localStorage.getItem('auth_token')) return setAuthCheck(true)
    setAuthCheck(false)
  })
  return (
    <>
      <ToastContainer />
      <Navbar authCheck={authCheck} setAuthCheck={setAuthCheck} />
      <Routes>
        <Route path="/auth/login" element={<Login setAuthCheck={setAuthCheck} />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    
    </>
  );
}

export default App;
