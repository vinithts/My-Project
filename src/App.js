import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './Navbar';
import IndividualIntervalsExample from './carousel'
import Login from './login'
import Cards from "./cards";
import Country from "./country";
import Global from "./global";
import Blogs from  "./blogs";
import End from"./end";
function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
       
       <Routes>
         <Route path="/carousel" element={<IndividualIntervalsExample/>} />
         <Route path="/login"element={<Login/>} />
         <Route path="/cards"element={<Cards/>} />
         <Route path="/country"element={<Country/>} />
         <Route path="/global"element={<Global/>} />
         <Route path="/blogs"element={<Blogs/>} />
         <Route path="/end" element={<End/>}/>
       </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
