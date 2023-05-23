import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { BirthdayPage } from './Pages/Birthday';
import { AnniversaryPage } from './Pages/AnniversaryPage';
import LoginForm from './Components/LoginForm/LoginForm';
import { SpecialEvents } from './Pages/SpecialEvents';
import { LoginPage } from './Pages/LoginPage';
import { SignUpPage } from './Pages/SignUpPage';


function App() {
  return (
    
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday-decor" element={<BirthdayPage/>} />
        <Route path="/anniversary-decor" element={<AnniversaryPage/>} />
        <Route exact path="/login" component={LoginForm} />
        <Route path ="/special-events" element={<SpecialEvents/>}/>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/sign-up" element={<SignUpPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
