import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { BirthdayPage } from './Pages/Birthday';
import { AnniversaryPage } from './Pages/AnniversaryPage';


function App() {
  return (
  
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday-decor" element={<BirthdayPage/>} />
        <Route path="/anniversary-decor" element={<AnniversaryPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
