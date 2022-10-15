import React from 'react';
import './App.css';
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import About from "./routes/About";
import { Routes,Route } from 'react-router-dom';




function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
    </Routes>
   </>
  );
}

export default App;
