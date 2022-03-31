import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import "./App.css"


export default function App() {
  return (
    <BrowserRouter className='App'>
      <Routes>
        <Route path="/" element={<Home />}>
  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


