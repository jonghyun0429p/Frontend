import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header2';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/SignupPage" element={<SignupPage />}></Route>
        {/* <Route path="/Prompt" element={<Prompt />}></Route>
        <Route path="/History" element={<History />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
